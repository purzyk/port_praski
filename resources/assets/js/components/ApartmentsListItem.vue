<template>
    <article>
        <div class="znajdzLokal__item">
            <div class="znajdzLokal__item__copy">
                <h2 class="znajdzLokal__item__copy__title">
                    <span class="znajdzLokal__item__inwestycja">
                        {{ investment }}
                    </span>
                </h2>
                <span
                    class="znajdzLokal__item__title"
                    v-if="apartment.typ === 'Usługi'"
                >
                    Lokal nr {{ apartment.post_title }}</span
                >
                <span class="znajdzLokal__item__title" v-else>
                    Mieszkanie nr {{ apartment.post_title }}</span
                >
                <div class="lokal__twoColumns">
                    <h3>Powierzchnia:</h3>
                    <p>{{ apartment.custom.powierzchnia }} m²</p>
                </div>
                <div class="lokal__twoColumns">
                    <h3>Liczba pokoi:</h3>
                    <p>{{ apartment.custom.liczba_pokoi }}</p>
                </div>

                <div class="lokal__twoColumns">
                    <h3>Piętro:</h3>
                    <p>{{ apartment.custom.pietro }}</p>
                </div>

                <div class="lokal__twoColumns">
                    <h3>Status:</h3>
                    <p>{{ apartment.custom.status }}</p>
                </div>
            </div>
            <div
                class="line --grey "
                data-aos="width"
                data-aos-duration="800"
            ></div>
            <figure>
                <img
                    src="https://port-praski.resimo.tech/wp-content/uploads/2021/03/1_1_s-ii-1-1_1-150x132-c-default.jpg"
                />
            </figure>
            <div
                class="line --grey "
                data-aos="width"
                data-aos-duration="800"
            ></div>

            <div class="lokal__btns">
                <button
                    class="btn contact-btn"
                    data-id="B.4.1"
                    data-investment="Port II"
                >
                    prośba o kontakt
                </button>
                <a :href="apartmentUrl" class="btn --lightGrey" v-if="apartment.typ === 'Usługi'">
                    Szczegóły lokalu
                </a>
                <a :href="apartmentUrl" class="btn --lightGrey" v-else>
                    Szczegóły mieszkania
                </a>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        apartment: {
            type: Object,
        },
        investment: {
            type: String,
            required: true,
        },
    },
    computed: {
        apartmentUrl() {
            return `https://port-praski.resimo.tech/lokale/${this.apartment.slug}`;
        },
    },
};
</script>
