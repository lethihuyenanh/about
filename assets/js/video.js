
//---------------------------------------------------------
// player01
//---------------------------------------------------------
// 1. This code loads the IFrame Player API code asynchronously.
var tag01 = document.createElement('script');

tag01.src = "https://www.youtube.com/iframe_api";
var firstScriptTag01 = document.getElementsByTagName('script')[0];
firstScriptTag01.parentNode.insertBefore(tag01, firstScriptTag01);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player01;


//---------------------------------------------------------
// player02
//---------------------------------------------------------
// 1. This code loads the IFrame Player API code asynchronously.
var tag02 = document.createElement('script');

tag02.src = "https://www.youtube.com/iframe_api";
var firstScriptTag02 = document.getElementsByTagName('script')[0];
firstScriptTag02.parentNode.insertBefore(tag02, firstScriptTag02);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player02;

function onYouTubeIframeAPIReady() {
  player01 = new YT.Player('player01', {
    height: '100%',
    width: '100%',
    playerVars: {
      rel: 0,
      autoplay: 0,
      loop: 1,
      autohide: 0,
      modestbranding: 1,
      vq: 'hd1080'
    },
    videoId: 'FRNARnIIpoU',
    events: {
      'onReady': onPlayerReady01,
      'onStateChange': onPlayerStateChange01
    }
  });

  player02 = new YT.Player('player02', {
    height: '100%',
    width: '100%',
    playerVars: {
      rel: 0,
      autoplay: 0,
      loop: 1,
      autohide: 0,
      modestbranding: 1,
      vq: 'hd1080'
    },
    videoId: 'K4TOrB7at0Y',
    events: {
      'onReady': onPlayerReady02,
      'onStateChange': onPlayerStateChange02
    }
  });
}

// 3. The API will call this function when the video player is ready.
function onPlayerReady01(event) {
}

var done01 = false;

function onPlayerStateChange01(event) {
}

function stopVideo01() {
  player01.stopVideo();
}

function playVideo01() {
  player01.playVideo();
}

// 3. The API will call this function when the video player is ready.
function onPlayerReady02(event) {
}

var done02 = false;

function onPlayerStateChange02(event) {
}

function stopVideo02() {
  player02.stopVideo();
}

function playVideo02() {
  player02.playVideo();
}

$('#videoItem01').on('click', function() {
  $(this).parent().addClass('is-active');
  $(this).remove();
  player01.playVideo();
});
$('#videoItem02').on('click', function() {
  $(this).parent().addClass('is-active');
  $(this).remove();
  player02.playVideo();
});