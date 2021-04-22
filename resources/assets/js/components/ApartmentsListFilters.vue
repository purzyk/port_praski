<template>
    <aside class="znajdzLokal__filters">
        <button class="znajdzLokal__filters__close --mobile"></button>
        <h1 class="fnt50 znajdzLokal__title filtry__title">Filtry</h1>
        <div
            class="line znajdzLokal__line --mobile aos-init aos-animate"
            data-aos="width"
            data-aos-duration="800"
        ></div>
        <button
            type="reset"
            data-filter="all"
            class="znajdzLokal__filters__clear btn --white --mobile"
        >
            Wyczyść filtry
        </button>
        <button class="znajdzLokal__filters__close--wide btn --white --mobile">
            Zastosuj filtry
        </button>
        <div class="znajdzLokal__filters__item --inwestycje">
            <h3 class="znajdzLokal__filters__title">inwestycja</h3>
            <div class="znajdzLokal__filters__item__wrapp">
                <div
                    class="controls smaller-margin"
                    data-filter-group="inwestycje"
                >
                    <ul class="checkboxTest">
                        <li>
                            <input type="checkbox" value=".port" id="cb1" />
                            <label for="cb1"><img src=""/></label>
                            <span class="checkboxTest__title">Port</span>
                        </li>
                        <li>
                            <input type="checkbox" value=".port-ii" id="cb2" />
                            <label for="cb2"><img src=""/></label>
                            <span class="checkboxTest__title">Port II</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="znajdzLokal__filters__item --typ">
            <h3 class="znajdzLokal__filters__title">Typ</h3>

            <div class="controls" data-filter-group="typ">
                <span class="wpcf7-form-control-wrap acceptance-1">
                    <span class="wpcf7-form-control wpcf7-acceptance">
                        <span class="wpcf7-list-item">
                            <label>
                                <input type="checkbox" value=".mieszkanie" />
                                <span class="wpcf7-list-item-label"
                                    >Mieszkanie</span
                                >
                            </label>
                        </span>
                    </span>
                </span>
                <span class="wpcf7-form-control-wrap acceptance-1">
                    <span class="wpcf7-form-control wpcf7-acceptance">
                        <span class="wpcf7-list-item">
                            <label>
                                <input type="checkbox" value=".uslugi" />
                                <span class="wpcf7-list-item-label"
                                    >Lokal Usługowy</span
                                >
                            </label>
                        </span>
                    </span>
                </span>
            </div>
        </div>
        <div class="znajdzLokal__filters__item">
            <h3 class="znajdzLokal__filters__title">Liczba pokoi</h3>

            <VueSlider  v-model="rooms" :enable-cross="false" :min="0" :max="4" :marks="[0, 4]"/>
        </div>
        <div class="znajdzLokal__filters__item">
            <h3 class="znajdzLokal__filters__title">Powierzchnia</h3>

            <VueSlider v-model="area" :enable-cross="false" :min="0" :max="100" :marks="[0, 100]"/>
        </div>
        <div class="znajdzLokal__filters__item">
            <h3 class="znajdzLokal__filters__title">Powierzchnia</h3>

            <VueSlider v-model="floor" :enable-cross="false" :min="0" :max="10" :marks="[0, 10]"/>
        </div>
        <div class="znajdzLokal__filters__item">
            <h3 class="znajdzLokal__filters__title">Cechy dodatkowe</h3>

            <div class="controls dodatkowe" data-filter-group="cechy">
                <span class="wpcf7-form-control-wrap acceptance-1">
                    <span class="wpcf7-form-control wpcf7-acceptance">
                        <span class="wpcf7-list-item">
                            <label>
                                <input type="checkbox" value=".balkon" />
                                <span class="wpcf7-list-item-label"
                                    >balkon</span
                                >
                            </label>
                        </span>
                    </span>
                </span>

                <span class="wpcf7-form-control-wrap acceptance-1">
                    <span class="wpcf7-form-control wpcf7-acceptance">
                        <span class="wpcf7-list-item">
                            <label>
                                <input type="checkbox" value=".taras" />
                                <span class="wpcf7-list-item-label">taras</span>
                            </label>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    </aside>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
    components: {
        VueSlider,
    },
    data() {
        return {
            rooms: [0, 4],
            area: [0,100],
            floor: [0,10]
        }
    }
};
</script>