package org.w3c.fetch

import kotlin.js.*

/*
 * @author Ben Leggiero
 * @since 2018-12-21
 */



fun fetchAll(vararg resources: String) = Promise.all(resources.map(::fetch).toTypedArray())
