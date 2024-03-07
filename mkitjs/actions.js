$(document).ready(function(){
  var selectedObject;
  $(".header .toolbar button").on("click", function(e){
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
                    $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar07.html");
                  break;
                case "템플릿":
                    $(".propertiesbar.sidebar > .panel_area").load("layout/sidebars/sidebar08.html");
                  break;
                case "프로그램 정보":
                  $(".popup--container").addClass("active");
                  $(".popup.layer.pop_version").addClass("popup--open");
                  break;
                case "단축키":
                  
                  $(".popup--container").addClass("active");
                  $(".popup.layer.pop_key").addClass("popup--open");
                  break;

              }         
              console.log(selectedObject);
    });

    $(".dropdown_toggle").on("click", function(e){
      var target = e.currentTarget;
      $(".toolbar button").removeClass("on");
      $(".toolbar .dropdown_menu").removeClass("show");
      $(target).addClass("on");
      $(target.nextElementSibling).toggleClass("show");
    });

    function closeToolBar(){
      $(".toolbar button").removeClass("on");
      $(".toolbar .dropdown_menu").removeClass("show");
    }

    let targets = [];

    const moveable = new Moveable(document.querySelector(".content_frame"), {
      target: [],
      draggable: true,
      scalable: true,
      resizable: true,
      rotatable: true,
      snappable: true,
      snapCenter: true,
      
    });
    const helper = MoveableHelper.create();
    moveable
      .on("dragStart", helper.onDragStart)
      .on("drag", helper.onDrag)
      .on("dragGroupStart", helper.onDragGroupStart)
      .on("dragGroup", helper.onDragGroup)
      .on("scaleStart", helper.onScaleStart)
      .on("scale", helper.onScale)
      .on("scaleGroupStart", helper.onScaleGroupStart)
      .on("scaleGroup", helper.onScaleGroup)
      .on("resizeStart", helper.onResizeStart)
      .on("resize", helper.onResize)
      .on("resizeGroupStart", helper.onResizeGroupStart)
      .on("resizeGroup", helper.onResizeGroup)
      .on("rotateStart", helper.onRotateStart)
      .on("rotate", helper.onRotate)
      .on("rotateGroupStart", helper.onRotateGroupStart)
      .on("rotateGroup", helper.onRotateGroup)


      $(".content_frame").on("dragStart", (e) => {
      
        const target = e.inputEvent.target;
        if (
          target.nodeName === "A" ||
          moveable.isMoveableElement(target) ||
          targets.some((t) => t === target || t.contains(target))
        ) {
          e.stop();
        }
      })
      .on("dragEnd", (e) => {
        if (!e.isDrag) {
          selecto.clickTarget(e.inputEvent);
        }
      })
      .on("abortPinch", (e) => {
        selecto.triggerDragStart(e.inputEvent);
      });
     
      const selecto = new Selecto({
        container: document.querySelector(".workspace_area"),
        dragContainer: ".frames",
        hitRate: 0,
        selectableTargets: ["[data-moveable]"],
      })
      .on("dragStart", (e) => {
        if (!document.hasFocus()) {
          e.stop();
        }
        const inputEvent = e.inputEvent;
        const target = inputEvent.target;
        if (
          target.nodeName === "A" ||
          inputEvent.type === "touchstart" ||
          moveable.isMoveableElement(target) ||
          targets.some((t) => t === target || t.contains(target))
        ) {
          e.stop();
        }
      })
      .on("selectEnd", (e) => {
        targets = e.selected;
        moveable.target = targets;
      
        if (e.isDragStart) {

          e.inputEvent.preventDefault();
      
          setTimeout(() => {
            moveable.dragStart(e.inputEvent);
          });
        }
      });


      $(".popup--container .btn_close").on("click", (event)=>{

        $(".popup--container > div").removeClass("popup--open");
        $(".popup--container").removeClass("active");
        
      });



      function addTextElement(){
        $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable textElement\"><textarea style=\"width: 100%;height: 100%;\" ></textarea></div>");
        addClickEvent()
      }
      function addImageElement(){
        $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable imageElement\"><img src=\"#\" alt=\"image\" width=\"500\" height=\"600\"></div>");
        addClickEvent()
      }
  
      function addVideoElement(){
        $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable videoElement\"><video width=\"320\" height=\"240\" controls><source src=\"#\" type=\"video/mp4\"></video></div>");
        addClickEvent()
      }
      function addAudioElement(){
        $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable audioElement\"><audio  width=\"320\" height=\"140\" controls><source src=\"#\" type=\"video/mp3\"></audio ></div>");
        addClickEvent();
      }
      function addCanvasElement(){
        var elId = makeid(10);

        $('.workspace_area .content_frame').append("<div data-moveable class=\"draggable canvasElement\"><canvas id=\"" + elId + "\"  style=\"border:1px solid #000\"></canvas></div>");
        var canvas = this.__canvas = new fabric.Canvas(elId, {
          isDrawingMode: true
        });

      }

      function addClickEvent(){
        selectedObject = $('.workspace_area .content_frame > div:last-child');
        selectedObject.on("click", (e) => {
          selectedObject = $(e.currentTarget);
          console.log(selectedObject);
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
});

