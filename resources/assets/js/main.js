import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';
import AOS from 'aos';
import LazyLoad from "vanilla-lazyload"
import BackToTop from './jq-components/backToTop';
import SmoothScroll from './jq-components/smoothScroll';
import Splide from '@splidejs/splide';


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
/* Go back */

$(".goBack").click(function() {
  window.history.back();
});
  $(".filter-simple-button").click(function() {
    var value = $(this).attr('data-filter');
    if(value === "all") {
      $('.filter-simple-item').show('1000');
    } else {
      $(".filter-simple-item").not('.'+value).hide('3000');
      $('.filter-simple-item').filter('.'+value).show('3000');
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
    c = currentScrollTop;
  });

});

$(function () {

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav-thumbnails',
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
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
  });

  $('.js-sliderNew').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 3,
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

  $('.js-wydarzenia').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 3,
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
  var elms = document.getElementsByClassName('splide');
  for (var i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i], {
      type: 'loop',
      lazyLoad: "sequential",
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      interval: 8000
    }).mount();
  }

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




/* Toggle modal */
$('.home__inwestycjeLista__item__footer__link__close').click(function (event) {
  $(this).closest('.home__inwestycjeLista__item__outsite').removeClass('active');
  event.preventDefault();
});

$('.home__inwestycjeLista__item__footer__link').click(function (event) {
  event.preventDefault();
  $(this).closest('.home__inwestycjeLista__item__outsite').toggleClass('active');
});

/*Lang switcher */
$('.lang__switch').on("click", function () {
  $('.lang__area').slideToggle(300);
});

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
  });
});

$('.image-link').magnificPopup({
  type: 'image'
});

/* Open and close nav */
$('.openNav').click(function (event) {
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
});

