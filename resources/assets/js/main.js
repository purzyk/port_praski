import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';
import AOS from 'aos';
import LazyLoad from "vanilla-lazyload"
import BackToTop from './jq-components/backToTop';
import SmoothScroll from './jq-components/smoothScroll';
import Splide from '@splidejs/splide';

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

  $(".wpcf7 .form-control").focus(function(){
    $(this).parent().parent().addClass('active');
  }).blur(function(){
    var cval = $(this).val()
    if(cval.length < 1) {$(this).parent().parent().removeClass('active');}
  })
  

  
  
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


  var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ],{
    type    : 'loop',
    lazyLoad: "sequential",
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus:false,
    interval:8000
  } ).mount();
}
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
  if ($('.header').length) {
    var navHeader = $('.header'),
      burgerMenu = navHeader.find('.burger-menu'),
      navMenuListWrapper = $('.header__menu > ul'),
      navMenuListDropdown = $('.header__menu ul li:has(ul)')
    burgerMenu.on("click", function () {
      $(this).toggleClass('open');
      $(navHeader).toggleClass('open');
      $('body').toggleClass('is-open');
      navMenuListWrapper.slideToggle(300);
    });
    navMenuListDropdown.each(function () {
      $(this).append('<span class="dropdown-plus"></span>');
      $(this).addClass('dropdown_menu');
    });
    $('.dropdown-plus').on("click", function () {
      $(this).prev('ul').slideToggle(300);
      $(this).toggleClass('dropdown-open');
    });
    $('.dropdown_menu a').append('<span></span>');
  }
});

// import Vue from 'vue';
// import Example from './components/Example';

/*
new Vue({
  el: '#app',
  components: {
    // Example,
  },
});
*/

// Hide Page Loader when DOM and images are ready
$(window).on('load', () => $('.pageloader').removeClass('is-active'));


$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.header').addClass('smaller');
  } else {
    $('.header').removeClass('smaller');
  }
});

$(window).on('load', () => $('.pageloader').removeClass('is-active'));
$(window).on('load', () => $('body').removeClass('is-loading'));

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

$('.popup-video').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
  iframe: {
    markup: '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe id="player" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

// Converts Youtube links to embeded videos in Magnific popup.
    patterns: {
      youtube: {

        index: 'youtube.com/',

        id: 'v=',

        src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0&enablejsapi=1'

      }
    }
  },
});

$('.js-hero').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots: true,
  autoplay: true,
  autoplaySpeed:8000,
});
$('.js-sliderNew').slick({
  infinite: true,
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  dots: false,
  autoplay: false,
  nextArrow: '.arrow__right',
  prevArrow: '.arrow__left',
  responsive: [
    {
      breakpoint: 760,
      settings: "unslick"
    }

  ]
});


$('.home__inwestycjeLista__item__footer__link__close').click(function(event){
  $(this).closest('.home__inwestycjeLista__item__outsite').removeClass('active');
  event.preventDefault();
});

$('.home__inwestycjeLista__item__footer__link').click(function(event){
  event.preventDefault();
  $(this).closest('.home__inwestycjeLista__item__outsite').toggleClass('active');
  /*
  $(this).closest('.home__inwestycjeLista__item__outsite').addClass('active');
  var offset = -100;
  $('html, body').animate({
    scrollTop:   $(this).closest('.home__inwestycjeLista__item__outsite').offset().top + offset
}, 100);
  event.preventDefault();
  */
});
$('.lang__switch').on("click", function () {
  $('.lang__area').slideToggle(300);
});

AOS.init({
  once:true
});
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
$('.openNav').click(function(event){
  event.preventDefault();
  
  $('body').addClass('openDark');
});
$('.closebtn').click(function(event){
  event.preventDefault();
  
  $('body').removeClass('openDark');
});

$('.btnVideoReadMore').click(function(event){
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