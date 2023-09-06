var header = '' +
' \
  <header class="l-header js-menu-header">\
    <div class="l-header__inner l-inner">\
      <div class="l-header-logo"><a class="l-header-logo__link" href="/"><img src="./assets/images/logo.svg" alt="【SITE TITLE】" width="100" height="29" decoding="async"></a></div>\
      <button type="button" class="l-header-menu js-menu-trigger"><span>MENU</span></button>\
      <nav class="l-header-nav js-menu-target">\
        <div class="l-header-nav__inner">\
          <ul class="l-header-nav__items">\
            <li class="l-header-nav__item l-header-nav__item--component js-drop-nav">\
              <div class="l-header-nav__link">Components ▼</div>\
              <div class="l-header-nav-drop">\
                <div class="l-header-nav-drop__inner l-inner">\
                  <ul class="l-header-nav-drop__items">\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--sns"><a class="l-header-nav-drop__link" href="/component/component_sns.html">SNS</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--clipboard"><a class="l-header-nav-drop__link" href="/component/component_clipboard.html">Clipboard</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--tabs"><a class="l-header-nav-drop__link" href="/component/component_tabs.html">Tabs</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--mailto"><a class="l-header-nav-drop__link" href="/component/component_mailto.html">Mail to</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--cookie"><a class="l-header-nav-drop__link" href="/component/component_cookie.html">Cookie</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--dropdown"><a class="l-header-nav-drop__link" href="/component/component_dropdown.html">Dropdown</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--dropdown"><a class="l-header-nav-drop__link" href="/component/component_triangle.html">Triangle</a></li>\
                  </ul>\
                </div>\
              </div>\
            </li>\
            <li class="l-header-nav__item l-header-nav__item--effect js-drop-nav">\
              <div class="l-header-nav__link">Effects ▼</div>\
              <div class="l-header-nav-drop">\
                <div class="l-header-nav-drop__inner l-inner">\
                  <ul class="l-header-nav-drop__items">\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--video"><a class="l-header-nav-drop__link" href="/effect/effect_video.html">Video</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--animation"><a class="l-header-nav-drop__link" href="/effect/effect_animation.html">Animations</a></li>\
                    <!--<li class="l-header-nav-drop__item l-header-nav-drop__item--viewmore"><a class="l-header-nav-drop__link" href="/effect/effect_viewmore.html">View More</a></li>-->\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--filter"><a class="l-header-nav-drop__link" href="/effect/effect_filter.html">Filter</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--sidebar"><a class="l-header-nav-drop__link" href="/effect/effect_sidebar.html">Sidebar</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--sidebar"><a class="l-header-nav-drop__link" href="/effect/effect_cursor.html">Cursor</a></li>\
                  </ul>\
                </div>\
              </div>\
            </li>\
            <li class="l-header-nav__item l-header-nav__item--slider js-drop-nav">\
              <div class="l-header-nav__link">Sliders ▼</div>\
              <div class="l-header-nav-drop">\
                <div class="l-header-nav-drop__inner l-inner">\
                  <ul class="l-header-nav-drop__items">\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--flickity"><a class="l-header-nav-drop__link" href="/slider/slider_flickity.html">Flickity</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--slick"><a class="l-header-nav-drop__link" href="/slider/slider_slick.html">Slick</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--swiper"><a class="l-header-nav-drop__link" href="/slider/slider_swiper.html">Swiper</a></li>\
                  </ul>\
                </div>\
              </div>\
            </li>\
            <li class="l-header-nav__item l-header-nav__item--modal js-drop-nav">\
              <div class="l-header-nav__link">Modals ▼</div>\
              <div class="l-header-nav-drop">\
                <div class="l-header-nav-drop__inner l-inner">\
                  <ul class="l-header-nav-drop__items">\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--modal-basic"><a class="l-header-nav-drop__link" href="/modal/modal_basic.html">Modal Basic</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--modal-magnific"><a class="l-header-nav-drop__link" href="/modal/modal_magnific.html">Modal Magnific</a></li>\
                  </ul>\
                </div>\
              </div>\
            </li>\
            <li class="l-header-nav__item l-header-nav__item--upload js-drop-nav">\
              <div class="l-header-nav__link">Upload ▼</div>\
              <div class="l-header-nav-drop">\
                <div class="l-header-nav-drop__inner l-inner">\
                  <ul class="l-header-nav-drop__items">\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--upload-image"><a class="l-header-nav-drop__link" href="/upload/upload_image.html">Upload Image</a></li>\
                    <li class="l-header-nav-drop__item l-header-nav-drop__item--upload-doc"><a class="l-header-nav-drop__link" href="/upload/upload_doc.html">Upload Documents</a></li>\
                  </ul>\
                </div>\
              </div>\
            </li>\
          </ul>\
        </div>\
      </nav>\
    </div>\
    <div class="l-header__bg js-menu-bg js-menu-close-trigger"></div>\
  </header>\
  <!-- /.l-header -->\
';
document.write(header);