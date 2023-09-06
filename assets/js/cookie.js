
// --------------------------------------------------------------------
// cookie
// --------------------------------------------------------------------

var acceptCookie = $.cookie('acceptCookie');

$(function(){
  // Accept cookie
  //------------------------------------
  if(acceptCookie){
    $('#cookiePopup').remove();
    $('body').removeClass('is-cookie');
  } else {
    setTimeout(function(){
      $('body').addClass('is-cookie');
    },500);
  }

  $('#cookieAccept').on('click', function(){
    $('body').removeClass('is-cookie');
    setTimeout(function(){
      $('#cookiePopup').remove();
      // 2147483647: maximum value for a cookie expiry date
      $.cookie('acceptCookie','close',{expires:2147483647, path:'./'});
    },500);
  });

  $('#cookieClose').on('click', function(){
    $('body').removeClass('is-cookie');
  });

});
