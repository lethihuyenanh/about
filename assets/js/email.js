
// --------------------------------------------------------------------
// send mail
// --------------------------------------------------------------------
function setMailContact(TGT){
  var setURL = 'mailto:' + encodeURIComponent('abc@yubmail.com'),
      setSubject = "テキストテキスト",
      setBody = "";
  setBody += encodeURIComponent('※テキストテキストテキストテキストテキストテキスト。') + '%0A%0A';
  setBody += encodeURIComponent('【テキスト ABC LCD.】') + '%0A';
  setBody += encodeURIComponent('【テキスト】') + '%0A';
  setBody += encodeURIComponent('【テキストテキスト】') + '%0A%0A';
  setBody += encodeURIComponent('※テキストテキストテキストテキストテキストテキストテキストテキスト。') + '%0A';
  setBody += encodeURIComponent('※テキストテキストテキストテキストテキストテキストテキストテキスト。') + '%0A';
  setBody += encodeURIComponent('※テキストテキストテキストテキストテキストテキストテキストテキストテキスト。');
  setURL += '?subject=' + encodeURIComponent(setSubject) + '&body=' + setBody;
  $(TGT).attr("href",setURL);
}

// setMailContact
//------------------------------------
setMailContact("a.js-contact-mail");