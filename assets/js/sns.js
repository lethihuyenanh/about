// --------------------------------------------------------------------
// sns
// --------------------------------------------------------------------
var url = 'https://melon-at-home.business.site/',
string = '※テキストテキストテキストテキストテキストテキストテキストテキストテキスト。3,400※テキストテキストテキストテキストテキストテキストテキストテキストテキスト。♪2022年03月17日（月）9時59分まで';

function setTweet(TGT) {
  var setURL = "https://twitter.com/share?";
  setURL += "text="+encodeURIComponent(string)+"%0A";
  setURL += "&url="+url;
  $(TGT).attr("href",setURL);
}


function setFacebook(TGT) {
  var setURL = "https://www.facebook.com/share.php?";
  setURL += "u="+url;
  $(TGT).attr("href",setURL);
} 

function setLine(TGT){
  var setURL = "http://line.me/R/msg/text/";
  setURL += encodeURIComponent(string + " ");
  setURL += url;
  $(TGT).attr("href",setURL);
}

//------------------------------------
//twitter Link - twitter search 
//------------------------------------
// https://twitter.com/search?q=%23frontend
function setTweetSearch(TGT) { 
    var string = '#frontend'; 
    var setURL = "https://twitter.com/search?"; 
    setURL += "q="+encodeURIComponent(string); 
    $(TGT).attr("href",setURL); 
} 

//------------------------------------
//hashtag 
//------------------------------------
function setTweettag(TGT) { 
  var _string = '※テキストテキストテキストテキストテキストテキストテキストテキストテキスト。3,400※テキストテキストテキストテキストテキストテキストテキストテキストテキスト。 #frontend #テキスト ♪2022年03月17日（月）9時59分まで';
  var _hashtag = "frontend #backend #テキスト"
  var setURL = "https://twitter.com/share?";
  setURL += "text="+encodeURIComponent(_string)+"%0A";
  setURL += "&url="+url+"%0A";
  setURL += "&hashtags="+encodeURIComponent(_hashtag);
  $(TGT).attr("href",setURL);
}

// --------------------------------------------------------------------
// innit
// --------------------------------------------------------------------
$(function(){
  setTweet("a.js-twitterBtn");
  setFacebook("a.js-facebookBtn");
  setLine("a.js-lineBtn");
  setTweetSearch("a.js-twitterSearchBtn");
  setTweettag("a.js-twitterTagBtn");
});