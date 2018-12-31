@file:Suppress("unused")

package org.bh.tools.ui

import org.bh.tools.base.collections.*
import org.bh.tools.ui.BodyText.Kind.*
import org.bh.tools.ui.Group.Kind.*
import org.w3c.dom.*
import org.w3c.dom.url.*
import kotlin.browser.*
import kotlin.dom.*

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



open class HtmlWidget<out HtmlElementType>(
        open val htmlTagName: String,
        open val classes: MutableList<String> = mutableListOf()
): HtmlElementRenderable
where HtmlElementType: HTMLElement
{
    override open fun renderToHtmlElement(): HtmlElementType {
        val element = document.createElement(htmlTagName).unsafeCast<HtmlElementType>()
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
        open val text: String
)
    : HtmlWidget<HtmlElementType>(htmlTagName)
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
        open val children: Children
)
    : HtmlWidget<HtmlElementType>(htmlTagName = htmlTagName)
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
        open override val children: Children
)
    : HtmlParentWidget<HtmlElementType, Children>(htmlTagName, children)
        where HtmlElementType: HTMLElement,
              Children: Collection<HtmlElementRenderable>
{
    companion object {
        operator fun <Self, HtmlElementType> invoke(htmlTagName: String, text: String)
                : HtmlRichTextWidget<HtmlElementType, List<PlainText>>
                where Self: HtmlRichTextWidget<HtmlElementType, List<PlainText>>,
                      HtmlElementType: HTMLElement {

            return HtmlRichTextWidget(htmlTagName, listOf(PlainText(text)))
        }
    }
}



// MARK: - Actual Element Wrappers

open class Group<out ChildHtmlElement, Children>
(val kind: Kind = section, children: Children)
    : HtmlParentWidget<HTMLElement, Children>(htmlTagName = kind.htmlTagName, children = children)
where ChildHtmlElement: HTMLElement,
      Children: Collection<HtmlWidget<ChildHtmlElement>>
{
    enum class Kind(val htmlTagName: String) {
        section("section"),
        article("article"),
        main("main"),
    }
}



class UntypedGroup(kind: Kind = section, children: List<HtmlWidget<HTMLElement>>)
    : Group<HTMLElement, List<HtmlWidget<HTMLElement>>>(kind, children)



class BodyText<Children>(val kind: Kind = paragraph, children: Children)
    : HtmlRichTextWidget<HTMLElement, Children>(kind.htmlTagName, children)
where Children: Collection<HtmlElementRenderable>
{
    companion object {
        operator fun invoke(kind: Kind, text: String) =
                BodyText(kind, SingleItemCollection(PlainText(text)))
    }



    enum class Kind(val htmlTagName: String) {
        paragraph("p"),
        aside("aside")
    }
}



open class InlineText<Children>(children: Children)
    : HtmlRichTextWidget<HTMLElement, Children>("span", children)
where Children: Collection<HtmlElementRenderable>



class PlainText(val text: String): HtmlElementRenderable {
    override fun renderToHtmlElement(): Node {
        return Text(text)
    }
}



class Link<Children>(val href: String, children: Children)
    : HtmlRichTextWidget<HTMLAnchorElement, Children>(htmlTagName = "a", children = children)
where Children: Collection<HtmlElementRenderable>
{
    override fun renderToHtmlElement(): HTMLAnchorElement {
        val content = super.renderToHtmlElement()
        content.href = href
        return content
    }



    companion object {
        operator fun invoke(href: String, text: String) =
                Link(href = href, children = SingleItemCollection(PlainText(text)))

        operator fun invoke(href: URL, text: String) =
                Link(href = href.href, text = text)
    }
}



class Heading(val level: Level, text: String): HtmlTextWidget<HTMLHeadingElement>(htmlTagName = "h${level.asDigit}", text = text) {

    enum class Level(val asDigit: Byte) {
        level1(1.toByte()),
        level2(2.toByte()),
        level3(3.toByte()),
        level4(4.toByte()),
        level5(5.toByte()),
        level6(6.toByte()),
    }
}



class UnorderedList<ItemChildren>(items: Set<ListItem<ItemChildren>>)
    : HtmlParentWidget<HTMLUListElement, Set<ListItem<ItemChildren>>>("ul", items)
where ItemChildren: Collection<HtmlElementRenderable>



open class ListItem<Children>
(children: Children)
    : HtmlRichTextWidget<HTMLLIElement, Children>(htmlTagName = "li", children = children)
where Children: Collection<HtmlElementRenderable> {

    companion object {
        operator fun invoke(text: String): ListItem<List<PlainText>> {
            return ListItem(children = listOf(PlainText(text)))
        }
    }
}
