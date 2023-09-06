
//---------------------------------------------------------
//splitTxt
//---------------------------------------------------------
function splitTxt() {
  const splitTarget = $('.js-split-txt');
  const splitTargetTxt = splitTarget.contents();
  splitTargetTxt.each(function(){
    var texts = $(this);
    if(this.nodeType === 3){
      mkspn(texts);
    }
  });
  function mkspn(texts){
    texts.replaceWith(texts.text().replace(/(\S)/g,'<span>$1</span>'));
  }
}


// -------------------------------------------------------------------- 
// innit 
// --------------------------------------------------------------------
$(function(){ 
  // changeFigures -------------------------------------------------------
  var $fig = $('.js-change-figures');
  $fig.each(function(){ 
    var num = $(this).data('num'); 
    for (var i = 0; i < num; i++) { 
      var src = $(this).attr("src").replace(/^(.*)\d\.(.*)$/, "$1" + (i + 1) + ".$2"); 
      var img = document.createElement('img'); 
      img.src = src; 
    } 
  }); 
  var changeFigures = function () {
    $fig.each(function () { 
      var max = $(this).data('num'); 
      var num = $(this).attr("src").match(/(\d)\.(.*)$/)[1]; 
      num++; 
      if (+(num) > +(max)) { 
        num = 1; 
      } 
      var newSrc = $(this).attr("src").replace(/^(.*)\d\.(.*)$/, "$1" + num + ".$2"); 
      $(this).attr("src", newSrc); 
    }); 
    setTimeout(changeFigures, 800);
  }; 
  changeFigures();
  splitTxt();
});