<template>
    <aside class="znajdzLokal__filters" :style="styleObject">
        <button
            class="znajdzLokal__filters__close --mobile"
            @click="closeFilters"
        ></button>
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
            @click="resetFilters"
        >
            Wyczyść filtry
        </button>
        <button
            class="znajdzLokal__filters__close--wide btn --white --mobile"
            @click="closeFilters"
        >
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
                        <li v-for="item in investments" :key="item.id">
                            <input
                                type="checkbox"
                                class="filters-checkbox"
                                :value="item.id"
                                :id="item.id"
                                v-model="localFilters.investments"
                                style="display: none"
                            />
                            <label :for="item.id"                  
                                ><img :src="item.image.sizes.thumbnail" class="filters-investment-image"
                            /></label>
                            <span class="checkboxTest__title">{{
                                item.title
                            }}</span>
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
                                <input
                                    type="checkbox"
                                    class="filters-checkbox"
                                    value="Mieszkanie lub Apartament"
                                    v-model="localFilters.type"
                                />
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
                                <input
                                    type="checkbox"
                                    class="filters-checkbox"
                                    value="Usługi"
                                    v-model="localFilters.type"
                                />
                                <span class="wpcf7-list-item-label"
                                    >Lokal Usługowy</span
                                >
                            </label>
                        </span>
                    </span>
                </span>
            </div>
        </div>
        <div class="znajdzLokal__filters__item --sliders">
            <h3 class="znajdzLokal__filters__title">Liczba pokoi</h3>

            <VueSlider
                v-model="localFilters.rooms"
                :enable-cross="false"
                :min="minRooms"
                :max="maxRooms"
                :marks="localFilters.rooms"
                tooltip="none"
            />
        </div>
        <div class="znajdzLokal__filters__item --sliders">
            <h3 class="znajdzLokal__filters__title">Powierzchnia</h3>

            <VueSlider
                v-model="localFilters.area"
                :enable-cross="false"
                :min="minArea"
                :max="maxArea"
                :marks="localFilters.area"
                :interval="0.01"
                tooltip="none"
            />
        </div>
        <div class="znajdzLokal__filters__item --sliders">
            <h3 class="znajdzLokal__filters__title">Piętro</h3>

            <VueSlider
                v-model="localFilters.floor"
                :enable-cross="false"
                :min="minFloor"
                :max="maxFloor"
                :marks="localFilters.floor"
                tooltip="none"
            />
        </div>
        <div class="znajdzLokal__filters__item --sliders">
            <h3 class="znajdzLokal__filters__title">Cechy dodatkowe</h3>

            <div class="controls dodatkowe" data-filter-group="cechy">
                <span
                    class="wpcf7-form-control-wrap acceptance-1"
                    v-for="item in extra"
                    :key="item.term_id"
                >
                    <span class="wpcf7-form-control wpcf7-acceptance">
                        <span class="wpcf7-list-item">
                            <label>
                                <input
                                    type="checkbox"
                                    class="filters-checkbox"
                                    :value="item.term_id"
                                    v-model="localFilters.extra"
                                />
                                <span class="wpcf7-list-item-label">{{
                                    item.name
                                }}</span>
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
    props: {
        filters: {
            type: Object,
            required: true,
        },
        investments: {
            type: Array,
            required: false,
        },
        extra: {
            type: Array,
            required: true,
        },
        maxFloor: {
            type: Number,
            required: true,
        },
        maxArea: {
            type: Number,
            required: true,
        },
        maxRooms: {
            type: Number,
            required: true,
        },
        minArea: {
            type: Number,
            required: true,
        },
        minRooms: {
            type: Number,
            required: true,
        },
        minFloor: {
            type: Number,
            required: true,
        },
        showFiltersMobile: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            localFilters: [],
        };
    },
    computed: {
        styleObject() {
            return this.showFiltersMobile ? { display: "block" } : {};
        }
    },
    methods: {
        closeFilters() {
            this.$emit("close-filters");
        },
        resetFilters() {
            this.$emit("reset-filters");
        }
    },
    mounted() {
        this.localFilters = this.filters;
    },
};
</script>
