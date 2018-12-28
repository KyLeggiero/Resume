package org.w3c.fetch

import kotlin.js.*

/*
 * @author Ben Leggiero
 * @since 2018-12-21
 */

external fun fetch(input: String): Promise<Response>
external fun fetch(input: Request): Promise<Response>
