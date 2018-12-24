package org.bh.tools.ui

import org.w3c.dom.*
import kotlin.browser.*


/**
 * Conforming components can render to an HTML string
 *
 * @author Ben Leggiero
 * @since 2018-12-21
 */

interface HtmlStringRenderable: HtmlElementRenderable {
    fun renderToHtmlString(): String

    override fun renderToHtmlElement(): Element {
        return createElementFromHTML(renderToHtmlString())
                ?: document.createElement("div").also {
                    console.error("Failed to create any element from HTML string; reverting to div")
                }
    }
}



/**
 * Conforming components can render to an HTML element
 *
 * @author Ben Leggiero
 * @since 2018-12-21
 */

interface HtmlElementRenderable {
    fun renderToHtmlElement(): Element
}
