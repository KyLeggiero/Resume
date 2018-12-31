package Résumé

import jQueryInterface.*
import org.w3c.dom.*
import kotlin.browser.*
import Résumé.RemoteWidgetData.*

/*
 * @author Ben Leggiero
 * @since 2018-12-24
 */

class DynamicRésumePageRenderer(
        val appBarTitleTextElement: Element,
        val appBarSubtitleTextElement: Element,
        val containerElement: Element
) {
    private val initialAppBarTitle = appBarTitleTextElement.textContent
    private val initialAppBarSubtitle = appBarSubtitleTextElement.textContent


    fun refreshPage(state: RésuméPageState) {
        clearPage(then = {
            applyRootClasses(from = state)
            showContent(state.content())
            applyRemoteWidgetData(state.remoteWidgetData())
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


    private fun applyRemoteWidgetData(remoteWidgetData: Set<RemoteWidgetData>) {
        if (remoteWidgetData.isEmpty()) {
            appBarTitleTextElement.textContent = initialAppBarTitle
            appBarSubtitleTextElement.textContent = initialAppBarSubtitle
        }
        else {
            remoteWidgetData.forEach {
                when (it) {
                    is appBarTitle -> appBarTitleTextElement.textContent = it.titleText
                    is appBarSubtitle -> appBarSubtitleTextElement.textContent = it.subtitleText
                }
            }
        }
    }


    private fun RésuméPageState.content(): Node {
        return renderer().renderToHtmlElement()
    }


    private fun RésuméPageState.remoteWidgetData(): Set<RemoteWidgetData>  = when (this) {
        is RésuméPageState.placeholder -> emptySet()
        is RésuméPageState.portal -> emptySet()
        is RésuméPageState.résumé -> this.résumé.remoteWidgetData()
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
                else {
                    console.error("Failed to parse any filter!")
                }
            }
            else {
                console.error("Failed to parse the base state!")
            }

            return placeholder
        }
    }
}



/**
 * An object which wants its data displayed in a remote widget
 */
interface RemoteWidgetDataSource {
    fun remoteWidgetData(): Set<RemoteWidgetData>
}


sealed class RemoteWidgetData {
    class appBarTitle(val titleText: String): RemoteWidgetData()
    class appBarSubtitle(val subtitleText: String): RemoteWidgetData()
}
