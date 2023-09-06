

// --------------------------------------------------------------------
//dropdown
// --------------------------------------------------------------------
function dropdown() {
  const ddToggoler = $('.js-dropdown-toggler');
  const ddItem = $('.js-dropdown .js-dropdown-body .js-dropdown-item');

  ddToggoler.on('click', function(event) {
    $('.js-dropdown-toggler').each(function() {
      if ($(this).is(event.target)) {
        // Target Item
        let $target = $(event.target);
        let $targetCtn = $target.parent();
        let $targetBody = $target.next();
        $targetCtn.toggleClass('is-dropdown-open');
        $targetBody.slideToggle('fast');
      } else {
        // Other items
        $(this).parent().removeClass('is-dropdown-open');
        $(this).next().slideUp('fast');
      }
    })
  });

  ddItem.on('click', function(event) {
    let $this = $(this);
    let $tagetCtn = $this.closest('.js-dropdown');
    let $tagetTitle = $tagetCtn.find('.js-dropdown-toggler');
    let $tagetBody = $tagetCtn.find('.js-dropdown-body');
    let str = $this.html();

    $tagetTitle.html(str);
    $tagetCtn.removeClass('is-dropdown-open');
    $tagetBody.slideUp('fast');
    $tagetBody.find('.js-dropdown-item').removeClass('is-current');
    $this.addClass('is-current');
  });
}


//init
//---------------------------------------------------------
$(function(){
  dropdown();

  $(document).on('click.Bst',function(event) {
    if ( $('.js-dropdown').has(event.target).length == 0 && !$('.js-dropdown').is(event.target) ) {
      $('.js-dropdown').removeClass('is-dropdown-open');
      $('.js-dropdown-body').slideUp('fast');
    }
  });
});