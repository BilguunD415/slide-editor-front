$(function () {
  var selectedObject;
  var enableDragDrop = false;
  var enableClickDelete = false;
  var activeFrameIndex = 0;
  var frameCount = $("div.page_frame").length;
  var styleProperties = null;
  var canvas;
  $(".controlbar")
  $("div.page_frame")[activeFrameIndex].setAttribute("active_frame", true)
  var avFrame = $(".page_frame[active_frame]");



  $(".header .toolbar button").on("click", (e) => {

    var target = e.currentTarget;
    $(".toolbar button").removeClass("on");
    $(".toolbar .dropdown_menu").removeClass("show");
    $(target).addClass("on");
    var str = target.ariaLabel;
    switch (str) {
      case "불러오기":

        break;
      case "저장하기":
        location.href = "./[팝업에디터]_[1.2.1]_[저장하기].html";
        break;
      case "다른 이름으로 저장하기":
        location.href = "./[팝업에디터]_[2.1.1]_[컨텍스트_메뉴].html";
        break;
      case "쓰기":
        addTextElement();

        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar01.html");
        break;
      case "button":
        addButtonElement();
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar01.html");
        break;
      case "그리기":
        addCanvasElement();
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar02.html");
        break;
      case "이미지":
        addImageElement();
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar03.html");
        break;
      case "영상":
        addVideoElement();
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar04.html");
        break;
      case "음성":
        addAudioElement();
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar05.html");
        break;
      case "배경":
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar06.html");
        break;
      case "가리기":
        addCoverElement();
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar07.html");
        break;
      case "템플릿":
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar08.html");
        break;
      case "프로그램 정보":
        disableDragDrop();
        $(".popup--container").addClass("active");
        $(".popup.layer.pop_version").addClass("popup--open");
        break;
      case "단축키":
        disableDragDrop();
        $(".popup--container").addClass("active");
        $(".popup.layer.pop_key").addClass("popup--open");
        break;
      case "객체 선택":
        enableDragDrop = true;
        if (canvas != null)
          canvas.isDrawingMode = false;
        break;
      case "요소 삭제":
        enableClickDelete = true;
        break;
      case "화면 빈":
        deleteAllElements();
        break;
      case "미리보기":

        break;
      default:
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar00.html");
        break;


    }
    console.log(selectedObject);
  });

  function disableDragDrop() {
    enableDragDrop = false;
    moveable.target = null;
  }
  function deleteAllElements() {
    $(".page_frame[active_frame=true] .content_frame").empty();
  }

  $(".dropdown_toggle").on("click", (e) => {
    var target = e.currentTarget;
    $(".toolbar button").removeClass("on");
    $(".toolbar .dropdown_menu").removeClass("show");
    $(target).addClass("on");
    $(target.nextElementSibling).toggleClass("show");
  });

  function closeToolBar() {
    $(".toolbar button").removeClass("on");
    $(".toolbar .dropdown_menu").removeClass("show");
  }

  let targets = [];

  const moveable = new Moveable(document.querySelector(".content_frame"), {
    target: [],
    draggable: true,
    scalable: false,
    resizable: true,
    rotatable: false,
    snappable: false,
    snapCenter: false,

  });
  const helper = MoveableHelper.create();
  moveable
    .on("dragStart", helper.onDragStart)
    .on("drag", helper.onDrag)
    .on("dragGroupStart", helper.onDragGroupStart)
    .on("dragGroup", helper.onDragGroup)
    .on("resizeStart", helper.onResizeStart)
    .on("resize", helper.onResize)
    .on("resizeGroupStart", helper.onResizeGroupStart)
    .on("resizeGroup", helper.onResizeGroup)

  $(".content_frame").on("dragStart", (e) => {

    const target = e.inputEvent.target;
    if (
      target.nodeName === "A" ||
      moveable.isMoveableElement(target) ||
      targets.some((t) => t === target || t.contains(target))
    ) {
      e.stop();
    }
  });


  $(".popup--container .btn_close").on("click", (event) => {

    $(".popup--container > div").removeClass("popup--open");
    $(".popup--container").removeClass("active");

  });



  function addTextElement() {
    var elId = makeid(10);
    $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable textElement\" style=\"width: 200px;height: 30px;\"><textarea id=\"" + elId + "\" style=\"width: 100%;height: 100%;\" ></textarea></div>");
    addClickEvent()
  }
  function addImageElement() {
    var elId = makeid(10);
    $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable imageElement\" style=\"width: 400px;height: 300px;\"><img id=\"" + elId + "\" src=\"data:image/png;base64,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\" alt=\"image\" style=\"width: 100%;height: 100%;\" ></div>");
    addClickEvent()
  }

  function addVideoElement() {
    var elId = makeid(10);
    $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable videoElement\" style=\"width: 400px;height: 300px;\" ><video id=\"" + elId + "\" style=\"width: 100%;height: 100%;\" controls><source src=\"http://www.youtube.com/watch?v=coz0rebAy1o\" type=\"video/mp4\"></video></div>");
    addClickEvent()
  }
  function addAudioElement() {
    var elId = makeid(10);
    $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable audioElement\" style=\"width: 322px;height: 72px;\"><audio  id=\"" + elId + "\" controls><source src=\"http://www.youtube.com/watch?v=coz0rebAy1o\" type=\"video/mp3\"></audio ></div>");
    addClickEvent();
  }
  function addCanvasElement() {
    var elId = makeid(10);

    $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable canvasElement\"><canvas id=\"" + elId + "\"  style=\"border:1px solid #000; height:100%;width:100%; cursor: url(\"https:\/\/viewer.selpub.com\/img\/cursor\/pencil_cursor.svg \") 4 20, auto;\" ></canvas></div>");
    canvas = this.__canvas = new fabric.Canvas(elId, {
      isDrawingMode: false,
      resizable: true
    });
    addClickEvent();
  }

  function addButtonElement() {
    var elId = makeid(10);
    $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable buttonElement\" style=\"width: 110px;height: 60px;\" ><button id=\"" + elId + "\"  onClick=\"javascript:console.log('button click');\" >Click me!!!</button></div>");
    addClickEvent();
  }
  function addCoverElement() {
    var elId = makeid(10);
    $('.workspace_area .content_frame').append("<div data-moveable id=\"" + elId + "\" class=\"draggable coverElement\" style=\"width: 200px;height: 80px;\" ><div style=\"background: black;\"></div><div><button><svg class=\"svg_nav cevent\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.6187 20.171V20.171C14.9492 20.6551 15.7067 20.4212 15.7067 19.835V15.8824V11.1762C15.7067 10.5266 16.2513 10 16.9338 10C17.6115 10 18.1942 10.515 18.2372 11.1779L18.5375 15.8142C18.5489 15.9906 18.5906 16.1647 18.6044 16.3409C18.6081 16.3872 18.6099 16.4367 18.6099 16.4896V16.1094C18.6099 15.5836 19.0758 15.1577 19.651 15.1577C20.8008 15.1577 21.7326 16.0095 21.7326 17.0604V16.6802C21.7326 16.1545 22.1985 15.7286 22.7736 15.7286C23.9234 15.7286 24.8552 16.5803 24.8552 17.6313V17.2511C24.8552 16.7253 25.3211 16.2995 25.8963 16.2995C27.046 16.2995 27.9778 17.1512 28 18.2021V22.9489C28 23.5863 27.723 24.5424 27.3878 25.0976C27.3793 25.1117 27.3718 25.1234 27.3629 25.1372C27.2031 25.3842 25.5236 28.0004 25.5236 28.8589V28.8589C25.5236 29.4891 25.0127 30 24.3824 30H24.2965H21.8422H18.0749C17.4447 30 16.9338 29.4891 16.9338 28.8589V28.8589C16.9338 27.9965 14.1605 25.7584 13.9206 25.5665C13.9083 25.5567 13.8982 25.5485 13.8862 25.5383C13.3845 25.1129 12.7863 24.2881 12.5503 23.7028L11.0443 19.9672C10.9207 19.6605 11.0647 19.2914 11.3651 19.1433L11.083 19.2823C12.2934 18.6857 13.8758 19.0828 14.6187 20.171Z\" stroke=\"#D8D8D8\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.6971 9.56635C11.3847 9.25393 10.8781 9.25393 10.5657 9.56635C10.2533 9.87877 10.2533 10.3853 10.5657 10.6977L12.0931 12.2251C12.4055 12.5375 12.912 12.5375 13.2244 12.2251C13.5368 11.9126 13.5368 11.4061 13.2244 11.0937L11.6971 9.56635ZM9.80006 13.0007C9.35823 13.0007 9.00006 13.3588 9.00006 13.8007C9.00006 14.2425 9.35823 14.6007 9.80006 14.6007H12.2001C12.6419 14.6007 13.0001 14.2425 13.0001 13.8007C13.0001 13.3588 12.6419 13.0007 12.2001 13.0007H9.80006Z\" fill=\"#D8D8D8\"></path></svg></button></div></div>");
    addClickEvent();
    addCoverEvent(elId);
  }

  function addClickEvent() {
    selectedObject = $('.workspace_area .content_frame > div:last-child');
    selectedObject.on("mousedown", (event) => {
      event.currentTarget.style.cursor = "all-scroll";
      selectedObject = $(event.currentTarget);
      getElementProperties();

    })
      .on("mouseup", (event) => {
        event.currentTarget.style.cursor = "unset";
      })
      .on("click", (event) => {
        const target = event.currentTarget;
        if (moveable.target != target)
          moveable.target = target;
        else
          moveable.target = null;

      });
  }

  function addCoverEvent(id){
    $('#' + id + " button").on("click", (event) => {
      $('#' + id + " div:first").toggleClass("coverHide");
    });
  }

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  function getElementProperties() {

    // 'translate(586px, 14px) rotate(0deg) scale(1, 1)'
    var left = 0;
    var top = 0;
    if (selectedObject.context.style.transform != "") {
      left = selectedObject.context.style.transform.split(")")[0].split("(")[1].replaceAll(" ", "").split(",")[0].replaceAll("px", "");
      top = selectedObject.context.style.transform.split(")")[0].split("(")[1].replaceAll(" ", "").split(",")[1].replaceAll("px", "");
    }
    styleProperties = selectedObject.children()[0].style;
    var elType = selectedObject.children()[0].type;
    switch (elType) {
      case "textarea":
        $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar01.html");
        $(".panel_setting .ctrl_size input")[0].value = (left * 1);
        $(".panel_setting .ctrl_size input")[1].value = (top * 1);
        break;
    }
  }
});

