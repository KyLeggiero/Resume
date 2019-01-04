package org.bh.tools.base.async

import kotlin.browser.*

/*
 * @author Ben Leggiero
 * @since 2019-01-03
 */



fun async(execute: () -> Unit) {
    window.setTimeout(execute)
}
