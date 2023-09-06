

//modal
//---------------------------------------------------------
function modal() {
  $(".js-modal-trigger").on('click', function(e) {
    e.preventDefault();
    $('.js-modal').animate({
      scrollTop: 0
    },0);
    let scrollSpace = window.innerWidth - document.documentElement.clientWidth;
    let target = $(this).attr('href');
    if (! $(target).length) return false;
    $(target).addClass('is-open');
    scrollpos = $(window).scrollTop();
    $('body').addClass('is-locked').css({'top': -scrollpos, 'padding-right' : scrollSpace});
    // $('.js-menu-header').css({'padding-right' : scrollSpace});
  });
  function modalClose() {
    $('.js-modal').removeClass('is-open');
    $('body').removeClass('is-locked').css({'top': 0, 'padding-right' : 0});
    // $('.js-menu-header').css({'padding-right' : 0});
    window.scrollTo(0 , scrollpos);
  }
  $('.js-modal-close').on('click', function() {
    modalClose();
  });
  $(document).on('click touchend', function(event) {
    if (!$(event.target).closest('.c-modal__content, .js-modal-trigger').length && $('.js-modal').hasClass('is-open')) {
      modalClose();
    }
  });
}
modal();