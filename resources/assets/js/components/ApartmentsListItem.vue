<template>
    <article>
        <div class="znajdzLokal__item">
            <div class="znajdzLokal__item__copy">
                <h2 class="znajdzLokal__item__copy__title">
                    <span class="znajdzLokal__item__inwestycja">
                        {{apartment.stageName}}
                    </span>
                </h2>
                <span class="znajdzLokal__item__title">
                    Mieszkanie nr {{apartment.name}}</span
                >
                <div class="lokal__twoColumns">
                    <h3>Powierzchnia:</h3>
                    <p>{{apartment.area}} m²</p>
                </div>
                <div class="lokal__twoColumns">
                    <h3>Liczba pokoi:</h3>
                    <p>321</p>
                </div>

                <div class="lokal__twoColumns">
                    <h3>Piętro:</h3>
                    <p>{{apartment.floor}}</p>
                </div>

                <div class="lokal__twoColumns">
                    <h3>Status:</h3>
                    <p>{{status}}</p>
                </div>
            </div>
            <div
                class="line --grey aos-init aos-animate"
                data-aos="width"
                data-aos-duration="800"
            ></div>
            <figure>
                <img :src="apartment.imageUrl" />
            </figure>
            <div
                class="line --grey aos-init aos-animate"
                data-aos="width"
                data-aos-duration="800"
            ></div>

            <div class="lokal__btns">
                <button
                    class="btn contact-btn"
                    data-id="B.4.1"
                    data-investment="						Port II
					"
                >
                    prośba o kontakt
                </button>
                <a
                    href="http://localhost/port-praski/lokale/b-4-1/"
                    class="btn --lightGrey"
                >
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
            type: Object
        }
    },
    computed: {
        status() {
            const statusFromApi = this.apartment.status
            if(statusFromApi === 'available') {
                return "Wolne"
            } else if (statusFromApi === 'reserved') {
                return "Zarezerwowany"
            } else {
                return "Niedostępne"
            }
        }
    }
}
</script>