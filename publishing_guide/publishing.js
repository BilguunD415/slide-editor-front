"use strict";
/* publishing_markup import */
var publishingGuideScript = {
  load: {
    init: function () {
      var guide_elements = document.querySelectorAll("guide-element");
      var totalElementNum = guide_elements.length;
      var loadElementNum = 0;
      var loadSrc;
      var loadText;

      if (totalElementNum === 0) {
        publishingGuideScript.guide.init();
        publishingGuideScript.complete = true;
        return;
      }

      if (parent.IS_SUBFOLDER) {
        loadSrc = "../publishing_import_markup/";
      } else {
        loadSrc = "./publishing_import_markup/";
      }

      function loadContent(url, targetElement) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            if (parent.IS_SUBFOLDER) {
              loadText = xhr.responseText;
              loadText = loadText.replace(/.\/publishing_guide/gi, '../publishing_guide');
              loadText = loadText.replace(/.\/asset/gi, '../asset');
            } else {
              loadText = xhr.responseText;
            }
            if (targetElement) {
              targetElement.innerHTML += loadText;
            }
          } else {
            console.error('Failed to load content. Status: ' + xhr.status);
          }

          loadElementNum++;
          if (loadElementNum === totalElementNum) {
            publishingGuideScript.guide.init();
            publishingGuideScript.complete = true;
          }
        };

        xhr.onerror = function () {
          console.error('An error occurred while loading content.');
        };

        xhr.send();
      }

      for (var i = 0; i < totalElementNum; i++) {
        var parentNode = guide_elements[i].parentNode;
        var url = loadSrc + guide_elements[i].getAttribute("data-file") + ".html"; // 수정: dataset 대신 getAttribute 사용
        guide_elements[i].remove();
        loadContent(url, parentNode);
      }
    }
  },
 
  guide: {
    init: function () {
      function getBrowser(){var e=navigator.userAgent.toLowerCase();return/(?=.*chrome)^(?!.*edg)^(?!.*android)/.test(e)?"chrome":/firefox/.test(e)?"firefox":/edg/.test(e)?"edge":/trident/.test(e)?"ie":/android/.test(e)?"android":/iphone|ipad|ipod/.test(e)?"ios":"etc"}function isMobile(){return"android"===getBrowser()}function getEvt(e){var t=isMobile();return"down"===e?t?"touchstart":"mousedown":"up"===e?t?"touchend":"mouseup":"move"===e?t?"touchmove":"mousemove":"enter"===e?t?"touchstart":"mouseenter":"leave"===e?t?"touchcancel":"mouseleave":e}function addEvt(e,t,o,n){const s=getEvt(t);if(e)if(e.length){const t=e.length;for(let r=0;r<t;r++)e[r].addEventListener(s,o,n)}else e instanceof NodeList||e.addEventListener(s,o,n)}function removeEvt(e,t,o,n){const s=getEvt(t);if(e)if(e.length){const t=e.length;for(let r=0;r<t;r++)e[r].removeEventListener(s,o,n)}else e.removeEventListener(s,o,n)}function getEle(e,t){let o;if(e.includes("#"))o=document.getElementById(e.slice(1));else{o=(t||document).querySelectorAll(e)}return o}function createEle(e,t,o){const n=document.createElement(e);for(var s in t)t[s]&&n.setAttribute(s,t[s]);return o&&o.append(n),n}function addCls(e,t){if(e){const o=e.length,n=t.split(" "),s=n.length;for(let t=0;t<s;t++){const r=n[t];if(o)for(let t=0;t<o;t++)e[t].classList.add(r);else if(!NodeList.prototype.isPrototypeOf(e)&&(e.classList.add(r),s<=1))return e}}}function removeCls(e,t){if(e){const o=e.length,n=t.split(" "),s=n.length;for(let t=0;t<s;t++){const r=n[t];if(o)for(let t=0;t<o;t++)e[t].classList.remove(r);else if(!NodeList.prototype.isPrototypeOf(e)&&(e.classList.remove(r),s<=1))return e}}}function hasCls(e,t){if(e){return e.classList.contains(t)}}

      (function () {
        /* tab */
        (function initTab() {
          var tabContainer = getEle(".tab_container");
          tabContainer.forEach(function (ele) {
            var tab = getEle(".tab_menu", ele),
              tabContent = getEle(".tab_content", ele),
              tabIdx;
    
            addEvt(tab, "click", (e) => {
              tabIdx = e.currentTarget.dataset.tabMenu;
              if (tabIdx === "all") {
                addCls(tabContent, "show");
              } else {
                removeCls(tabContent, "show");
                addCls(getEle("[data-tab-list='" + tabIdx + "']", ele), "show");
              }
    
              removeCls(tab, "on");
              addCls(e.currentTarget, "on");
            });
          });
        })();
    
        /* slide */
        (function initSlide() {
          var btnPrev = getEle("[data-slide-btn='prev']");
          var btnNext = getEle("[data-slide-btn='next']");
          var btnDotted = getEle("[data-slide-dot]");
    
          addEvt(btnPrev, "click", (e) => {
            moveSlide(e);
          });
    
          addEvt(btnNext, "click", (e) => {
            moveSlide(e);
          });
    
          addEvt(btnDotted, "click", (e) => {
            var idx = e.target.dataset.slideDot;
            moveSlide(e, idx);
          });
    
          function moveSlide(e, idx) {
            var target = e.target || e;
            var slideContainer = target.closest(".slider_container");
            var slideList = getEle("[data-slide-list]", slideContainer);
            var slideListLen = slideList.length;
            var slideFlow = target.dataset.slideBtn;
            var btnPrev = getEle("[data-slide-btn='prev']", slideContainer);
            var btnNext = getEle("[data-slide-btn='next']", slideContainer);
            var btnDotted = getEle("[data-slide-dot]", slideContainer);
      
            if (idx === undefined) {
              for (var i = 0; i < slideListLen; i++) {
                if (hasCls(slideList[i], "show")) {
                  idx = i;
                  break;
                }
              }
              slideFlow === "prev" ? (idx -= 1) : (idx += 1);
            }
      
            removeCls(slideList, "show");
      
            if (idx < 1) {
              idx = 0;
              addCls(btnPrev, "off");
              removeCls(btnNext, "off");
            } else if (idx >= slideListLen - 1) {
              idx = slideListLen - 1;
              removeCls(btnPrev, "off");
              addCls(btnNext, "off");
            } else {
              removeCls(btnPrev, "off");
              removeCls(btnNext, "off");
            }
            addCls(slideList[idx], "show");
      
            btnDotted.forEach(function (ele) {
              if (ele.dataset.slideDot == idx) {
                addCls(ele, "on");
              } else {
                removeCls(ele, "on");
              }
            });
          }
        })();
    
        /* poopup */
        function openPopup(e, targetId) {
          if (!targetId) {
            var target = e.target;
            if (!hasCls(target, "popup")) target = target.closest("[data-popup]");
            var targetId = "#" + target.dataset.popup || "#" + target.closest("[data-popup]").dataset.popup;
          }
    
          var popContainer = getEle(targetId);
          if (popContainer) {
            var popOverlay = popContainer.dataset.overlay;
    
            if (popOverlay) {
              hasCls(popContainer, "popup--open") ? closePopup(e, targetId) : addCls(popContainer, "popup--open");
            } else {
              addCls(popContainer, "popup--open");
              addCls(getEle(".popup--container"), "active");
            }
          } else {
            closePopup();
          }
    
          console.log("[##GUIDE##] 팝업 열기 : " + targetId);
        }
    
        function closePopup(e, targetId) {
          removeCls(getEle(targetId ? targetId : ".popup"), "popup--open");
          removeCls(getEle(".popup--container"), "active");
        }
    
        addEvt(getEle("[data-popup]"), "click", (e) => {
          openPopup(e);
        });
    
        addEvt(getEle(".popup .btn_close"), "click", (e) => {
          var popup = e.target.closest(".popup");
          var popOverlay = popup.dataset.overlay;
          popOverlay ? closePopup(e, "#" + popup.id) : closePopup(e);
        });
    
        addEvt(getEle(".previewer .btn_close"), "click", (e) => {
          var popup = e.target.closest(".previewer");
          removeCls(getEle(".previewer"), "previewer--open");
          removeCls(getEle(".previewer--container"), "active");
        });
    
        /* select, dropdown */
        var btn = getEle(".dropdown_toggle, .select_toggle");
    
        addEvt(btn, "click", (e) => {
          
          if(e.currentTarget.nextElementSibling.className.indexOf("show") == -1)
          {addCls(e.currentTarget, "on");
          addCls(e.currentTarget.nextElementSibling, "show");
          }
          else
          {
            removeCls(e.currentTarget, "on");
            removeCls(e.currentTarget.nextElementSibling, "show");
          }
            
        });
    
        var workspaceWrap = getEle(".workspace_area")[0];
    
        /* context_tool */
        addEvt(getEle(".context_tool"), "click", (e) => {
          if (hasCls(e.currentTarget, "on")) {
            removeCls(e.currentTarget, "on");
          } else {
            addCls(e.currentTarget, "on");
          }
        });
    
        /* thumbnailbar open */
        addEvt(getEle(".thumbnailbar .thumbnail_open"), "click", (e) => {
          addCls(e.currentTarget.parentNode.parentNode, "sidebar--open");
          workspaceWrap.style.left = "170px";
          workspaceWrap.style.width = workspaceWrap.getBoundingClientRect().width - 170 + "px"; 
          guideFramesPostion();
        });
    
        /* thumbnailbar close */
        addEvt(getEle(".thumbnailbar .thumbnail_close"), "click", (e) => {
          removeCls(e.currentTarget.parentNode.parentNode.parentNode.parentNode, "sidebar--open");
          workspaceWrap.style.left = "0px";
          workspaceWrap.style.width = workspaceWrap.getBoundingClientRect().width + 170 + "px"; 
          guideFramesPostion();
        });
    
        /* properties open */
        addEvt(getEle(".propertiesbar .properties_close"), "click", (e) => {
          removeCls(e.currentTarget.parentNode.parentNode.parentNode.parentNode, "sidebar--open");
          workspaceWrap.style.width = workspaceWrap.getBoundingClientRect().width + "px"; 
          guideFramesPostion();
        });
    
        /* properties close */
        addEvt(getEle(".propertiesbar .properties_open"), "click", (e) => {
          addCls(e.currentTarget.parentNode.parentNode, "sidebar--open");
          workspaceWrap.style.width = workspaceWrap.getBoundingClientRect().width + "px"; 
          guideFramesPostion();
        });
    
        /* panel_setting_open */
        addEvt(getEle(".panel_setting_open"), "click", (e) => {
          var target = e.currentTarget.closest(".panel");
          if (hasCls(target, "active")) {
            removeCls(target, "active");
          } else {
            addCls(target, "active");
          }
        });
    
        /* panel label click */
        addEvt(getEle(".panel_setting .radio_wrap label"), "click", (e) => {
          var target = e.currentTarget.closest(".panel_subtree");
          addCls(getEle(".sub_attribute", target), "is--disabled")
          removeCls(getEle(".sub_attribute", e.currentTarget.closest(".radio_wrap")), "is--disabled")
        });
    
        /* alert close */
        addEvt(getEle(".alert--container .btn"), "click", (e) => {
          var target = e.currentTarget.closest(".alert_msg");
          target.style.display = "none";
          removeCls(target.parentNode, "active");
        });
    
        var bookWidth = 652;
        var bookHeight = 885;
        var bookframes = getEle(".workspace_area .frames")[0];
        function guideFramesPostion() {
          var page_frame = getEle(".workspace_area .page_frame");
          
          bookframes.style.top = "0px";
          bookframes.style.left = "50%";
          bookframes.style.height = bookHeight + "px";
          if (page_frame.length === 1) {
            bookframes.style.marginLeft = "-" + bookWidth / 2 + "px";
            bookframes.style.width = bookWidth + "px";
          } else {
            bookframes.style.marginLeft = "-" + (bookWidth + 11) + "px";
            bookframes.style.width = bookWidth * 2 + 22 + "px";
          }
        }
    
        if (getEle(".workspace_area .page_frame img").length > 0 ) {
          guideFramesPostion();
          window.addEventListener('resize', guideFramesPostion, true);
        }
      })();

      /* 가이드 - 페이지 이동 */
      (function intoPageMove() {
        var navBtn = getEle(".btn.nav_tool");
        var isCreator = getEle(".thumbnailbar.sidebar").length > 0;

        addEvt(navBtn, "click", (e) => {
          var target = e.currentTarget;
          var str;

          if (target.ariaLabel) {
            str = target.ariaLabel;

            if (isCreator) {
              switch (str) {
                case "프로젝트 정보 수정":
                  location.href = "./[가이드]_[1.1.1]_[프로젝트_설정]_[일반].html";
                  break;
                case "메타데이터 설정":
                  location.href = "./[가이드]_[1.2.1]_[메타데이터_설정].html";
                  break;
                case "단축키":
                  location.href = "./[가이드]_[1.4.1]_[단축키].html";
                  break;
                case "프로그램 정보":
                  location.href = "./[가이드]_[1.5.1]_[프로그램_정보].html";
                  break;
                case "아이콘 추가":
                  location.href = "./[가이드]_[3.1.2]_[아이콘]_[속성].html";
                  break;
                case "객관식 퀴즈":
                  location.href = "./[가이드]_[3.2.1]_[퀴즈_추가]_[객관식퀴즈].html";
                  break;
                case "주관식 퀴즈":
                  location.href = "./[가이드]_[3.2.2]_[퀴즈_추가]_[주관식퀴즈].html";
                  break;
                case "선긋기 퀴즈":
                  location.href = "./[가이드]_[3.2.3]_[퀴즈_추가]_[선긋기퀴즈].html";
                  break;
                case "OX 퀴즈":
                  location.href = "./[가이드]_[3.2.4]_[퀴즈_추가]_[OX퀴즈].html";
                  break;
                case "이미지 추가":
                  location.href = "./[가이드]_[3.3.1]_[미디어_추가]_[이미지_추가].html";
                  break;
                case "영상 추가":
                  location.href = "./[가이드]_[3.3.2]_[미디어_추가]_[영상_추가].html";
                  break;
                case "음성 추가":
                  location.href = "./[가이드]_[3.3.3]_[미디어_추가]_[음성_추가].html";
                  break;
                case "콘텐츠 추가":
                  location.href = "./[가이드]_[3.4.1]_[콘텐츠_추가]_[그리기_추가].html";
                  break;
                case "팝업 추가":
                  location.href = "./[가이드]_[3.5.1]_[팝업_추가]_[속성열기].html";
                  break;
                case "가리기 추가":
                  location.href = "./[가이드]_[3.6.1]_[가리기_추가].html";
                  break;
                case "텍스트 추가":
                  location.href = "./[가이드]_[3.7.1]_[텍스트_추가].html";
                  break;
              }
            } else {
              switch (str) {
                case "불러오기":
                  location.href = "./[팝업에디터]_[1.1.1]_[불러오기].html";
                  break;
                case "저장하기":
                  location.href = "./[팝업에디터]_[1.2.1]_[저장하기].html";
                  break;
                case "다른 이름으로 저장하기":
                  location.href = "./[팝업에디터]_[2.1.1]_[컨텍스트_메뉴].html";
                  break;
                case "쓰기":
                  location.href = "./[팝업에디터]_[3.1.1]_[쓰기].html";
                  break;
                case "그리기":
                  location.href = "./[팝업에디터]_[3.2.1]_[그리기].html";
                  break;
                case "이미지":
                  location.href = "./[팝업에디터]_[3.3.1]_[이미지].html";
                  break;
                case "영상":
                  location.href = "./[팝업에디터]_[3.4.1]_[영상].html";
                  break;
                case "음성":
                  location.href = "./[팝업에디터]_[3.5.1]_[음성].html";
                  break;
                case "배경":
                  location.href = "./[팝업에디터]_[3.6.1]_[배경]_[단색].html";
                  break;
                case "가리기":
                  location.href = "./[팝업에디터]_[3.7.1]_[가리기].html";
                  break;
                case "템플릿":
                  location.href = "./[팝업에디터]_[3.8.1]_[템플릿]_[기본템플릿].html";
                  break;
              }
            }
          }
        });

        var pageMoveRadio = getEle("input[type='radio']");
        addEvt(pageMoveRadio, "click", (e) => {
          var str = e.currentTarget.nextElementSibling.textContent;
          if (str) {
            switch (str) {
              case "그리기":
                location.href = "./[가이드]_[3.4.1]_[콘텐츠_추가]_[그리기_추가].html";
                break;
              case "사진 슬라이드":
                location.href = "./[가이드]_[3.4.2]_[콘텐츠_추가]_[사진슬라이드].html";
                break;
              case "임베디드 HTML":
                location.href = "./[가이드]_[3.4.3]_[콘텐츠_추가]_[임베디드_HTML].html";
                break;
            }
          }
        });

        var subTool = getEle(".btn.select_sub_tools");
        addEvt(subTool, "click", (e) => {
          var str = e.currentTarget.ariaLabel;
          if (str) {
            switch (str) {
              case "단색":
                location.href = "./[팝업에디터]_[3.6.1]_[배경]_[단색].html";
                break;
              case "라이브러리 이미지":
                location.href = "./[팝업에디터]_[3.6.2]_[배경]_[라이브러리].html";
                break;
              case "사용자 이미지":
                location.href = "./[팝업에디터]_[3.6.3]_[배경]_[사용자].html";
                break;
              case "기본 템플릿":
                location.href = "./[팝업에디터]_[3.8.1]_[템플릿]_[기본템플릿].html";
                break;
              case "컴포넌트":
                location.href = "./[팝업에디터]_[3.8.2]_[템플릿]_[컴포넌트].html";
                break;
              case "나만의 템플릿":
                location.href = "./[팝업에디터]_[3.8.3]_[템플릿]_[나만의템플릿].html";
                break;
            }
          }
        });
      })();
    },
  }
};

publishingGuideScript.load.init();

