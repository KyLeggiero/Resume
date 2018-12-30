package Résumé

import jQueryInterface.*
import org.w3c.dom.*
import kotlin.browser.*

/*
 * @author Ben Leggiero
 * @since 2018-12-24
 */

class DynamicRésumePageRenderer(
        val containerElement: Element
) {
    fun refreshPage(state: RésuméPageState) {
        clearPage(then = {
            applyRootClasses(from = state)
            showContent(state.content())
        })
    }


    private fun clearPage(then: () -> Unit) {
        containerElement.innerHTML = ""
        then()
    }


    private fun applyRootClasses(from: RésuméPageState) {
        when (from) {
            is RésuméPageState.placeholder,
            is RésuméPageState.portal -> jq(":root").addClass("top-level")
            is RésuméPageState.résumé -> jq(":root").removeClass("top-level")
        }
    }


    private fun showContent(contentElement: Node) {
        containerElement.appendChild(contentElement)
    }


    private fun RésuméPageState.content(): Node {
        return renderer().renderToHtmlElement()
    }


    private fun RésuméPageState.renderer() = when (this) {
        is RésuméPageState.placeholder -> résuméPagePlaceholder
        is RésuméPageState.portal -> this.portal
        is RésuméPageState.résumé -> this.résumé
    }
}


sealed class RésuméPageState {
    object placeholder : RésuméPageState()

    class portal(val portal: RésuméPortal): RésuméPageState()

    class résumé(val résumé: Résumé): RésuméPageState()



    data class Cache(
            var bases: Set<BasicRésuméJson>,
            var filters: Set<RésuméFilterJson>
    )



    companion object {
        var sharedCache = Cache(bases = emptySet(), filters = emptySet())


        fun inferredFromUrl(): RésuméPageState {
            val meaning = UrlParser.parse(window.location)

            if (null != meaning.currentBaseRésuméId && null != meaning.currentRésuméFilterId) {
                val cachedBaseMatch = sharedCache.bases.firstOrNull { it.meta.id == meaning.currentBaseRésuméId }
                val cachedFilterMatch = sharedCache.filters.firstOrNull { it.meta.id == meaning.currentRésuméFilterId }

                if (null != cachedBaseMatch && null != cachedFilterMatch) {
                    return résumé(Résumé(filtering = cachedBaseMatch, with = cachedFilterMatch))
                }
            }


            val firstCachedBase = sharedCache.bases.firstOrNull()
            if (null != firstCachedBase) {
                val filters = sharedCache.filters
                if (filters.isNotEmpty()) {
                    return portal(RésuméPortal(filtering = firstCachedBase, with = sharedCache.filters.toList()))
                }
            }


            return placeholder
        }
    }
}
