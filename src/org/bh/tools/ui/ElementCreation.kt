@file:Suppress("unused")

package org.bh.tools.ui

import org.w3c.dom.*
import kotlin.browser.*

/*
 * @author Ben Leggiero
 * @since 2018-12-24
 */

fun createElementFromHTML(htmlString: String): Element? {
    val div = document.createElement("div")
    div.innerHTML = htmlString.trim()

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild as? Element ?: null.also { console.error("Could not convert new HTML node into element") }
}
