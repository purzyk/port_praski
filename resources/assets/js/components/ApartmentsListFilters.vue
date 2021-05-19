<template>
    <aside class="znajdzLokal__filters" :style="styleObject">
        <button
            class="znajdzLokal__filters__close --mobile"
            @click="closeFilters"
        ></button>
        <h1 class="fnt50 znajdzLokal__title filtry__title">
            {{ locale.filters }}
        </h1>
        <div
            class="line znajdzLokal__line --mobile aos-init aos-animate"
            data-aos="width"
            data-aos-duration="800"
        ></div>
        <button
            type="reset"
            data-filter="all"
            class="znajdzLokal__filters__clear btn --white --mobile "
            @click="resetFilters"
        >
            {{ locale.clearFilters }}
        </button>
        <button
            class="znajdzLokal__filters__close--wide btn --white --mobile"
            @click="closeFilters"
        >
            {{ locale.applyFilters }}
        </button>
        <div class="znajdzLokal__filters__item --inwestycje">
            <div style="display: flex">
                <h3 class="znajdzLokal__filters__title">
                    {{ locale.investment }}
                </h3>
                <p
                    style="margin-left: auto; font-size: 13px;cursor:pointer"
                    class="clear-filters--desktop"
                    @click="resetFilters"
                >
                    {{ locale.clearFilters }}
                </p>
            </div>
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
                                :value="item.title"
                                :id="item.id"
                                v-model="localFilters.investments"
                                style="display: none"
                            />
                            <label :for="item.id"
                                ><img
                                    :src="item.image.sizes.thumbnail"
                                    class="filters-investment-image"
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
            <div style="display: flex">
                <h3 class="znajdzLokal__filters__title">{{ locale.type }}</h3>
                <p
                    style="margin-left: auto; font-size: 13px;cursor:pointer"
                    class="clear-filters--desktop"
                    @click="resetFilters"
                    v-if="showClearButton"
                >
                    {{ locale.clearFilters }}
                </p>
            </div>
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
                                <span class="wpcf7-list-item-label">{{
                                    locale.flat
                                }}</span>
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
                                <span class="wpcf7-list-item-label">{{
                                    locale.commercial
                                }}</span>
                            </label>
                        </span>
                    </span>
                </span>
            </div>
        </div>
        <div
            class="znajdzLokal__filters__item --sliders"
            v-show="localFilters.rooms"
        >
            <h3 class="znajdzLokal__filters__title">{{ locale.roomsCount }}</h3>

            <VueSlider
                v-model="localFilters.rooms"
                :enable-cross="false"
                :min="minRooms"
                :max="maxRooms"
                :marks="localFilters.rooms"
                tooltip="none"
            />
        </div>
        <div
            class="znajdzLokal__filters__item --sliders"
            v-show="localFilters.area"
        >
            <h3 class="znajdzLokal__filters__title">{{ locale.area }}</h3>

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
        <div
            class="znajdzLokal__filters__item --sliders"
            v-show="localFilters.floor"
        >
            <h3 class="znajdzLokal__filters__title">{{ locale.floor }}</h3>

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
            <h3 class="znajdzLokal__filters__title">
                {{ locale.additionalFeatures }}
            </h3>

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
                                    locale[item.name]
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
        locale: {
            type: Object,
            required: true,
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
        },
        showClearButton() {
            return window.location.href.includes("inwestycja");
        },
    },
    methods: {
        closeFilters() {
            this.$emit("close-filters");
        },
        resetFilters() {
            this.$emit("reset-filters");
        },
    },
    beforeMount() {
        this.localFilters = this.filters;
    },
};
</script>
