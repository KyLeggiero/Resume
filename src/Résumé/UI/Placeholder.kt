@file:Suppress("PackageDirectoryMismatch")

package Résumé

import org.bh.tools.base.collections.*
import org.bh.tools.ui.*
import org.w3c.dom.*
import kotlin.browser.*

/**
 * @author Ben Leggiero
 * @since 2018-12-25
 */
object résuméPagePlaceholder: InlineText<SingleItemCollection<PlainText>>(
        classes = mutableListOf("loading-indicator", "placeholder"),
        children = SingleItemCollection(PlainText("Loading..."))
)