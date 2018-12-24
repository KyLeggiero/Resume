import Résumé.*
import jQueryInterface.*
import org.w3c.fetch.*
import kotlin.js.*


/**
 * @author Ben Leggiero
 * @since 2018-12-18
 */


fun main(args: Array<String>) {
    jq {
        jq("body").append("<main><h2>Hello there</h2></main>")

        fun buildPortal(base: BasicRésuméJson, filters: List<RésuméFilterJson>) {
            jq("main").append(RésuméPortal(résumés = filters.map { filter -> Résumé(filtering = base, with = filter) }).renderToHtmlElement())
        }

        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        fetchAllAsJson("/documents/resume-basic.json", "/documents/resume-filter-software-engineer.json") { jsons ->
            val resumeBasic = BasicRésuméJson(jsons.first())

            if (null == resumeBasic) {
                println("Could not parse basic Reésumé JSON!")
            }
            else {
                buildPortal(base = resumeBasic, filters = jsons.drop(1).mapNotNull { RésuméFilterJson(it) })
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
    }}
