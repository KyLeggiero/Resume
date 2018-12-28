package Résumé

import org.w3c.dom.*
import kotlin.js.*



/**
 * @author Ben Leggiero
 * @since 2018-12-26
 */
object UrlParser {
    private const val uuidRegexPattern = "[A-Z0-9-]{36}"
    private const val fragmentRegexPattern = "#?(?<base>$uuidRegexPattern)_(?<filter>$uuidRegexPattern)"
    private val fragmentRegex = RegExp(fragmentRegexPattern, "i")


    fun parse(location: Location): UrlMeaning {
        val fragment = location.hash
        return parseFragment(fragment)
    }


    private fun parseFragment(fragment: String): UrlMeaning {

        val allGroups = fragmentRegex.exec(fragment) ?: return UrlMeaning.unknown

        val baseId = allGroups[1] ?: return UrlMeaning.unknown
        val filterId = allGroups[2] ?: return UrlMeaning.unknown

        return UrlMeaning(currentBaseRésuméId = baseId, currentRésuméFilterId = filterId)
    }
}



data class UrlMeaning(
        val currentBaseRésuméId: String?,
        val currentRésuméFilterId: String?
) {

    companion object {
        val unknown = UrlMeaning(currentBaseRésuméId = null, currentRésuméFilterId = null)
    }
}