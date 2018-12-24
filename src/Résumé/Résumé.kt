package Résumé


/**
 * @author ben
 * @since 2018-12-21.
 */
data class Résumé(
        val id: String,
        val title: String
) {

    companion object {
        operator fun invoke(filtering: BasicRésuméJson, with: RésuméFilterJson): Résumé {
            val base = filtering
            val filter = with

            return Résumé(
                    id = "${base.meta.id}_${filter.meta.id}",
                    title = filter.meta.title
            )
        }
    }
}