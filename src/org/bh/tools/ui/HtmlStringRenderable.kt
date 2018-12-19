package org.bh.tools.ui

import org.w3c.dom.*


/**
 * Conforming components can render to an HTML string
 *
 * @author Ben Leggiero
 * @since 2018-12-21
 */

interface HtmlStringRenderable {
    fun renderToHtmlString(): String
}
