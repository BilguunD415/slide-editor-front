function changeSelection(obj) {
    var id = $(obj).attr('id')
    if(selectedObj.id === id){
        return;
    }
    var element = getElement(id)
    console.log('selected', id)
    if(element){
        if(selectedObj.objType !== element.objType) {
            changeElement(id)
            switch (element.objType) {
                case OBJ_TYPE_TEXT:
                    $('#sidebar').load("layout/sidebar/sidebarText.html");
                    break;
                case OBJ_TYPE_BUTTON:
                    $(sidebar).load("layout/sidebar/sidebarButton.html");
                    break;
                case OBJ_TYPE_DRAW:
                    // $(sidebar).load("layout/sidebar/sidebarDrav.html");
                    break;
                case OBJ_TYPE_SLIDER:
                    $(sidebar).load("layout/sidebar/sidebarSlider.html");
                    break;
                case OBJ_TYPE_VIDEO:
                    $(sidebar).load("layout/sidebar/sidebarVideo.html");
                    break;
                case OBJ_TYPE_AUDIO:
                    $(sidebar).load("layout/sidebar/sidebarAudio.html");
                    break;
                case OBJ_TYPE_COVER:
                    $(sidebar).load("layout/sidebar/sidebarCover.html");
                    break;
                case COMP_TYPE_1:
                    $(sidebar).load("layout/sidebar/multiChooseQuiz.html");
                    break;
                case COMP_TYPE_2:
                    $(sidebar).load("layout/sidebar/subjectiveQuiz.html");
                    break;
                case COMP_TYPE_3:
                    $(sidebar).load("layout/sidebar/drawLineQuiz.html");
                    break;
                case COMP_TYPE_4:
                    $(sidebar).load("layout/sidebar/xoQuiz.html");
                    break;
                case COMP_TYPE_5:
                    $(sidebar).load("layout/sidebar/dragDropQuiz.html");
                    break;
                case COMP_TYPE_6:
                    $(sidebar).load("layout/sidebar/sticker.html");
                    break;
                case COMP_TYPE_7:
                    $(sidebar).load("layout/sidebar/checkbox.html");
                    break;
                case COMP_TYPE_8:
                    $(sidebar).load("layout/sidebar/tab.html");
                    break;
                case COMP_TYPE_9:
                    $(sidebar).load("layout/sidebar/popup.html");
                    break;
                case COMP_TYPE_10:
                    $(sidebar).load("layout/sidebar/scroll.html");
                    break;
                default:
                    $(sidebar).load("layout/sidebar/sidebarPage.html");
                    break;
            }
        }
        else if(selectedObj.id !== id) {
            changeElement(id)
        }
    }
}

function changePage(id) {

}

function addTextElement() {
    var elId = makeid('text', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + OBJ_TYPE_TEXT + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class='draggable textElement' style='left:150px; top:150px; width:336px; height:36px; cursor: pointer;'>" +
        "<input type='text' style='width:100%; height:100%; fontSize:14px; letterSpacing:1.5px;' value='초기 선택 텍스트 전체' />"
    "</div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: OBJ_TYPE_TEXT,
        style: {
            left: "150",
            top: "150",
            width: "336",
            height: "36",
            fontFamily: "Nto Sanos KR",
            fontSize: "14",
            letterSpacing: "1.5",
            fontStyle: "normal",
            fontWeight: "normal",
            textDecoration: "none",
            textAlign: "",
            fontColor: "#000000",
        }
    }
    addElement(newObj)
    addMoveable($('#' + elId), false)
    changeSelection(obj)
}

function addButtonElement() {
    var elId = makeid('button', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + OBJ_TYPE_BUTTON + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))'  data-moveable class='draggable textElement' style='left:150px; top:150px; width: 200px; height: 60px; cursor: pointer;'>" +
                "<button type='button' class='btn b_t line' style='width:100%; height:100%;' ><span style='width:100%;'>텍스트 버튼</span></button>" +
            "</div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: OBJ_TYPE_BUTTON,
        datas: {
            buttonText: '텍스트 버튼',
        },
        style: {
            left: "150",
            top: "150",
            width: "200",
            height: "60",
            fontFamily: "Noto Sans KR",
            fontSize: "14",
            letterSpacing: "1.5",
            fontStyle: "normal",
            fontWeight: "normal",
            textDecoration: "none",
            textAlign: "",
            fontColor: "#000000",
        }
    }
    addElement(newObj)
    addMoveable($('#' + elId))
    changeSelection(obj)
}

function addSliderElement() {
    var elId = makeid('slider', 10);

    var obj = '<div id="'+elId+'" node="obj" objType="'+OBJ_TYPE_SLIDER+'" pageId="'+currentPage.pageId+'" onclick="changeSelection($(this))" data-moveable class="draggable" style="left:150px; top:150px; width:300px; height:300px; cursor: pointer;">' +
            '<div class="image-container" current="0"></div>'+
            '<div>'+
                '<a class="previous" onclick="prevSlides($(this))"><i class="fa fa-chevron-circle-left"></i></a>'+
                '<a class="next" onclick="nextSlides($(this))"><i class="fa fa-chevron-circle-right"></i></a>'+
            '</div></div>';
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: OBJ_TYPE_SLIDER,
        datas: [],
        style: {
            left: "150",
            top: "150",
            width: "300",
            height: "300",
        }
    }
    addElement(newObj);
    addMoveable($('#' + elId));
    changeSelection(obj);
}

function addVideoElement() {
    var elId = makeid('video', 10);
    var obj = '<div id="'+elId+'" node="obj" objType="'+OBJ_TYPE_VIDEO+'" pageId="'+currentPage.pageId+'" onclick="changeSelection($(this))" data-moveable class="draggable textElement" style="left:150px; top:150px; width:360px; height:200px; cursor: pointer;">' +
            ' <video video="'+elId+'" class="video" controls><source src="" type="video/mp4" /></video></div>';
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: OBJ_TYPE_VIDEO,
        datas: {},
        style: {
            left: "150",
            top: "150",
            width: "360",
            height: "200",
        }
    }
    addElement(newObj)
    addMoveable($('#' + elId))
    changeSelection(obj)
}

function addAudioElement() {
    var elId = makeid('audio', 10);

    var obj = '<div id="'+elId+'" node="obj" objType="'+OBJ_TYPE_AUDIO+'" pageId="'+currentPage.pageId+'" onclick="changeSelection($(this))" data-moveable class="draggable textElement" style="left:150px; top:150px; width: 320px; height: 80px; cursor: pointer;">' +
            '<audio audio="'+elId+'" controls src=""></audio></div>';
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: OBJ_TYPE_AUDIO,
        datas: {},
        style: {
            left: "150",
            top: "150",
        }
    }
    addElement(newObj)
    addMoveable($('#' + elId), false)
    changeSelection(obj)
}

function addBackgroundElement() {
    resetElement();
    $('#sidebar').load("layout/sidebar/sidebarBackground.html");
}

function openTemplateSidebar(){
    $(sidebar).load("layout/sidebar/sidebarTemplate.html");
}

function addCoverElement() {

    var elId = makeid('cover', 10);

    var obj = '<div id="'+elId+'" node="obj" objType="'+OBJ_TYPE_COVER+'" pageId="'+currentPage.pageId+'" onclick="changeSelection($(this))" data-moveable class="draggable coverElement" style="width: 200px;height: 80px;" >' +
        '<div id="cover-'+elId+'-back" style=\"background: black;\"></div><div>' +
        '<button onclick="$(\'#cover-'+elId+'-back\').toggleClass(\'coverHide\')"><svg class="svg_nav cevent" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M14.6187 20.171V20.171C14.9492 20.6551 15.7067 20.4212 15.7067 19.835V15.8824V11.1762C15.7067 10.5266 16.2513 10 16.9338 10C17.6115 10 18.1942 10.515 18.2372 11.1779L18.5375 15.8142C18.5489 15.9906 18.5906 16.1647 18.6044 16.3409C18.6081 16.3872 18.6099 16.4367 18.6099 16.4896V16.1094C18.6099 15.5836 19.0758 15.1577 19.651 15.1577C20.8008 15.1577 21.7326 16.0095 21.7326 17.0604V16.6802C21.7326 16.1545 22.1985 15.7286 22.7736 15.7286C23.9234 15.7286 24.8552 16.5803 24.8552 17.6313V17.2511C24.8552 16.7253 25.3211 16.2995 25.8963 16.2995C27.046 16.2995 27.9778 17.1512 28 18.2021V22.9489C28 23.5863 27.723 24.5424 27.3878 25.0976C27.3793 25.1117 27.3718 25.1234 27.3629 25.1372C27.2031 25.3842 25.5236 28.0004 25.5236 28.8589V28.8589C25.5236 29.4891 25.0127 30 24.3824 30H24.2965H21.8422H18.0749C17.4447 30 16.9338 29.4891 16.9338 28.8589V28.8589C16.9338 27.9965 14.1605 25.7584 13.9206 25.5665C13.9083 25.5567 13.8982 25.5485 13.8862 25.5383C13.3845 25.1129 12.7863 24.2881 12.5503 23.7028L11.0443 19.9672C10.9207 19.6605 11.0647 19.2914 11.3651 19.1433L11.083 19.2823C12.2934 18.6857 13.8758 19.0828 14.6187 20.171Z" stroke="#D8D8D8" stroke-width="1.6" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6971 9.56635C11.3847 9.25393 10.8781 9.25393 10.5657 9.56635C10.2533 9.87877 10.2533 10.3853 10.5657 10.6977L12.0931 12.2251C12.4055 12.5375 12.912 12.5375 13.2244 12.2251C13.5368 11.9126 13.5368 11.4061 13.2244 11.0937L11.6971 9.56635ZM9.80006 13.0007C9.35823 13.0007 9.00006 13.3588 9.00006 13.8007C9.00006 14.2425 9.35823 14.6007 9.80006 14.6007H12.2001C12.6419 14.6007 13.0001 14.2425 13.0001 13.8007C13.0001 13.3588 12.6419 13.0007 12.2001 13.0007H9.80006Z" fill="#D8D8D8"></path>' +
        '</svg>' +
        '</button>' +
        '</div>' +
        '</div>'
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: OBJ_TYPE_COVER,
        datas: {},
        style: {
            left: "150",
            top: "150",
        }
    }
    addElement(newObj)
    addMoveable($('#' + elId), false)
    changeSelection(obj)
}