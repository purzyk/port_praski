class filterigMixItUp {
    constructor() {
        (function($) {
            $(document).ready(function() {
                $(".znajdzLokal__filters__clear").click(function(event) {
                    event.preventDefault();
                    $("input[type=checkbox]").each(function() {
                        this.checked = false;
                        resetInputsChangeA();
                    });
                });
                const loaders = [];
                var $rangeA = $('[data-ref="range-slider-a"]');
                var $inputFromA = $(".js-input-from-a");
                var $inputToA = $(".js-input-to-a");
                var fromA = 0;
                var toA = 0;
                var $rangeB = $('[data-ref="range-slider-b"]');
                var $inputFromB = $(".js-input-from-b");
                var $inputToB = $(".js-input-to-b");
                var fromB = 0;
                var toB = 0;
                var $rangeC = $('[data-ref="range-slider-c"]');
                var $inputFromC = $(".js-input-from-c");
                var $inputToC = $(".js-input-to-c");
                var fromC = 0;
                var toC = 0;
                var $itemsPerPage = 5;
                if ($("body").hasClass("page-template-template-znajdz-lokal")) {
                    var $itemsPerPage = 10;
                }

                $rangeA.ionRangeSlider({
                    skin: "round",
                    type: "double",
                    min: 0,
                    max: 10,
                    from: 0,
                    to: 10,
                    onStart: updateInputsStartA,
                    onFinish: updateInputsChangeA,
                });

                $rangeB.ionRangeSlider({
                    skin: "round",
                    type: "double",
                    min: 0,
                    max: 300,
                    from: 0,
                    to: 300,
                    onStart: updateInputsStartB,
                    onFinish: updateInputsChangeB,
                });
                $rangeC.ionRangeSlider({
                    skin: "round",
                    type: "double",
                    min: 0,
                    max: 10,
                    from: 0,
                    to: 10,
                    onStart: updateInputsStartC,
                    onFinish: updateInputsChangeC,
                });
                var instanceA = $rangeA.data("ionRangeSlider");
                var instanceB = $rangeB.data("ionRangeSlider");
                var instanceC = $rangeC.data("ionRangeSlider");

                var pagination = $(".pagination");

                function handleRangeInputChange() {
                    mixer.filter(mixer.getState().activeFilter);
                }

                function resetInputsChangeA(data) {
                    handleRangeInputChange();
                    instanceA.reset();
                    instanceB.reset();
                    instanceC.reset();
                    $inputFromA.prop("value", 0);
                    $inputToA.prop("value", 10);
                    $inputFromB.prop("value", 0);
                    $inputToB.prop("value", 300);
                    $inputFromC.prop("value", 0);
                    $inputToC.prop("value", 10);
                }

                function updateInputsStartA(data) {
                    fromA = data.from;
                    toA = data.to;
                    $inputFromA.prop("value", fromA);
                    $inputToA.prop("value", toA);
                }

                function updateInputsChangeA(data) {
                    handleRangeInputChange();
                    fromA = data.from;
                    toA = data.to;
                    $inputFromA.prop("value", fromA);
                    $inputToA.prop("value", toA);
                }

                function updateInputsStartB(data) {
                    fromB = data.from;
                    toB = data.to;
                    $inputFromB.prop("value", fromB);
                    $inputToB.prop("value", toB);
                }

                function updateInputsChangeB(data) {
                    handleRangeInputChange();
                    fromB = data.from;
                    toB = data.to;
                    $inputFromB.prop("value", fromB);
                    $inputToB.prop("value", toB);
                }

                function updateInputsStartC(data) {
                    fromC = data.from;
                    toC = data.to;
                    $inputFromC.prop("value", fromC);
                    $inputToC.prop("value", toC);
                }

                function updateInputsChangeC(data) {
                    handleRangeInputChange();
                    fromC = data.from;
                    toC = data.to;
                    $inputFromC.prop("value", fromC);
                    $inputToC.prop("value", toC);
                }

                function setPagination() {
                    pagination.jPages({
                        containerID: "Container",
                        perPage: $itemsPerPage,
                        startPage: 1,
                        startRange: 1,
                        midRange: 3,
                        endRange: 1,
                        previous: "poprzednia",
                        next: "następna",
                        first: false,
                        last: false
                    });
                }

                $(".pagination").on("click", () => {
                    $("body, html").scrollTop($("#Container").offset().top - 200);
                });

                function destroyPagination() {
                    $(".pagination").jPages("destroy");
                }

                setPagination();

                var containerEl = document.querySelector(".container");
                var mixer = mixitup(containerEl, {
                    animation: {
                        enable: false,
                    },
                    behavior: {
                        liveSort: false,
                    },
                    load: {
                        sort: "sort:asc",
                    },
                    multifilter: {
                        enable: true, // enable the multifilter extension for the mixer,'
                    },
                    controls: {
                        enable: false,
                        live: false,
                    },
                    debug: {
                        enable: true,
                    },
                    callbacks: {
                        onMixStart: function(state, futureState) {
                            destroyPagination();
                            const loader = document.querySelector(
                                ".loader-container"
                            );
                            loader.classList.add("loader-container--show");
                            loader.classList.remove("loader-container--hide");

                            
                        },
                        onMixClick: function(state, futureState) {
                            /* onMixClick not working with multifilter - github issue #386 */
                            // const loader = document.querySelector(".loader-container")
                            // loader.classList.remove("loader-container--hide")
                            // loader.classList.add("loader-container--show")
                        },
                        onMixEnd: function(state, originalEvent) {
                            $(".counter").text(state.totalMatching);
                            const loader = document.querySelector(
								".loader-container"
							);
							loader.classList.remove(
								"loader-container--show"
							);
							loader.classList.add("loader-container--hide");
                            setPagination();
                        },
                    },
                });

                const sortButtons = () => {
                    const sortUp = document.querySelectorAll(".sortUp");
                    const sortDown = document.querySelectorAll(".sortDown");

                    for (let i = 0; i < sortUp.length; i++) {
                        sortUp[i].addEventListener("click", function() {
                            const loader = document.querySelector(
                                ".loader-container"
                            );
                            loader.classList.add("loader-container--show");
                            loader.classList.remove("loader-container--hide");
                            mixer.sort("sort:asc");
							sortUp[i].style.display = "none";
                            for (let i = 0; i < sortDown.length; i++) {
                                sortDown[i].style.display = "inline-block";
                            }
                        });
                    }

                    for (let i = 0; i < sortDown.length; i++) {
                        sortDown[i].addEventListener("click", function() {
							const loader = document.querySelector(
                                ".loader-container"
                            );
                            loader.classList.add("loader-container--show");
                            loader.classList.remove("loader-container--hide");
							sortDown[i].style.display = "none";
                            mixer.sort("sort:desc");
                            for (let i = 0; i < sortUp.length; i++) {
                                sortUp[i].style.display = "inline-block";
                            }
                        });
                    }

                    for (let i = 0; i < sortDown.length; i++) {
                        sortDown[i].style.display = "none";
                    }
                };

                sortButtons();

                function getRange() {
                    var aMin = Number(instanceA.result.from);
                    var aMax = Number(instanceA.result.to);
                    var bMin = Number(instanceB.result.from);
                    var bMax = Number(instanceB.result.to);
                    var cMin = Number(instanceC.result.from);
                    var cMax = Number(instanceC.result.to);
                    return {
                        aMin: aMin,
                        aMax: aMax,
                        bMin: bMin,
                        bMax: bMax,
                        cMin: cMin,
                        cMax: cMax,
                    };
                }

                function filterTestResult(testResult, target) {
                    var a = Number(target.dom.el.getAttribute("data-a"));
                    var b = Number(target.dom.el.getAttribute("data-b"));
                    var c = Number(target.dom.el.getAttribute("data-c"));
                    var range = getRange();

                    if (
                        a < range.aMin ||
                        a > range.aMax ||
                        b < range.bMin ||
                        b > range.bMax ||
                        c < range.cMin ||
                        c > range.cMax
                    ) {
                        testResult = false;
                    }
                    console.log("filtered");
                    return testResult;
                }

                mixitup.Mixer.registerFilter(
                    "testResultEvaluateHideShow",
                    "range",
                    filterTestResult
                );
                mixer.show()
                .then(function(state) {
                    console.log(state.totalShow === state.totalTargets); // true
                });
                /* getState */
                var state = mixer.getState();
                $(".total").text(state.totalTargets);
                $(".counter").text(state.totalTargets);

                $("form :input").change(function() {
                    var currentValue = this.value;
                    $('button[data-value="' + currentValue + '"]').remove();
                });
            });
        })(jQuery);
    }
}

export default filterigMixItUp;