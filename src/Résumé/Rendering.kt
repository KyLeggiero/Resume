package Résumé

import org.w3c.dom.*

/*
 * @author Ben Leggiero
 * @since 2018-12-24
 */

class DynamicRésumePageRenderer(
        val containerElement: Element
) {
    fun refreshPage(state: RésuméPageState) {
        clearPage(then = {
            showContent(state.content())
        })
    }


    private fun clearPage(then: () -> Unit) {
        containerElement.innerHTML = ""
        then()
    }


    private fun showContent(contentElement: Element) {
        containerElement.appendChild(contentElement)
    }


    private fun RésuméPageState.content(): Element {
        return renderer().renderToHtmlElement()
    }


    private fun RésuméPageState.renderer() = when (this) {
        is RésuméPageState.placeholder -> placeholder
        is RésuméPageState.portal -> RésuméPortal(résumés = this.résumés)
        is RésuméPageState.résumé -> this.résumé
    }
}


sealed class RésuméPageState {
    object placeholder : RésuméPageState()

    class portal(val résumés: List<Résumé>): RésuméPageState()

    class résumé(val résumé: Résumé): RésuméPageState()
}
