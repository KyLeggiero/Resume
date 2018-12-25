package Résumé

import jQueryInterface.*
import org.bh.tools.ui.*
import org.w3c.dom.*
import kotlin.browser.*
import kotlin.dom.*

/**
 * @author Ben Leggiero
 * @since 2018-12-23
 */

data class RésuméPortal(
        val résumés: List<Résumé>
): HtmlElementRenderable {

    override fun renderToHtmlElement(): Element {
        val section = document.createElement("section")

        val heading = document.createElement("h2")
        heading.textContent = "Résumés"
        section.appendChild(heading)

        val list = document.createElement("ul")
        list.addClass("résumé-portal")
        résumés
            .map(::RésuméPortalItem)
            .map(HtmlElementRenderable::renderToHtmlElement)
            .forEach {
                val listItem = document.createElement("li")
                listItem.appendChild(it)
                list.appendChild(listItem)
            }
        section.appendChild(list)

        return section
    }
}


data class RésuméPortalItem(
        val résumé: Résumé
): HtmlElementRenderable {
    override fun renderToHtmlElement(): Element {
        val anchor = document.createElement("a")
        (anchor as? HTMLAnchorElement)?.href = "#${résumé.id}"
//        jq(anchor).click { event ->
//            alert("Hi")
//            event.preventDefault()
//        }
        anchor.textContent = "Title: ${résumé.title}"
        return anchor
    }

}

external fun alert(message: String)
