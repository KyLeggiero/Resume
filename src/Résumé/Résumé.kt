package Résumé

import Résumé.BasicRésuméJson.Content.*
import org.bh.tools.base.collections.*
import org.bh.tools.ui.*
import org.bh.tools.ui.BodyText.Kind.*
import org.bh.tools.ui.Group.Kind.*
import org.bh.tools.ui.Heading.Level.*
import org.w3c.dom.*
import org.w3c.dom.url.*
import kotlin.browser.*
import kotlin.js.*


/**
 * @author ben
 * @since 2018-12-21.
 */
data class Résumé(
        val id: String,
        val title: String,
        val contact: Contact,
        val latestJob: Job?
): Group<HTMLElement, List<HtmlWidget<*>>>(kind = article, children = listOf(
        Heading(level1, title),
        BodyText(kind = paragraph, children = listOf(
                contact.blogUrl?.href?.let { Link(href = it, text = contact.name) } ?: PlainText(contact.name)
        )),
        BodyText(kind = aside, text = "Pretend there's more awesome content here")
)) {
    companion object {
        operator fun invoke(filtering: BasicRésuméJson, with: RésuméFilterJson): Résumé {
            val base = filtering
            val filter = with

            return Résumé(
                    id = "${base.meta.id}_${filter.meta.id}",
                    title = filter.meta.title,
                    contact = Contact(from = base.content.contact),
                    latestJob = Job(from = base.content.workHistory.lastOrNull())
            )
        }
    }



    data class Contact(
            val name: String,
            val blogUrl: URL?
    ): HtmlRichTextWidget<HTMLSpanElement, SingleItemCollection<HtmlElementRenderable>>(
            htmlTagName = "span",
            children = SingleItemCollection(blogUrl?.let { Link(href = it, text = name) } ?: PlainText(name))
    ) {
        companion object {
            operator fun invoke(from: BasicRésuméJson.Content.Contact): Contact {
                return Contact(name = (from.preferredFirstName ?: from.fullFirstName) + (if (null != from.middleInitial) " ${from.middleInitial.toUpperCase()}." else "") + " " + from.lastName,
                               blogUrl = from.blogURL)
            }
        }
    }



    data class Job(
            val title: String
    ) {
        companion object {
            operator fun invoke(from: BasicRésuméJson.Content.Job?): Job? {
                return Job(
                        title = (from?.end ?: from?.start)?.title ?: return null
                )
            }
        }
    }
}