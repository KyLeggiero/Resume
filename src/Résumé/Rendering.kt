package Résumé

import jQueryInterface.*
import org.w3c.dom.*
import kotlin.browser.*
import Résumé.RemoteWidgetData.*
import org.bh.tools.ui.*
import Résumé.RésuméPageState.*
import kotlin.dom.addClass



/*
 * @author Ben Leggiero
 * @since 2018-12-24
 */



class DynamicRésuméPageRenderer(
        val appBarTitleTextElement: Element,
        val appBarSubtitleTextElement: Element,
        val portalContainerElement: Element,
        val résuméContainerElementGenerator: (id: String) -> Element
) {
    private val initialAppBarTitle = appBarTitleTextElement.textContent
    private val initialAppBarSubtitle = appBarSubtitleTextElement.textContent
    private val placceholderContainerElement get() = portalContainerElement

    private val cachedGeneratedContainerElements = mutableMapOf<String, Element>()


    fun refreshPage(state: RésuméPageState) {
        applyRootClasses(from = state)
        showContent(from = state)
        applyRemoteWidgetData(state.remoteWidgetData())
    }


    fun preRenderPage(from: RésuméPageState) = when (from) {
        is résumé -> résuméContainerElement(résuméId = from.résumé.id).ifEmpty { addAll(from.content().childNodes) }
        is portal -> portalContainerElement.onlyChild = from.content()
        is placeholder -> placceholderContainerElement.onlyChild = from.content()
    }


    private fun résuméContainerElement(résuméId: String) =
            cachedGeneratedContainerElements[résuméId] ?: résuméContainerElementGenerator(résuméId).also {
                cachedGeneratedContainerElements[résuméId] = it
            }


    private fun applyRootClasses(from: RésuméPageState) {
        when (from) {
            is placeholder,
            is portal -> jq(":root").addClass("top-level")
            is résumé -> jq(":root").removeClass("top-level")
        }
    }


    private fun showContent(from: RésuméPageState) {
        @Suppress("UnnecessaryVariable") val state = from

        preRenderPage(from = state)
        present(state)
    }


    private fun present(state: RésuméPageState) {
        jq(".$currentlyPresentedElementClassName").removeClass(currentlyPresentedElementClassName)
        val element = when (state) {
            is résumé -> résuméContainerElement(state.résumé.id)
            is portal -> portalContainerElement
            is placeholder -> placceholderContainerElement
        }
        element.addClass(currentlyPresentedElementClassName)
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


    companion object {
        private const val currentlyPresentedElementClassName = "presented"
    }
}


private fun <N: Node> N.ifEmpty(block: N.() -> Unit) {
    if (this.isEmpty()) {
        block()
    }
}


private inline fun Node.isEmpty() = !this.hasChildNodes()


private fun Node.addAll(childNodes: NodeList) {
    childNodes.forEach {
        this.appendChild(it)
    }
}


private fun <T> ItemArrayLike<T>.forEach(action: (T) -> Unit) {
    val iterator = this.iterator()

    while (iterator.hasNext()) {
        action(iterator.next())
    }
}


private fun <T> ItemArrayLike<T>.iterator(): Iterator<T> {
    return object : Iterator<T> {

        var nextIndex = 0


        override fun hasNext() = nextIndex <= length - 1


        override fun next(): T {
            val currentIndex = nextIndex
            nextIndex += 1
            return item(currentIndex)!!
        }
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
