
//anchorNav
//---------------------------------------------------------
function setAnchorSidebar() {
  var $win = $(window);
  var $anchor = $('#sidebar-nav');
  var $anchorItem = $anchor.find('.js-sidebar-item');
  var anchorItemLength = $anchorItem.length;
  var offsetArray = [];
  var currentAnchorIndex = null;
  var currentClassName = 'is-active';

  // innit event
  function setOffsetArray() {
    let offsetAdjust;
    offsetAdjust = 60 + 50; //60 = header.height, 50 = beauti padding

    $anchorItem.each(function(i) {
      var sectionID = $(this).attr('href');
      offsetArray[i] = $(sectionID).offset().top - offsetAdjust;

      if (i === anchorItemLength - 1) {
        offsetArray['end'] = $(sectionID).offset().top - offsetAdjust + $(sectionID).height();
      }
    });
  }

  function checkSidebarSticky() {
    let containerBottom = Math.round(document.querySelector('.js-sidebar-inner').getBoundingClientRect().bottom);
    let targetBottom = Math.round(document.querySelector('.js-sidebar-target').getBoundingClientRect().bottom);

    if ($win.scrollTop()  >= $('.js-sidebar-container').offset().top) {
      $anchor.addClass('is-fixed');
    } else {
      $anchor.removeClass('is-fixed');
    }

    if (containerBottom - 50 >= targetBottom) {
      $anchor.addClass('is-hidden');
    } else {
      $anchor.removeClass('is-hidden');
    }
  }

  function checkScrollTop() {
    for (var i = offsetArray.length - 1; i >= 0; i--) {
      if ($win.scrollTop() >= offsetArray[i]) {
        changeCurrentNav(i);
        break;
      }
    }

    if ($win.scrollTop() < offsetArray[0]) {
      $anchorItem.eq(0).addClass(currentClassName);
    }
    if ($win.scrollTop() > offsetArray['end']) {
      changeCurrentNav(null);
    }
  }

  function changeCurrentNav(index) {
    if (index !== currentAnchorIndex) {
      $anchorItem.removeClass(currentClassName);
      if (index !== null) {
        $anchorItem.eq(index).addClass(currentClassName);
      }
      currentAnchorIndex = index;
    }
  }

  setOffsetArray();

  $win.on('load scroll', function() {
    checkSidebarSticky();
    checkScrollTop();
  }).trigger('load scroll');

  $(window).on("resize orientationchange", function() {
    setOffsetArray();
  });
}


//---------------------------------------------------------
//init
//---------------------------------------------------------
$(function(){
  setAnchorSidebar();
});