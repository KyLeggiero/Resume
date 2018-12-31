import Résumé.*
import jQueryInterface.*
import org.w3c.fetch.*
import kotlin.browser.*
import kotlin.js.*


/*
 * @author Ben Leggiero
 * @since 2018-12-18
 */


val allResourcePaths = arrayOf(
        "/documents/resume-basic.json",
        "/documents/resume-filter-software-engineer.json"
)

var cachedPortal: RésuméPortal? = null


fun main(args: Array<String>) {
    jq {
        val renderer = DynamicRésumePageRenderer(jq("main")[0])


        fun refreshPage() {
            renderer.refreshPage(RésuméPageState.inferredFromUrl())
        }


        renderer.refreshPage(RésuméPageState.placeholder)

        fun listenForPageChanges() {
            jq(window).on("hashchange") {
                console.log("Would refresh")
                refreshPage()
            }
        }


        fun buildPortal(base: BasicRésuméJson, filters: List<RésuméFilterJson>) {
            RésuméPageState.sharedCache.bases += base
            RésuméPageState.sharedCache.filters += filters
            refreshPage()
        }


        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        fetchAllAsJson(*allResourcePaths) { jsons ->
            val resumeBasic = BasicRésuméJson(jsons.first())

            if (null == resumeBasic) {
                println("Could not parse basic Résumé JSON!")
            }
            else {
                buildPortal(base = resumeBasic, filters = jsons.drop(1).mapNotNull { RésuméFilterJson(it) })
                listenForPageChanges()
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
