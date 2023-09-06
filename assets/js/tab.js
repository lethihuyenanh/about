// --------------------------------------------------------------------
// tab
// --------------------------------------------------------------------
function tabCtrl() {
  $(".js-tab").click(function() {
    var $this = $(this),
      t = $(this).data('href');

    // console.log($this, t);
    $this.addClass("is-active").siblings().removeClass("is-active");
    $("#" + t).addClass("is-active").siblings(".is-active").removeClass("is-active");
    return false;
  });
}

//init
//---------------------------------------------------------
$(function(){
  tabCtrl();
});