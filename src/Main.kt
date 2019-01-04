import Résumé.*
import jQueryInterface.*
import org.bh.tools.base.async.*
import org.bh.tools.ui.Group
import org.bh.tools.ui.Group.Kind.*
import org.w3c.fetch.*
import kotlin.browser.*
import kotlin.js.*


/*
 * @author Ben Leggiero
 * @since 2018-12-18
 */


object resourcePaths {
    val basicAndFilters = arrayOf(
            "/documents/resume-basic.json",
            "/documents/resume-filter-software-engineer.json"
    )
}

//var cachedPortal: RésuméPortal? = null


fun main(args: Array<String>) {
    jq {
        val renderer = DynamicRésuméPageRenderer(
            appBarTitleTextElement = jq(".title .title-text")[0],
            appBarSubtitleTextElement = jq(".title .subtitle-text")[0],
            portalContainerElement = jq("#portal")[0],
            résuméContainerElementGenerator = {
                val elementId = "résumé_$it"
                val existingElements = jq("#$elementId")
                if (0 == existingElements.length) {
                    val element = Group(
                            kind = article,
                            id = elementId,
                            classes = mutableListOf("page"),
                            children = emptyList()
                    ).renderToHtmlElement()
                    jq("main")[0].appendChild(element)
                    return@DynamicRésuméPageRenderer element
                }
                else {
                    return@DynamicRésuméPageRenderer existingElements[0]
                }
            }
        )

        renderer.refreshPage(RésuméPageState.placeholder)


        fun DynamicRésuméPageRenderer.refreshPage() = this.refreshPage(RésuméPageState.inferredFromUrl())


        fun buildPortal(base: BasicRésuméJson, filters: List<RésuméFilterJson>) {
            RésuméPageState.sharedCache.bases += base
            RésuméPageState.sharedCache.filters += filters
            renderer.refreshPage()
        }


        fun beginListeningForPageChanges() {
            jq(window).on("hashchange") {
                renderer.refreshPage()
            }
        }


        fun beginBuildingOtherPagesInTheBackground() {
            async {
                RésuméPageState.sharedCache.bases.forEach { base ->
                    RésuméPageState.sharedCache.filters.forEach { filter ->
                        val résumé = Résumé(filtering = base, with = filter)
                        renderer.preRenderPage(from = RésuméPageState.résumé(résumé))
                    }
                }
            }
        }

//
        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        fetchAllAsJson(* resourcePaths.basicAndFilters) { allJsonDocuments ->
            val resumeBasic = BasicRésuméJson(allJsonDocuments.first())

            if (null == resumeBasic) {
                console.error("Could not parse basic Résumé JSON!")
            }
            else {
                val filters = allJsonDocuments.drop(1)
                buildPortal(base = resumeBasic, filters = filters.mapNotNull { RésuméFilterJson(it) ?: null.also { console.error("Could not convert JSON to filter!") } })
                beginBuildingOtherPagesInTheBackground()
                beginListeningForPageChanges()
            }
        }
    }
}


fun fetchAllAsJson(vararg resources: String, result: (List<Json>) -> Unit) {
    resolveAllAsJson(promise = fetchAll(*resources), result = result)
}


fun resolveAllAsJson(promise: Promise<Array<out Response>>, result: (List<Json>) -> Unit) {
    val accumulatedJson = mutableListOf<Json>()

    promise
            .then { it.toMutableList() }
            .then { allResponses ->

        fun resolveAllResponses() {
            if (allResponses.isEmpty()) {
                result(accumulatedJson)
            }
            else {
                allResponses.removeAt(0).json().then { json ->
                    @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE", "LABEL_NAME_CLASH")
                    accumulatedJson.add(json as? Json ?: return@then)

                    resolveAllResponses()
                }
            }
        }

        resolveAllResponses()
    }
}
