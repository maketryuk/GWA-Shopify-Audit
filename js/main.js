"use strict";

AOS.init({
  once: true,
  offset: -50
});

$(".scroll-to").click(function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".offers h2").offset().top
  }, 800);
});

if (window.matchMedia('(max-width: 768px)').matches) {
  $('.contact__btn').text('Contact Us');
} else {
  $('.contact__btn').text('Choose a package now');
};