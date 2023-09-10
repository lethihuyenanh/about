
// --------------------------------------------------------------------
// send mail
// --------------------------------------------------------------------
function setMailContact(TGT){
  var setURL = 'mailto:' + encodeURIComponent('test@test.com'),
      setSubject = "[Contact me]: Your name",
      setBody = "";
  setBody += encodeURIComponent('[Your Carreer target]: ') + '%0A%0A';
  setBody += encodeURIComponent('[Your Favorite color]: ') + '%0A';
  setBody += encodeURIComponent('[Your Hobbit]') + '%0A%0A';
  setBody += encodeURIComponent('- Say something: ') + '%0A';
  setBody += encodeURIComponent('- Say something: ') + '%0A';
  setBody += encodeURIComponent('- Say something: ');
  setURL += '?subject=' + encodeURIComponent(setSubject) + '&body=' + setBody;
  $(TGT).attr("href",setURL);
}

// setMailContact
//------------------------------------
setMailContact("a.js-contact-mail");