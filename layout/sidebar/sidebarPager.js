  // $(function () {
  //   console.log('load sidebar page')
  // });

  $(".panel_setting_open").on("click", function (e) {
    var target = e.currentTarget.closest(".panel");
    $(target).toggleClass("active");
  });

  $("input[name='sliderTitle']").on("keyup", function (e) {
    var value = e.target.value;
    currentSlide.title = value;
  });

  $("input[name='pageTitle']").on("keyup", function (e) {
    var value = e.target.value;
    currentPage.title = value;
  });

  $("input[name='subtree_screentype']").on("click", function (e) {
   
    var sizeName = e.target.value;
    currentPage.sizeName = sizeName;
    switch (sizeName) {
      case PAGE_SIZE_WIDE:
        currentPage.style.width = 1507;
        currentPage.style.height = 848;
        currentPage.style.margin_top = -424;
        currentPage.style.margin_left = -754;
        break;
      case PAGE_SIZE_STANDARD:
        currentPage.style.width = 1131;
        currentPage.style.height = 848;
        currentPage.style.margin_top = -424;
        currentPage.style.margin_left = -565;
        break;
      case PAGE_SIZE_EBOOK:
        currentPage.style.width = 599.5;
        currentPage.style.height = 848;
        currentPage.style.margin_top = -424;
        currentPage.style.margin_left = -300;
        break;
      default:
        currentPage.style.width = 580;
        currentPage.style.height = 820.42;
        currentPage.style.margin_top = -410.21;
        currentPage.style.margin_left = -290;
        break;
    }
    //console.log(currentPage)
    $("#workspace_area .inner .frames")
    .css("height",  currentPage.style.height + "px")
    .css("width",  currentPage.style.width + "px")
    .css("margin-top",  currentPage.style.margin_top + "px")
    .css("margin-left",  currentPage.style.margin_left + "px");

    $("#workspace_area .inner .frames > div.page_frame")
    .css("height",  currentPage.style.height + "px")
    .css("width",  currentPage.style.width + "px")

  });