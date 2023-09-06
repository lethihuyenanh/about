// --------------------------------------------------------------------
//filter
// --------------------------------------------------------------------
function filterItem(filterName) {
  if (filterName != 'all') {
    $('.js-filter-target-container [data-type]').each(function() {
      let $targetItem = $(this);
      if ($targetItem.attr('data-type') == filterName) {
        $targetItem.show();
      } else {
        $targetItem.hide();
      }
    });
  } else {
    $('.js-filter-target-container [data-type]').show();
  }
}

function filter() {
  //Default on load
  var currentName = $('.js-filter-keyword .js-filter-keyword-item.is-current').attr('data-type');
  filterItem(currentName);

  //when click on a Nav item
  $('.js-filter-keyword .js-filter-keyword-item').on('click', function() {
    let filterName = $(this).attr('data-type');
    filterItem(filterName);
    $('.js-filter-keyword .js-filter-keyword-item').removeClass('is-current');
    $(this).addClass('is-current');
  });
}
//---------------------------------------------------------
//init
//---------------------------------------------------------
$(function(){
  filter();
});