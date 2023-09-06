
//Init event
//---------------------------------------------------------
window.addEventListener('load', function(){

  //-------------------------------------------
  if ( $('.js-mouse-stalker-wrapper').length ) {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('iPad') > 0) {
      
    } else {
      var $contentsStalker = $(".js-contents-mouse-stalker");
      $(document).on("mousemove",function(e){
        var x=e.clientX;
        var y=e.clientY;
        $contentsStalker.css({
          "transform":"translate("+x+"px,"+y+"px)"
        });
      });
      $('.js-mouse-stalker-wrapper').on({
        "mouseenter": function() {
          $contentsStalker.addClass("_active");
        },
        "mouseleave": function() {
          $contentsStalker.removeClass("_active");
        }
      });
    }
  }

});
