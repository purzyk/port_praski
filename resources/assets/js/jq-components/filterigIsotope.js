class filterigIsotope {
  constructor() {
    (function ($) {
      $(document).ready(function () {


        var $rangeA = $('[data-ref="range-slider-a"]');
        var $rangeB = $('[data-ref="range-slider-b"]');
        var $rangeC = $('[data-ref="range-slider-c"]');

        $rangeA.ionRangeSlider({
          skin: "round",
          type: "double",
          min: 0,
          max: 10,
          from: 0,
          to: 10,
          onChange: handleRangeInputChange
        });

        $rangeB.ionRangeSlider({
          skin: "round",
          type: "double",
          min: 0,
          max: 300,
          from: 0,
          to: 300,
          onChange: handleRangeInputChange
        });
        $rangeC.ionRangeSlider({
          skin: "round",
          type: "double",
          min: 0,
          max: 10,
          from: 0,
          to: 10,
          onChange: handleRangeInputChange
        });
        var instanceA = $rangeA.data("ionRangeSlider");
        var instanceB = $rangeB.data("ionRangeSlider");
        var instanceC = $rangeC.data("ionRangeSlider");


        var pagination = $('.pagination');

        function setPagination() {
          pagination.jPages({
            containerID: 'Container',
            perPage: 4,
            animation: false,
            startPage: 1,
            startRange: 1,
            midRange: 3,
            endRange: 1,
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
            duration: 350,
            queueLimit: 10
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
              $("#counter").text(state.totalMatching);
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

        function handleRangeInputChange() {
          mixer.filter(mixer.getState().activeFilter);
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
        $("#total").text(state.totalTargets);

        $("form :input").change(function () {
          var currentValue = this.value;
          $('button[data-value="' + currentValue + '"]').remove();
        });

      });
    })(jQuery);
  }
}

export default filterigIsotope;