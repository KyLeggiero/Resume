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

    override fun renderToHtmlElement(): Node {
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
    fun renderToHtmlElement(): Node
}



var Element.onlyChild: Node?
    get() = if (childNodes.length == 1) null else firstChild
    set(newValue) {
        this.innerHTML = ""
        this.appendChild(newValue ?: return)
    }
