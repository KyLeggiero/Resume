@file:Suppress("PackageDirectoryMismatch")

package Résumé

import org.bh.tools.ui.*
import org.w3c.dom.*
import kotlin.browser.*

/**
 * @author Ben Leggiero
 * @since 2018-12-25
 */
object résuméPagePlaceholder: HtmlElementRenderable {
    override fun renderToHtmlElement(): Element {
        val paragraph = document.createElement("p")
        paragraph.textContent = "Loading..."
        return paragraph
    }
}