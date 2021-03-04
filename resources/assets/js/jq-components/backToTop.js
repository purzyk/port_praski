import $ from "jquery";

class BackToTop {
  constructor() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $("#ToTop").fadeIn();
      } else {
        $("#ToTop").fadeOut();
      }
    });

    $("#ToTop").click(function() {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });

    $(".header__logo").click(function() {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  }
}

export default BackToTop;
