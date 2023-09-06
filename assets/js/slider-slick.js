var $carousel = $('.carousel-main');

$carousel
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.carousel-nav'
  })
  
$('.carousel-nav').slick({
  slidesToShow: 7,
  // slidesToScroll: 1,
  asNavFor: '.carousel-main',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true
});