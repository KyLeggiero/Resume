@file:Suppress("unused")

package org.bh.tools.ui

import org.bh.tools.base.collections.SingleItemCollection
import org.bh.tools.ui.BodyText.Kind.paragraph
import org.bh.tools.ui.Group.Kind.section
import org.w3c.dom.*
import org.w3c.dom.url.URL
import kotlin.browser.document
import kotlin.dom.addClass

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



open class HtmlWidget<out HtmlElementType>
(
        open val htmlTagName: String,
        open val id: String = "",
        open val classes: MutableList<String> = mutableListOf()
)
    : HtmlElementRenderable
        where HtmlElementType : HTMLElement
{
    override open fun renderToHtmlElement(): HtmlElementType {
        val element = document.createElement(htmlTagName).unsafeCast<HtmlElementType>()
        element.id = this.id
        classes.forEach { element.addClass(it) }
        return element
    }


    fun addClass(newClass: String): HtmlWidget<HtmlElementType> {
        this.classes += newClass
        return this
    }
}



open class HtmlTextWidget<out HtmlElementType>
(
        htmlTagName: String,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        open val text: String
)
    : HtmlWidget<HtmlElementType>(htmlTagName = htmlTagName, id = id, classes = classes)
where HtmlElementType: HTMLElement
{
    override fun renderToHtmlElement(): HtmlElementType {
        val textElement = super.renderToHtmlElement()
        textElement.textContent = text
        return textElement
    }
}



open class HtmlParentWidget<out HtmlElementType, Children>
(
        htmlTagName: String,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        open val children: Children
)
    : HtmlWidget<HtmlElementType>(htmlTagName = htmlTagName, id = id, classes = classes)
        where HtmlElementType: HTMLElement,
              Children: Collection<HtmlElementRenderable>
{

    override fun renderToHtmlElement(): HtmlElementType {
        val container = super.renderToHtmlElement()
        children.forEach { container.appendChild(it.renderToHtmlElement()) }
        return container
    }
}



open class HtmlRichTextWidget<out HtmlElementType, Children>
(
        htmlTagName: String,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        open override val children: Children
)
    : HtmlParentWidget<HtmlElementType, Children>(htmlTagName = htmlTagName, id = id, classes = classes, children = children)
        where HtmlElementType: HTMLElement,
              Children: Collection<HtmlElementRenderable>
{
    companion object {
        operator fun <Self, HtmlElementType> invoke(htmlTagName: String, id: String = "", classes: MutableList<String> = mutableListOf(), text: String)
                : HtmlRichTextWidget<HtmlElementType, List<PlainText>>
                where Self: HtmlRichTextWidget<HtmlElementType, List<PlainText>>,
                      HtmlElementType: HTMLElement {

            return HtmlRichTextWidget(htmlTagName, id = id, classes = classes, children = listOf(PlainText(text)))
        }
    }
}



// MARK: - Actual Element Wrappers

open class Group<out ChildHtmlElement, Children>
(
        val kind: Kind = section,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        children: Children
)
    : HtmlParentWidget<HTMLElement, Children>(htmlTagName = kind.htmlTagName, id = id, classes = classes, children = children)
where ChildHtmlElement: HTMLElement,
      Children: Collection<HtmlWidget<ChildHtmlElement>>
{
    enum class Kind(val htmlTagName: String) {
        section("section"),
        article("article"),
        main("main"),
    }
}



class UntypedGroup(
        kind: Kind = section,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        children: List<HtmlWidget<HTMLElement>>
)
    : Group<HTMLElement, List<HtmlWidget<HTMLElement>>>(kind, id = id, classes = classes, children = children)



class BodyText<Children>(
        val kind: Kind = paragraph,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        children: Children
)
    : HtmlRichTextWidget<HTMLElement, Children>(kind.htmlTagName, id = id, classes = classes, children = children)
where Children: Collection<HtmlElementRenderable>
{
    companion object {
        operator fun invoke(kind: Kind, id: String = "", classes: MutableList<String> = mutableListOf(), text: String) =
                BodyText(kind, id = id, classes = classes, children = SingleItemCollection(PlainText(text)))
    }



    enum class Kind(val htmlTagName: String) {
        paragraph("p"),
        aside("aside")
    }
}



open class InlineText<Children>(
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        children: Children
)
    : HtmlRichTextWidget<HTMLElement, Children>("span", id = id, classes = classes, children = children)
        where Children : Collection<HtmlElementRenderable>



class PlainText(val text: String): HtmlElementRenderable {
    override fun renderToHtmlElement(): Node {
        return Text(text)
    }
}



class Link<Children>(
        val href: String,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        children: Children
)
    : HtmlRichTextWidget<HTMLAnchorElement, Children>(htmlTagName = "a", id = id, classes = classes, children = children)
where Children: Collection<HtmlElementRenderable>
{
    override fun renderToHtmlElement(): HTMLAnchorElement {
        val content = super.renderToHtmlElement()
        content.href = href
        return content
    }



    companion object {
        operator fun invoke(href: String, id: String = "", classes: MutableList<String> = mutableListOf(), text: String) =
                Link(href = href, id = id, classes = classes, children = SingleItemCollection(PlainText(text)))

        operator fun invoke(href: URL, id: String = "", classes: MutableList<String> = mutableListOf(), text: String) =
                Link(href = href.href, id = id, classes = classes, text = text)
    }
}



class Heading(
        val level: Level,
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        text: String
)
    : HtmlTextWidget<HTMLHeadingElement>(htmlTagName = "h${level.asDigit}", id = id, classes = classes, text = text) {

    enum class Level(val asDigit: Byte) {
        level1(1.toByte()),
        level2(2.toByte()),
        level3(3.toByte()),
        level4(4.toByte()),
        level5(5.toByte()),
        level6(6.toByte()),
    }
}



class UnorderedList<ItemChildren>(
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        items: Set<ListItem<ItemChildren>>
)
    : HtmlParentWidget<HTMLUListElement, Set<ListItem<ItemChildren>>>("ul", id = id, classes = classes, children = items)
where ItemChildren: Collection<HtmlElementRenderable>



open class ListItem<Children>
(
        id: String = "",
        classes: MutableList<String> = mutableListOf(),
        children: Children
)
    : HtmlRichTextWidget<HTMLLIElement, Children>(htmlTagName = "li", id = id, classes = classes, children = children)
where Children: Collection<HtmlElementRenderable> {

    companion object {
        operator fun invoke(text: String, id: String): ListItem<List<PlainText>> {
            return ListItem(id = id, children = listOf(PlainText(text)))
        }
    }
}
