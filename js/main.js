$(function () {
    $('.slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slide-right.svg" alt=""></button>',
        fade: true,
        asNavFor: '.slider__nav'
      });
      $('.slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider__items',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });
      $("#products__woah").on("click","a", function (event) {
        event.preventDefault(); 
        var id  = $(this).attr('href'), 
          top = $(id).offset().top; 
      $('body,html').animate({scrollTop: top}, 1000); 
      });
      $("#products__main").on("click","a", function (event) {
        event.preventDefault(); 
        var id  = $(this).attr('href'), 
          top = $(id).offset().top; 
      $('body,html').animate({scrollTop: top}, 1000); 
      });
      $("#products__home").on("click","a", function (event) {
        event.preventDefault(); 
        var id  = $(this).attr('href'), 
          top = $(id).offset().top; 
      $('body,html').animate({scrollTop: top}, 1000); 
      });
      $("#products__flower").on("click","a", function (event) {
        event.preventDefault(); 
        var id  = $(this).attr('href'), 
          top = $(id).offset().top; 
      $('body,html').animate({scrollTop: top}, 1000); 
      });
      $("#contacts__page").on("click","a", function (event) {
        event.preventDefault(); 
        var id  = $(this).attr('href'), 
          top = $(id).offset().top; 
      $('body,html').animate({scrollTop: top}, 800); 
      });
});


