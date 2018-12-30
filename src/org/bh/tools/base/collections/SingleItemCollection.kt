package org.bh.tools.base.collections

/**
 * Just a collection which only contains one element
 *
 * @author Ben Leggiero
 * @since 2018-12-29
 */
class SingleItemCollection<Element>(val onlyElement: Element): Collection<Element> {

    override val size = 1


    override fun contains(element: Element): Boolean {
        return element == this.onlyElement
    }


    override fun containsAll(elements: Collection<Element>): Boolean {
        return elements.firstOrNull() == onlyElement && elements.size == 1
    }


    override fun isEmpty(): Boolean {
        return false
    }


    override fun iterator(): Iterator<Element> {
        return object : Iterator<Element> {

            var hasIterated = false

            override fun hasNext(): Boolean {
                return !hasIterated
            }

            override fun next(): Element {
                hasIterated = true
                return onlyElement
            }
        }
    }
}