@file:Suppress("PackageDirectoryMismatch", "unused")

package Résumé

import Extensions.*
import org.w3c.dom.url.*
import kotlin.js.*

/**
 * @author Ben Leggiero
 * @since 2018-12-19
 */
data class BasicRésuméJson(
        val meta: Meta,
        val content: Content
) {

    companion object {
        private val compatibleVersionRegex = Regex("1\\.\\d(?:\\.\\d)?")


        operator fun invoke(jsonString: String): BasicRésuméJson? {
            return BasicRésuméJson(jsonObject = JSON.parse(jsonString))
        }


        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        operator fun invoke(jsonObject: Json): BasicRésuméJson? {
            val formatVersion = jsonObject["format-version"]
            if (formatVersion !is String || !compatibleVersionRegex.matches(formatVersion)) {
                console.error("Incompatible format version")
                return null
            }

            return BasicRésuméJson(meta = Meta(jsonObject = jsonObject["meta"] as? Json ?: return null) ?: return null,
                                   content = Content(jsonObject = jsonObject["content"] as? Json ?: return null) ?: return null
            )
        }
    }



    data class Meta(
            val id: String,
            val infoVersion: KotlinVersion,
            val title: String
    ) {
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



    data class Content(
            val contact: Contact,
            val workHistory: List<Job>
    ) {
        companion object {
            operator fun invoke(jsonObject: Json): Content? {
                @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE", "UNCHECKED_CAST")
                return Content(contact = Contact(jsonObject = jsonObject["contact"] as? Json ?: return null) ?: return null,
                               workHistory = (jsonObject["work-history"] as? Array<*> ?: return null).mapNotNull { Job(jsonObject = it as? Json ?: return@mapNotNull null) ?: null.also { console.error("Failed to parse job: ${JSON.stringify(jsonObject)}") } }
                )
            }
        }



        data class Contact(
                val fullFirstName: String,
                val preferredFirstName: String?,
                val middleInitial: String?,
                val lastName: String,

                val phoneNumber: String?,
                val emailAddress: String?,

                val blogURL: URL?
        ) {
            companion object {
                operator fun invoke(jsonObject: Json): Contact? {
                    return Contact(fullFirstName = jsonObject["full-first-name"] as? String ?: return null,
                                   preferredFirstName = jsonObject["preferred-first-name"] as? String,
                                   middleInitial = jsonObject["middle-initial"] as? String,
                                   lastName = jsonObject["last-name"] as? String ?: return null,

                                   phoneNumber = jsonObject["phone-number"] as? String,
                                   emailAddress = jsonObject["email-address"] as? String,

                                   blogURL = (jsonObject["blog-url"] as? String)?.let { URL(url = it) }
                    )
                }
            }
        }



        data class Job(
                val id: String,
                val company: Company,
                val start: Position,
                val end: Position?,
                val keywords: List<String>,
                val tags: Set<String>,
                val reasonForLeaving: ReasonForLeaving?
        ) {
            companion object {
                operator fun invoke(jsonObject: Json): Job? {
                    @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE", "UNCHECKED_CAST")
                    return Job(id = jsonObject["id"] as? String ?: return null,
                               company = Company(jsonObject = jsonObject["company"] as? Json ?: return null) ?: return null,
                               start = Position(jsonObject = jsonObject["start"] as? Json ?: return null) ?: return null,
                               end = (jsonObject["end"] as? Json)?.let { Position(jsonObject = it) },
                               keywords = (jsonObject["keywords"] as? Array<*>)?.mapNotNull { it as? String } ?: emptyList(),
                               tags = (jsonObject["tags"] as? Array<*>)?.mapNotNullTo(mutableSetOf()) { it as? String } ?: emptySet(),
                               reasonForLeaving = (jsonObject["reason-for-leaving"] as? Json)?.let { ReasonForLeaving(jsonObject = it) }
                    )
                }
            }



            data class Company(
                    val name: String,
                    val nameLong: String?,
                    val division: String?,
                    val broadLocation: String,
                    val address: String?,

                    val phoneNumber: String?
            ) {
                companion object {
                    operator fun invoke(jsonObject: Json): Company? {
                        return Company(name = jsonObject["name"] as? String ?: return null,
                                       nameLong = jsonObject["name-long"] as? String,
                                       division = jsonObject["division"] as? String,
                                       broadLocation = jsonObject["broad-location"] as? String ?: return null,
                                       address = jsonObject["address"] as? String,

                                       phoneNumber = jsonObject["phone-number"] as? String
                        )
                    }
                }
            }



            data class Position(
                    val date: Date,
                    val title: String?,
                    val description: String?,
                    val compensation: Compensation?
            ) {
                companion object {
                    operator fun invoke(jsonObject: Json): Position? {
                        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
                        return Position(date = Date(jsonObject["date"] as? String ?: return null),
                                        title = jsonObject["title"] as? String,
                                        description = jsonObject["description"] as? String,
                                        compensation = Compensation(jsonObject = jsonObject["compensation"] as? Json ?: return null)
                        )
                    }
                }



                data class Compensation(
                        val type: Type,
                        val amount: Double,
                        val tier: Tier
                ) {
                    companion object {
                        operator fun invoke(jsonObject: Json): Compensation? {
                            return Compensation(type = Type(jsonString = jsonObject["type"] as? String ?: return null) ?: return null,
                                                amount = jsonObject["amount"] as? Double ?: return null,
                                                tier = Tier(jsonString = jsonObject["tier"] as? String ?: return null) ?: return null)
                        }
                    }


                    enum class Type(val jsonString: String) {
                        hourly(jsonString = "hourly"),
                        yearly(jsonString = "yearly"),
                        ;



                        companion object {
                            operator fun invoke(jsonString: String): Type? {
                                return values().firstOrNull { it.jsonString == jsonString }
                            }
                        }
                    }



                    enum class Tier(val jsonString: String) {
                        partTime(jsonString = "part-time"),
                        fullTime(jsonString = "full-time"),
                        ;



                        companion object {
                            operator fun invoke(jsonString: String) = values().firstOrNull { it.jsonString == jsonString }
                        }
                    }
                }
            }



            data class ReasonForLeaving(
                    val brief: String,
                    val description: String
            ) {
                companion object {
                    operator fun invoke(jsonObject: Json): ReasonForLeaving? {
                        return ReasonForLeaving(brief = jsonObject["brief"] as? String ?: return null,
                                                description = jsonObject["description"] as? String ?: return null)
                    }
                }
            }
        }
    }
}



typealias BasicResumeJson = BasicRésuméJson
