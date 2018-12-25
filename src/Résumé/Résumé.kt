package Résumé

import org.bh.tools.ui.*
import org.w3c.dom.*


/**
 * @author ben
 * @since 2018-12-21.
 */
data class Résumé(
        val id: String,
        val title: String
): HtmlElementRenderable {

    override fun renderToHtmlElement(): Element {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
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