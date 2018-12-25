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


fun main(args: Array<String>) {
    jq {
        jq("body").append("<main><h2>Hello there</h2></main>")

        val renderer = DynamicRésumePageRenderer(jq("main")[0])
        renderer.refreshPage(RésuméPageState.placeholder)

        fun listenForPageChanges() {
            jq(window).on("hashchange") {
                console.log("Would refresh")
//                renderer.refreshPage()
            }
        }


        fun buildPortal(base: BasicRésuméJson, filters: List<RésuméFilterJson>) {
            renderer.refreshPage(RésuméPageState.portal(résumés = filters.map { filter ->
                Résumé(filtering = base, with = filter)
            }))
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
