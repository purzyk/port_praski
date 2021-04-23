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
                class="apartment-list-item-image"
                    :src="apartment.rzut_3D"
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
                    @click="openContactModal"
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
import MicroModal from 'micromodal'
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
        apartmentNameForModal() {
            return this.apartment.post_title.replace("-", ".").toUpperCase()
        }
    },
    methods: {
        openContactModal() {
            MicroModal.show('contact-modal')
            const messageInput = document.querySelector('#contact-modal input[name="text-wiadomosc"]')
            messageInput.parentNode.parentNode.classList.add("active")
            messageInput.value = `Interesuje mnie oferta ${this.investment} - mieszkanie nr ${this.apartmentNameForModal}`
        }
    }
};
</script>
