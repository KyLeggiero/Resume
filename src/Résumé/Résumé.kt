package Résumé

import org.bh.tools.ui.*
import org.w3c.dom.*
import kotlin.browser.*


/**
 * @author ben
 * @since 2018-12-21.
 */
data class Résumé(
        val id: String,
        val title: String
): HtmlElementRenderable {

    override fun renderToHtmlElement(): Element {
        val article = document.createElement("article")

        val heading = document.createElement("h1")
        heading.textContent = title
        article.appendChild(heading)

        val excuse = document.createElement("aside")
        excuse.textContent = "Pretend there's awesome content here"
        article.appendChild(excuse)

        return article
    }



    companion object {
        operator fun invoke(filtering: BasicRésuméJson, with: RésuméFilterJson): Résumé {
            val base = filtering
            val filter = with

            return Résumé(
                    id = "${base.meta.id}_${filter.meta.id}",
                    title = filter.meta.title
            )
        }
    }
}