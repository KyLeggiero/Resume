package Extensions


/*
 * @author Ben Leggiero
 * @since 2018-12-20
 */


private val kotlinVersionRegex = Regex("(\\d+)\\.(\\d+)(?:\\.(\\d+))+")


operator fun KotlinVersion.Companion.invoke(jsonString: String) =
        kotlinVersionRegex.find(jsonString)?.groupValues?.let { groups ->
            KotlinVersion(major = groups.getOrNull(1)?.toInt() ?: return null,
                          minor = groups.getOrNull(2)?.toInt() ?: return null,
                          patch = groups.getOrNull(3)?.toInt() ?: 0
            )
        }

