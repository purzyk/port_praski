class filterigIsotope {
  constructor() {
    (function ($) {
      $(document).ready(function () {

        $('.znajdzLokal__filters__clear').click(function (event) {
          event.preventDefault();
          $('input[type=checkbox]').each(function () {
            this.checked = false;
            resetInputsChangeA();
          });

        });

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


        $rangeA.ionRangeSlider({
          skin: "round",
          type: "double",
          min: 0,
          max: 10,
          from: 0,
          to: 10,
          onStart: updateInputsStartA,
          onChange: updateInputsChangeA
        });

        $rangeB.ionRangeSlider({
          skin: "round",
          type: "double",
          min: 0,
          max: 300,
          from: 0,
          to: 300,
          onStart: updateInputsStartB,
          onChange: updateInputsChangeB
        });
        $rangeC.ionRangeSlider({
          skin: "round",
          type: "double",
          min: 0,
          max: 10,
          from: 0,
          to: 10,
          onStart: updateInputsStartC,
          onChange: updateInputsChangeC
        });
        var instanceA = $rangeA.data("ionRangeSlider");
        var instanceB = $rangeB.data("ionRangeSlider");
        var instanceC = $rangeC.data("ionRangeSlider");


        var pagination = $('.pagination');

        function handleRangeInputChange() {
          mixer.filter(mixer.getState().activeFilter);
        }

        function resetInputsChangeA(data) {
          handleRangeInputChange();
          instanceA.reset()
          instanceB.reset()
          instanceC.reset()
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
            containerID: 'Container',
            perPage: 4,
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

        function destroyPagination() {
          $('.pagination').jPages('destroy');
        };

        setPagination();


        var containerEl = document.querySelector(".container");
        var mixer = mixitup(containerEl, {
          animation: {
            enable: false
          },
          controls: {},
          load: {
            sort: 'sort:asc'
          },
          multifilter: {
            enable: true // enable the multifilter extension for the mixer,'
          },
          controls: {
            live: true
          },
          debug: {
            enable: true
          },
          callbacks: {
            onMixStart: function (state, futureState) {
              destroyPagination();
            },
            onMixClick: function (state, futureState) {
              /* onMixClick not working with multifilter - github issue #386 */
            },
            onMixEnd: function (state, originalEvent) {
              $(".counter").text(state.totalMatching);
              setPagination();
            }
          }
        });

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
          var a = Number(target.dom.el.getAttribute('data-a'));
          var b = Number(target.dom.el.getAttribute('data-b'));
          var c = Number(target.dom.el.getAttribute('data-c'));
          var range = getRange();

          if (a < range.aMin || a > range.aMax || b < range.bMin || b > range.bMax || c < range.cMin || c > range.cMax) {
            testResult = false;
          }
          return testResult;
        }

        mixitup.Mixer.registerFilter('testResultEvaluateHideShow', 'range', filterTestResult);

        /* getState */
        var state = mixer.getState();
        $(".total").text(state.totalTargets);
        $(".counter").text(state.totalTargets);

        $("form :input").change(function () {
          var currentValue = this.value;
          $('button[data-value="' + currentValue + '"]').remove();
        });

      });
    })(jQuery);
  }
}

export default filterigIsotope;