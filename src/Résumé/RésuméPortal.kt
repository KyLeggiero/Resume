package Résumé

import org.bh.tools.ui.*

/**
 * @author Ben Leggiero
 * @since 2018-12-23
 */

data class RésuméPortal(
        val résumés: List<Résumé>
): HtmlStringRenderable {

    override fun renderToHtmlString(): String {
        return "<ul class='résumé-portal'>" +
                résumés
                        .map(::RésuméPortalItem)
                        .joinToString { "<li>${it.renderToHtmlString()}</li>" } +
                "</ul>"
    }
}


data class RésuméPortalItem(
        val résumé: Résumé
): HtmlStringRenderable {
    override fun renderToHtmlString(): String {
        return "Title: ${résumé.title}"
    }

}
