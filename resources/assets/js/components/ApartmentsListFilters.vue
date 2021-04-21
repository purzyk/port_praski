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

            <div class="range-sliderrr">
                <span class="irs irs--round js-irs-0"
                    ><span class="irs"
                        ><span class="irs-line" tabindex="0"></span
                        ><span class="irs-min" style="visibility: hidden;"
                            >0</span
                        ><span class="irs-max" style="visibility: hidden;"
                            >10</span
                        ><span
                            class="irs-from"
                            style="visibility: visible; left: 1.66295%;"
                            >0</span
                        ><span
                            class="irs-to"
                            style="visibility: visible; left: 94.7573%;"
                            >10</span
                        ><span
                            class="irs-single"
                            style="visibility: hidden; left: 43.6844%;"
                            >0 — 10</span
                        ></span
                    ><span class="irs-grid"></span
                    ><span
                        class="irs-bar"
                        style="left: 2.85714%; width: 94.2857%;"
                    ></span
                    ><span
                        class="irs-shadow shadow-from"
                        style="display: none;"
                    ></span
                    ><span
                        class="irs-shadow shadow-to"
                        style="display: none;"
                    ></span
                    ><span class="irs-handle from" style="left: 0%;"
                        ><i></i><i></i><i></i></span
                    ><span class="irs-handle to" style="left: 94.2857%;"
                        ><i></i><i></i><i></i></span></span
                ><input
                    type="text"
                    class="js-range-slider irs-hidden-input"
                    data-ref="range-slider-a"
                    value=""
                    tabindex="-1"
                    readonly=""
                />
            </div>
            <div class="extra-controls">
                <input type="text" class="js-input-from-a" value="0" />
                <input type="text" class="js-input-to-a" value="0" />
            </div>
        </div>
        <div class="znajdzLokal__filters__item">
            <h3 class="znajdzLokal__filters__title">Powierzchnia</h3>

            <div class="range-sliderrr">
                <span class="irs irs--round js-irs-1"
                    ><span class="irs"
                        ><span class="irs-line" tabindex="0"></span
                        ><span class="irs-min" style="visibility: hidden;"
                            >0</span
                        ><span class="irs-max" style="visibility: hidden;"
                            >300</span
                        ><span
                            class="irs-from"
                            style="visibility: visible; left: 1.66295%;"
                            >0</span
                        ><span
                            class="irs-to"
                            style="visibility: visible; left: 93.5659%;"
                            >300</span
                        ><span
                            class="irs-single"
                            style="visibility: hidden; left: 43.0887%;"
                            >0 — 300</span
                        ></span
                    ><span class="irs-grid"></span
                    ><span
                        class="irs-bar"
                        style="left: 2.85714%; width: 94.2857%;"
                    ></span
                    ><span
                        class="irs-shadow shadow-from"
                        style="display: none;"
                    ></span
                    ><span
                        class="irs-shadow shadow-to"
                        style="display: none;"
                    ></span
                    ><span class="irs-handle from" style="left: 0%;"
                        ><i></i><i></i><i></i></span
                    ><span class="irs-handle to" style="left: 94.2857%;"
                        ><i></i><i></i><i></i></span></span
                ><input
                    type="text"
                    class="js-range-slider irs-hidden-input"
                    data-ref="range-slider-b"
                    value=""
                    tabindex="-1"
                    readonly=""
                />
            </div>
            <div class="extra-controls">
                <input type="text" class="js-input-from-b" value="0" />
                <input type="text" class="js-input-to-b" value="0" />
            </div>
        </div>
        <div class="znajdzLokal__filters__item">
            <h3 class="znajdzLokal__filters__title">piętro</h3>
            <div class="range-sliderrr">
                <span class="irs irs--round js-irs-2"
                    ><span class="irs"
                        ><span class="irs-line" tabindex="0"></span
                        ><span class="irs-min" style="visibility: hidden;"
                            >0</span
                        ><span class="irs-max" style="visibility: hidden;"
                            >10</span
                        ><span
                            class="irs-from"
                            style="visibility: visible; left: 1.66295%;"
                            >0</span
                        ><span
                            class="irs-to"
                            style="visibility: visible; left: 94.7573%;"
                            >10</span
                        ><span
                            class="irs-single"
                            style="visibility: hidden; left: 43.6844%;"
                            >0 — 10</span
                        ></span
                    ><span class="irs-grid"></span
                    ><span
                        class="irs-bar"
                        style="left: 2.85714%; width: 94.2857%;"
                    ></span
                    ><span
                        class="irs-shadow shadow-from"
                        style="display: none;"
                    ></span
                    ><span
                        class="irs-shadow shadow-to"
                        style="display: none;"
                    ></span
                    ><span class="irs-handle from" style="left: 0%;"
                        ><i></i><i></i><i></i></span
                    ><span class="irs-handle to" style="left: 94.2857%;"
                        ><i></i><i></i><i></i></span></span
                ><input
                    type="text"
                    class="js-range-slider irs-hidden-input"
                    data-ref="range-slider-c"
                    value=""
                    tabindex="-1"
                    readonly=""
                />
            </div>
            <div class="extra-controls">
                <input type="text" class="js-input-from-c" value="0" />
                <input type="text" class="js-input-to-c" value="0" />
            </div>
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
