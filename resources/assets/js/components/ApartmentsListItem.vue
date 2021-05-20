<template>
    <article>
        <div class="znajdzLokal__item">
            <div class="znajdzLokal__item__copy">
                <h2 class="znajdzLokal__item__copy__title">
                    <span class="znajdzLokal__item__inwestycja">
                        {{ investmentName }}
                    </span>
                </h2>
                <span
                    class="znajdzLokal__item__title"
                    v-if="apartment.typ === 'Usługi'"
                >
                    {{locale.singularCommercial}} {{locale.no}} {{ apartment.post_title }}</span
                >
                <span class="znajdzLokal__item__title" v-else>
                    {{locale.flat}} {{locale.no}} {{ apartment.post_title }}</span
                >
                <div class="lokal__twoColumns">
                    <h3>{{locale.area}}:</h3>
                    <p>{{ apartment.custom.powierzchnia }} m²</p>
                </div>
                <div class="lokal__twoColumns">
                    <h3>{{locale.roomsCount}}:</h3>
                    <p>{{ apartment.custom.liczba_pokoi }}</p>
                </div>

                <div class="lokal__twoColumns">
                    <h3>{{locale.floor}}:</h3>
                    <p>{{ apartment.custom.pietro }}</p>
                </div>

                <div class="lokal__twoColumns">
                    <h3>Status:</h3>
                    <p>{{ locale[apartment.custom.status] }}</p>
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
                    {{locale.askContact}}
                </button>
                <a :href="apartmentUrl" class="btn --lightGrey" v-if="apartment.typ === 'Usługi'">
                    {{locale.commercialDetails}}
                </a>
                <a :href="apartmentUrl" class="btn --lightGrey" v-else>
                   {{locale.flatDetails}}
                </a>
                <!-- <a :href="apartmentUrl" class="btn">
                    Pobierz pdf
                </a> -->
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
        locale: {
            type: Object,
            required: true
        },
        en: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        apartmentUrl() {
            let baseUrl = this.en ? `${window.location.origin}/en/lokale` : `${window.location.origin}/lokale`
            return `${baseUrl}/${this.apartment.slug}`;
        },
        apartmentNameForModal() {
            return this.apartment.post_title.replace("-", ".").toUpperCase()
        },
        investmentName() {
            if(this.apartment.inwestycje.length === 1) {
                return this.apartment.inwestycje[0]
            } else {
                return this.apartment.inwestycje[1]
            }
        }
    },
    methods: {
        openContactModal() {
            MicroModal.show('contact-modal')
            const messageInput = document.querySelector('#contact-modal input[name="your-message"]')
            messageInput.parentNode.parentNode.classList.add("active")
            messageInput.value = `Interesuje mnie oferta ${this.investmentName} - mieszkanie nr ${this.apartmentNameForModal}`
        }
    }
};
</script>
