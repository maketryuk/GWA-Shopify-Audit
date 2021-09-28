"use strict";

$(function () {
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
  
  $('.results__trigger').on('click', function (e) {
    e.preventDefault();
    var sel = this.getAttribute('data-toggle-target');
    $('.results-card').removeClass('active').filter(sel).addClass('active');
    $('.results__trigger').removeClass('active').filter(sel).addClass('active');
  });
})