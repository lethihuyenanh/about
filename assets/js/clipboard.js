
// --------------------------------------------------------------------
// copyToClipboard
// This source is used for only one item
// --------------------------------------------------------------------
/*
$('#copyView').html($('#copyTarget').val());
// --------------------------------------------------------------------
// copyToClipboard
// --------------------------------------------------------------------
function copyToClipboard(element) {
  //copy
  //-------------------
  var copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("copy");

  //show tooltip
  //-------------------
  var $tooltip = $('#copyTooltip');
  $tooltip.fadeIn(500,function(){
    setTimeout(function(){
      $tooltip.fadeOut(500);
    }, 1000);
  });
} */


// --------------------------------------------------------------------
// copyToClipboard
// --------------------------------------------------------------------
function copyToClipboard(element) {
  // for layout
  //-------------------
  $('.js-clipboard').each(function() {
    let layoutText = $(this).find('.js-clipboard-target').val();
    $(this).find('.js-clipboard-view').html(layoutText);
  });

  $('.js-clipboard .js-clipboard-btn').on('click', function() {
    let $this        = $(this);
    let $thisParent  = $this.closest('.js-clipboard');
    let $copyTarget  = $thisParent.find('.js-clipboard-target');
    let $copyTooltip = $thisParent.find('.js-clipboard-tooltip');

    //copy
    //-------------------
    $copyTarget.select();
    document.execCommand("copy");

    //show tooltip
    //-------------------
    $copyTooltip.fadeIn(500,function(){
      setTimeout(function(){
        $copyTooltip.stop().fadeOut(500);
      }, 1000);
    });
  });

}

//---------------------------------------------------------
//init
//---------------------------------------------------------
$(function(){
  copyToClipboard();
});
