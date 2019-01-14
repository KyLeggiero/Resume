@file:Suppress("unused", "PackageDirectoryMismatch")

package Résumé

import Extensions.*
import kotlin.js.*

/**
 * @author Ben
 * @since 2018-12-21
 */

data class RésuméFilterJson(
        val meta: Meta,
        val filters: RecursiveFilter
) {
    companion object {
        private val compatibleVersionRegex = Regex("1\\.\\d(?:\\.\\d)?")


        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        operator fun invoke(jsonObject: Json): RésuméFilterJson? {
            val formatVersion = jsonObject["format-version"]
            if (formatVersion !is String || !compatibleVersionRegex.matches(formatVersion)) {
                console.error("Incompatible format version")
                return null
            }
            else {
                console.info("Filtered résumé accepted with format version $formatVersion")
            }

            return RésuméFilterJson(
                    meta = Meta(jsonObject = jsonObject["meta"] as? Json ?: return null) ?: return null,
                    filters = RecursiveFilter(jsonObject = jsonObject["filters"] as? Json ?: return null) ?: return null.also { console.error("Could not parse recursive filter!") }
            )
        }
    }



    data class Meta(
            val id: String,
            val infoVersion: KotlinVersion,
            val title: String
    ) {
        init {
            console.info("Basic résumé: \"$title\" $infoVersion ($id)")
        }



        companion object {
            operator fun invoke(jsonObject: Json): Meta? {
                return Meta(
                        id = jsonObject["id"] as? String ?: return null,
                        infoVersion = KotlinVersion(jsonString = jsonObject["info-version"] as? String ?: return null) ?: return null,
                        title = jsonObject["title"] as? String ?: return null
                )
            }
        }
    }



    data class RecursiveFilter(
            val inclusion: Inclusion,
            val criteria: List<Criterion>
    ) {
        companion object {
            @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
            operator fun invoke(jsonObject: Json): RecursiveFilter? {
                return RecursiveFilter(
                        inclusion = Inclusion(jsonString = jsonObject["inclusion"] as? String ?: return null) ?: return null.also { console.error("Could not parse inclusion filter!") },
                        criteria = (jsonObject["criteria"] as? Array<*>)?.map { Criterion(jsonObject = it as? Json ?: return null) ?: return null } ?: return null.also { console.error("Could not parse criteria!") }
                )
            }
        }



        enum class Inclusion(
                val jsonString: String
        ) {
            any(jsonString = "any"),
            all(jsonString = "all"),
            ;



            companion object {
                operator fun invoke(jsonString: String) = values().firstOrNull { it.jsonString == jsonString }
            }
        }



        data class Criterion(
                val scope: Scope,
                val type: Type,
                val values: Set<String>
        ) {
            companion object {
                operator fun invoke(jsonObject: Json): Criterion? {
                    return Criterion(
                            scope = Scope(jsonString = jsonObject["scope"] as? String ?: return null) ?: return null,
                            type = Type(jsonString = jsonObject["type"] as? String ?: return null) ?: return null,
                            values = (jsonObject["values"] as? Array<*> ?: return null).mapNotNullTo(mutableSetOf()) { it as? String }
                    )
                }
            }



            enum class Scope(
                    val jsonString: String
            ) {
                keywords(jsonString = "keywords"),
                tags(jsonString = "tags"),
                ;



                companion object {
                    operator fun invoke(jsonString: String) = values().firstOrNull { it.jsonString == jsonString }
                }
            }



            enum class Type(
                    val jsonString: String
            ) {
                contains(jsonString = "contains"),
                highlight(jsonString = "highlight"),
                ;



                companion object {
                    operator fun invoke(jsonString: String) = values().firstOrNull { it.jsonString == jsonString }
                }
            }
        }
    }
}
