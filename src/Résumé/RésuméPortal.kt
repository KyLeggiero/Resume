package Résumé

import org.bh.tools.base.collections.*
import org.bh.tools.ui.*
import org.bh.tools.ui.Heading.Level.*
import org.w3c.dom.*


/**
 * @author Ben Leggiero
 * @since 2018-12-23
 */
data class RésuméPortal(
        val résumés: List<Résumé>
): HtmlElementRenderable {

    override fun renderToHtmlElement(): Element {
        val heading = Heading(level1, "Résumés")

        val list = UnorderedList<RésuméPortalItemContent>(résumés.mapTo(mutableSetOf()) { RésuméPortalItem(it) })
        list.addClass("résumé-portal")

        return UntypedGroup(listOf(heading, list)).renderToHtmlElement()
    }



    companion object {
        @Suppress("UnnecessaryVariable")
        operator fun invoke(filtering: BasicRésuméJson, with: List<RésuméFilterJson>): RésuméPortal {
            val base = filtering
            val filters = with

            return RésuméPortal(filters.map { Résumé(filtering = base, with = it) })
        }
    }
}



private typealias RésuméPortalItemContent = SingleItemCollection<Link<SingleItemCollection<PlainText>>>



data class RésuméPortalItem(
        val résumé: Résumé
): ListItem<RésuméPortalItemContent>
(SingleItemCollection(Link(href = "#${résumé.id}", text = résumé.title))) {
//    override fun renderToHtmlElement(): HTMLLIElement {
//        val link = Link(to = "#${résumé.id}")
////        jq(anchor).click { event ->
////            alert("Hi")
////            event.preventDefault()
////        }
//        link.textContent = this.text
//
//        val listItem = super.renderToHtmlElement()
//        listItem.textContent = ""
//        listItem.appendChild(link)
//
//        return listItem
//    }
}

//external fun alert(message: String)
