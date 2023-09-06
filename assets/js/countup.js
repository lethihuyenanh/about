
//countup
//---------------------------------------------------------
function countup() {
  $(window).on('load scroll', function(){
    $(".js-count-num:not(.is-counted)").each(function(){
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > targetPos - windowHeight + 100){
        if ($(this).attr("data-num").indexOf(".") > -1) {
          var rounding = 1;
        } else {
          var rounding = 0;
        }
        $(this).numerator({
          easing: "linear",
          duration: 2000,
          toValue: $(this).attr("data-num"),
          rounding: rounding
        });
        $(this).addClass("is-counted").delay(2000).queue(function(next) {
          $(this).next().addClass('is-show');
          next();
        });
      }
    });
  });
}

//init
//---------------------------------------------------------
$(function(){
  countup();
});