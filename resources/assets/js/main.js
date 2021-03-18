import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';
import AOS from 'aos';
import LazyLoad from "vanilla-lazyload"
import BackToTop from './jq-components/backToTop';
import SmoothScroll from './jq-components/smoothScroll';
import Splide from '@splidejs/splide';
import filterigIsotope from './jq-components/filterigIsotope';
import MicroModal from 'micromodal';

/* Replace image vidth youtube content */
function labnolIframe(div) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  );
  div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement("div");
    div.setAttribute("data-id", videoId);
    var thumbNode = document.createElement("img");
    thumbNode.src = "http://port.develop.name/wp-content/uploads/2021/02/img_4-2-0x0-c-default.png";
    div.appendChild(thumbNode);
    var playButton = document.createElement("div");
    playButton.setAttribute("class", "play");
    div.appendChild(playButton);
    div.onclick = function () {
      labnolIframe(this);
    };
    playerElements[n].appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", initYouTubeVideos);

$(document).ready(function () {

  MicroModal.init();

  var pokoiSlider = document.getElementById('pokoiSlider');
  
  var pietroSlider = document.getElementById('pietroSlider');
  if (pokoiSlider) {
    noUiSlider.create(pokoiSlider, {
      start: [1, 10],
      connect: true,
      step: 1,
      range: {
        'min': 1,
        'max': 10
      }
    });
    var nodes = [
      document.getElementById('pokoi-from'), // 0
      document.getElementById('pokoi-to') // 1
    ];
    pokoiSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
      nodes[handle].innerHTML = values[handle];
      console.log("FILTERED")
    });
  }

  if (pietroSlider) {
    noUiSlider.create(pietroSlider, {
      start: [0, 10],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 10
      }
    });
    var nodes3 = [
      document.getElementById('pietro-from'), // 0
      document.getElementById('pietro-to') // 1
    ];
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.


    pietroSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
      nodes3[handle].innerHTML = values[handle];
      console.log("FILTERED")
    });
  }


  /* Go back */

  $(".goBack").click(function () {
    window.history.back();
  });
  $(".filter-simple-button").click(function () {
    var value = $(this).attr('data-filter');
    if (value === "all") {
      $('.filter-simple-item').show('1000');
    } else {
      $(".filter-simple-item").not('.' + value).hide('3000');
      $('.filter-simple-item').filter('.' + value).show('3000');
    }
  });

  // changes active class on filter buttons
  $('.filter-simple-button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });


  /* Contact form sticky labels functionality */
  $(".wpcf7 .form-control").focus(function () {
    $(this).parent().parent().addClass('active');
  }).blur(function () {
    var cval = $(this).val()
    if (cval.length < 1) {
      $(this).parent().parent().removeClass('active');
    }
  })


  /* SHow menu on scroll up */
  'use strict';
  var c, currentScrollTop = 0,
    navbar = $('.header');
  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();
    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    if (Math.abs(document.body.offsetHeight - window.innerHeight - window.pageYOffset) <= 3) {
      navbar.removeClass("scrollUp");
    }

    c = currentScrollTop;
  });

});

$(function () {
/* Contact form modal */ 
  $('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
	});




  /* Dzielnice tabs  */
  let allContent = document.querySelectorAll('.dzielnicaToggle  ');
  let Buttons = document.querySelectorAll(".dzielnicaSelect button");
  let currentIndex = 0;
  $(".js-dzielnica__images__main").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    currentIndex = nextSlide
    for(let button of Buttons) {
      button.classList.remove("active");
    }
    for (let content of allContent) {
      if (content.getAttribute('data-number') * 1 - 1 === currentIndex) {
        const slideIndex = content.getAttribute('data-number') - 1;
        content.style.display = "block";
        $(".js-dzielnica__images__main").slick('slickGoTo', slideIndex);
      } else {

        content.style.display = "none"
      }
    }
    Buttons[currentIndex].classList.add("active")
    $("body, html").animate(
      {
          scrollTop: $(".wizja__dzielnice__title").offset().top - 42
      },
      800
  );
    const navbar = $('.header');
    navbar.removeClass("scrollUp");
  });



  for (let button of Buttons) {
    button.addEventListener('click', (e) => {
      // const et = e.target;
      // const active = document.querySelector(".active");
      
      // if (active) {
      //   active.classList.remove("active");
      // }
      // et.classList.add("active");
      // let allContent = document.querySelectorAll('.dzielnicaToggle  ');


      // for (let content of allContent) {
        // wizja__dzielnice__title
      //   if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
      //     const slideIndex = content.getAttribute('data-number') - 1;
      //     content.style.display = "block";
      //     $(".js-dzielnica__images__main").slick('slickGoTo', slideIndex);

      //    // $(".js-dzielnica__images__main-nav-thumbnails").slick("refresh");
      //   } else {
      //     console.log(content)
      //     content.style.display = "none"
      //   }
      // }
      for (let content of allContent) {
        if (content.getAttribute('data-number') * 1 - 1 === currentIndex) {
          const slideIndex = (button.getAttribute('data-number') * 1) - 1

          content.style.display = "block";
          $(".js-dzielnica__images__main").slick('slickGoTo', slideIndex);
  
         // $(".js-dzielnica__images__main-nav-thumbnails").slick("refresh");
        } else {
          console.log(content)
          content.style.display = "none"
        }
      }

      $("body, html").animate(
        {
            scrollTop: $(".wizja__dzielnice__title").offset().top
        },
        800
    );
    const navbar = $('.header');
    navbar.removeClass("scrollUp");
    });
  }

  $('.js-dzielnica__images__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    mobileFirst: true,
    infinite: false,
    fade: true,
    speed: 1000,
    cssEase: "linear",
    nextArrow: '<button class="dzielnica__arrow dzielnica__arrow__next"></button>',
    prevArrow: '<button class="dzielnica__arrow dzielnica__arrow__prev"></button>',

    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        asNavFor: '.js-dzielnica__images__main-nav-thumbnails',
      }
    }, ]
  });

  $('.js-dzielnica__images__main-nav-thumbnails').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    mobileFirst: true,
    focusOnSelect: true,
    infinite: false,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          asNavFor: '.js-dzielnica__images__main',
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });


  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav-thumbnails',
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider',
    variableWidth: false,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.slider-lokal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider-nav-lokal-thumbnails',
  });

  $('.slider-nav-lokal-thumbnails').slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.slider-lokal',
    variableWidth: false,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

  // Set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });

  $('.js-hero').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    speed: 2000,
    cssEase: "linear"
  });
  $('.js-lokalizacjaSlider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
  });




  $('.js-sliderNew').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    arrows: true,
    nextArrow: '.arrow__right',
    prevArrow: '.arrow__left',
    responsive: [{
        breakpoint: 760,
        settings: "unslick"
      }

    ]
  });

  $('.js-dniotwarte').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    arrows: true,
    nextArrow: '.arrow__right__dni',
    prevArrow: '.arrow__left__dni',
    responsive: [{
        breakpoint: 760,
        settings: "unslick"
      }

    ]
  });


  $('.js-historia').slick({
    infinite: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    arrows: true,
    mobileFirst: true,
    nextArrow: '<button class="dzielnica__arrow dzielnica__arrow__next"></button>',
    prevArrow: '<button class="dzielnica__arrow dzielnica__arrow__prev"></button>',
    responsive: [{
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
          nextArrow: '.arrow__right__dni',
          prevArrow: '.arrow__left__dni',
        },
      }

    ]
  });

  $('.js-nagrody').slick({
    infinite: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    arrows: true,
    mobileFirst: true,
    nextArrow: '<button class="dzielnica__arrow dzielnica__arrow__next"></button>',
    prevArrow: '<button class="dzielnica__arrow dzielnica__arrow__prev"></button>',
    responsive: [{
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
          nextArrow: '.arrow__right__nag',
          prevArrow: '.arrow__left__nag',
        },
      }

    ]
  });
  $('.js-wydarzenia').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    arrows: true,
    nextArrow: '.arrow__right__wyd',
    prevArrow: '.arrow__left__wyd',
    responsive: [{
        breakpoint: 760,
        settings: "unslick"
      }

    ]
  });
  /* Splide slider for each secton */
  var elms = document.getElementsByClassName("splide");
  const splides = [];
  const startedSplides = [];
  for (var i = 0, len = elms.length; i < len; i++) {
    let splide = new Splide(elms[i], {
      type: "loop",
      lazyLoad: "nearby",
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      interval: 8000,
    }).mount()

    splides.push(splide);
    startedSplides.push(0);
    $(elms[i]).find(".splide__pause")[0].click()
  }
  document.addEventListener("scroll", function () {
    for (let i = 0, len = elms.length; i < len; i++) {
      if (startedSplides[i] === 0) {
        if (isElementInViewport(elms[i])) {
          $(elms[i]).find(".splide__play")[0].click()
          startedSplides[i] = 1;
        }
      }
    }
  });

  /* Lazy load images*/
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"

  });
  if (lazyLoadInstance) {
    lazyLoadInstance.update();
    AOS.refresh();
  }

  document.querySelectorAll('img')
    .forEach((img) =>
      img.addEventListener('load', () =>
        AOS.refresh()
      )
    );

  document.querySelectorAll('source')
    .forEach((source) =>
      source.addEventListener('load', () =>
        AOS.refresh()
      )
    );
});


// Hide Page Loader when DOM and images are ready
$(window).on('load', () => $('.pageloader').removeClass('is-active'));
$(window).on('load', () => $('body').removeClass('is-loading'));


/* Make header smaller after some height */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.header').addClass('smaller');
  } else {
    $('.header').removeClass('smaller');
  }
});


/* Back to top */
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#back-top').fadeIn();
  } else {
    $('#back-top').fadeOut();
  }
});
$('a#back-top').click(() => {
  $('body,html').animate({
      scrollTop: 0,
    },
    1000,
  );
  return false;
});


/* Show filters */
/* Toggle modal */
$('.showFilters').click(function (event) {
    event.preventDefault();
    $('.znajdzLokal__filters').show();
    $('body,html').animate({
      scrollTop: 0,
    },
    1000,
  );
  return false;
    
});
$('.znajdzLokal__filters__close').click(function (event) {
  event.preventDefault();
  $('.znajdzLokal__filters').hide();
  
});



/* Toggle modal */
$('.home__inwestycjeLista__item__footer__link__close').click(function (event) {
  $(this).closest('.home__inwestycjeLista__item__outsite').removeClass('active');
  event.preventDefault();
});

$('.home__inwestycjeLista__item__footer__link').click(function (event) {
  event.preventDefault();

  const button = $(this);
  const wrapper = button.closest(".home__inwestycjeLista__item__outsite");

  wrapper.toggleClass("active");

  // code for proper handling modal buttons animation so hover animation and the one
  // from closing modal doesn't interfere with each other
  if (!wrapper.hasClass("active")) {
    button.addClass("delayed-animation");

    setTimeout(() => {
      button.removeClass("delayed-animation");
    }, 1200);
  }
});

// /*Lang switcher */
// $('.lang__switch').on("click", function () {
//   $('.lang__area').slideToggle(300);
// });

AOS.init({
  once: true
});
/* Gallery popup */
$('.gallery').each(function () {
  // the containers for all your galleries
  $(this).magnificPopup({
    delegate: 'a', // the selector for gallery item
    type: 'image',
    gallery: {
      enabled: true,
    },
    callbacks: {
      change: function() {
				console.log(this.st)
			}
  }
  });
});

$('.image-link').magnificPopup({
  type: 'image',
  removalDelay: 400,
  fixedContentPos: true,
  gallery: {
      enabled: true,
      arrowMarkup: '<button title="%title%" type="button" class="custom-arrow custom-arrow-%dir%"></button>'
    },
    callbacks: {
      beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
});

/* Open and close nav */
$('.nav-trigger').click(function (event) {
  event.preventDefault();

  $('body').addClass('openDark');
});
$('.closebtn').click(function (event) {
  event.preventDefault();

  $('body').removeClass('openDark');
});


/* Video read more toggle text*/
$('.btnVideoReadMore').click(function (event) {
  event.preventDefault();
  $('.video__copy').show();
  $('.video__title').hide();
  $('.btnVideoReadMore').hide(200);
});




// jQuery-based initialisations
$(() => {
  new BackToTop();
  new SmoothScroll();
  new filterigIsotope();
});

function isElementInViewport(el) {
  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.left >= 0 &&
    (
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.bottom >= 0
    ) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
);
}

// TO REFACTOR

function set3DViewButtonsPostition() {
  const buttons = document.querySelector(".home__widok3d__buttons");
  const section = document.querySelector(".home__widok3d");
  const windowWidth = window.innerWidth
  const jeff = document.querySelector("#wyszukiwarka3d")
  let height;
  let top;
  if (windowWidth < 1600) {
    height = windowWidth / 16 * 9;
    top = height - 136;
  } else {
    height = 900
    top = height - 126
  }

  if (windowWidth >= 848 && windowWidth <= 1640) {
    buttons.style.top = `${top}px`
  } else if (windowWidth > 1640) {
    buttons.style.top = 'auto';
    buttons.style.bottom = '48px';
    buttons.style.left = `42px`
  } else if (windowWidth < 849) {
    buttons.style.top = '0';
  }

  if (windowWidth > window.innerHeight && windowWidth > 768) {
    section.style.maxHeight = `${height}px`
  } else {
    section.style.maxHeight = `none`
  }

  if (windowWidth < 1500 && windowWidth > 760) {
    buttons.style.left = `42px`
  } else if (windowWidth < 760) {
    buttons.style.left = "0"
  }

  if (windowWidth > 1043) {
    jeff.style.height = `${height + 200}px`
  } else {
    jeff.style.height = `100vh`
  }

}


if(document.querySelector("#wyszukiwarka3d")) {
  window.addEventListener("resize", function () {
    set3DViewButtonsPostition()
  })
  
  set3DViewButtonsPostition()
}


const goToContact = () => {
  const urlArray = window.location.href.split("/")
  const apartmentId = urlArray[urlArray.length - 2].toUpperCase().replaceAll("-", ".")
  const messageInput = document.querySelector('#contact-modal input[name="text-wiadomosc"]')

  messageInput.parentNode.parentNode.classList.add("active")
  messageInput.value = `Jestem zainteresowany ofertą mieszkania nr ${apartmentId}`

  //   $("body, html").animate(
  //       {
  //           scrollTop: $(".wSprawieOferty").offset().top + 144
  //       },
  //       800
  //   );
  MicroModal.show('contact-modal');
}

if(document.querySelector('#contactButton')) {
  const contactButton = document.querySelector('#contactButton');

contactButton.addEventListener('click', function(){
  goToContact()
})
}