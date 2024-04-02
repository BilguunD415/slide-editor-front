function addComponentElement(tabindex) {
    var elId = makeid('text', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='comp-" + tabindex + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class='draggable textElement' style='left:150px; top:150px; width:336px; height:36px; cursor: pointer;'>" +
        "<input type='text' style='width:100%; height:100%; fontSize:14px; letterSpacing:1.5px;' value='component element' />"
    "</div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: "comp-" + tabindex,
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
function addMultiChooseQuizElement() {
    var elId = makeid('multi-choose-quiz', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + COMP_TYPE_1 + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class=\"content quiz_area\" style=\"left: 101px; top: 324px; width: 450px; height: 200px; cursor: pointer;\">" +
        "                  <div class=\"text\" style=\"left: 24px; top: 10px; width: 100%; height: 36px;\">" +
        "                    <span style=\"font-size: 24px; line-height: 1.5; color: #000000;\">지시문 텍스트텍스트</span>" +
        "                  </div> " +
        "                  <div class=\"marking\" style=\"left: 0px; top: 0px; width: 58px; height: 58px;\">" +
        "                    <img src=\"/asset/theme/curious_blue/quiz/quiz_marking_o.svg\" width=\"58\">" +
        "                  </div>" +
        "                  <ul style=\"left: 0px; top: 0;\">" +
        "                    <li class=\"multiple-select\" style=\"left: 30px; top: 70px; width: 340px; height: 23px;\">" +
        "                      <span class=\"multiple-icon\" style=\"left: 0px; top: 0px;\"><img src=\"/asset/theme/curious_blue/quiz/quiz_choice_user.svg\" width=\"16\"></span>" +
        "                      <span class=\"text\" style=\"font-size: 14px; left: 24px; top: 3px; width:calc(100% - 24px)\">선택지 텍스트 텍스트1</span>" +
        "                    </li>" +
        "                    <li class=\"multiple-select\" style=\"left: 30px; top: 100px; width: 300px; height: 23px;\">" +
        "                      <span class=\"multiple-icon\" style=\"left: 0px; top: 0px;\"><img src=\"/asset/theme/curious_blue/quiz/quiz_choice_answer.svg\" width=\"16\"></span>" +
        "                      <span class=\"text\" style=\"font-size: 14px; left: 24px; top: 3px; width:calc(100% - 24px)\">선택지 텍스트 텍스트2</span>" +
        "                    </li>" +
        "                    <li class=\"multiple-select\" style=\"left: 30px; top: 130px; width: 320px; height: 23px;\">" +
        "                      <span class=\"multiple-icon\" style=\"left: 0px; top: 0px;\"><img src=\"/asset/theme/curious_blue/quiz/quiz_choice_user.svg\" width=\"16\"></span>" +
        "                      <span class=\"text\" style=\"font-size: 14px; left: 24px; top: 3px; width:calc(100% - 24px)\">선택지 텍스트 텍스트3</span>" +
        "                    </li>" +
        "                  </ul>" +
        "                  <div class=\"btn\" style=\"left: 387px; top: 0px; width: 30px; height: 30px;\">" +
        "                    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_check.svg\" width=\"30\" alt=\"정답 확인\">" +
        "                  </div>" +
        "                  <div class=\"btn\" style=\"left: 420px; top: 0px; width: 30px; height: 30px;\">" +
        "                    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_replay.svg\" width=\"30\" alt=\"다시 풀기\">" +
        "                  </div>" +

        "                </div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: COMP_TYPE_1,
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

function addSubjectiveQuizElement() {
    var elId = makeid('subjective-quiz', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + COMP_TYPE_2 + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class=\"content quiz_area\" style=\"left: 101px; top: 324px; width: 450px; height: 200px; cursor: pointer;\">" +
        "                  <div class=\"text\" style=\"left: 24px; top: 10px; width: 100%; height: 36px;\">" +
        "                    <span style=\"font-size: 24px; line-height: 1.5; color: #000000;\">지시문 텍스트텍스트</span>" +
        "                  </div> " +
        "                  <div class=\"marking\" style=\"left: 0px; top: 0px; width: 58px; height: 58px;\">" +
        "                    <img src=\"/asset/theme/curious_blue/quiz/quiz_marking_o.svg\" width=\"58\">" +
        "                  </div>" +
        "                  <ul style=\"left: 0px; top: 0;\">" +
        "                    <li class=\"multiple-select\" style=\"left: 30px; top: 70px; width: 340px; height: 23px;\">" +
        "                      <span class=\"text\" style=\"font-size: 14px; left: 24px; top: 3px; width:calc(100% - 24px)\">선택지 텍스트 텍스트1</span>" +
        "                    </li>" +
        "                    <li class=\"multiple-select\" style=\"left: 30px; top: 100px; width: 300px; height: 23px;\">" +
        "                      <span class=\"text\" style=\"font-size: 14px; left: 24px; top: 3px; width:calc(100% - 24px)\">선택지 텍스트 텍스트2</span>" +
        "                    </li>" +
        "                    <li class=\"multiple-select\" style=\"left: 30px; top: 130px; width: 320px; height: 23px;\">" +
        "                      <span class=\"text\" style=\"font-size: 14px; left: 24px; top: 3px; width:calc(100% - 24px)\">선택지 텍스트 텍스트3</span>" +
        "                    </li>" +
        "                  </ul>" +
        "                  <div class=\"btn\" style=\"left: 387px; top: 0px; width: 30px; height: 30px;\">" +
        "                    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_check.svg\" width=\"30\" alt=\"정답 확인\">" +
        "                  </div>" +
        "                  <div class=\"btn\" style=\"left: 420px; top: 0px; width: 30px; height: 30px;\">" +
        "                    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_replay.svg\" width=\"30\" alt=\"다시 풀기\">" +
        "                  </div>" +

        "                </div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: COMP_TYPE_2,
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
function addDrawLineQuizElement() {
    var elId = makeid('draw-line-quiz', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + COMP_TYPE_3 + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class=\"content quiz_area\" style=\"left: 101px; top: 324px; width: 450px; height: 200px; cursor: pointer;\">" +
        "<div class=\"handle ui-draggable\" style=\"left: 0px; top: 0px; width: 442.125px; height: 177.813px;\">" +
        "        <div class=\"object_outline main\" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +
        "  <div class=\"marking sub-item\" style=\"visibility: visible; left: 0px; top: 0px; width: 56.9866px; height: 56.9866px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_marking_o.svg\" width=\"56.9865843\" height=\"56.9865843\">" +

        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +

        "  <ul class=\"dot-items\"><li class=\"sub-item dot start\"  style=\"left: 98.2527px; top: 68.7769px; width: 10.8078px; height: 10.8078px;\">" +
        "          <img src=\"/asset/theme/curious_blue/quiz/quiz_line_dot.svg\" width=\"10.8078005\" height=\"10.8078005\">" +
        "        " +
        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li><li class=\"sub-item dot start\"  style=\"left: 98.2527px; top: 117.903px; width: 10.8078px; height: 10.8078px;\">" +
        "          <img src=\"/asset/theme/curious_blue/quiz/quiz_line_dot.svg\" width=\"10.8078005\" height=\"10.8078005\">" +
        "        " +
        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li><li class=\"sub-item dot start\"  style=\"left: 98.2527px; top: 167.03px; width: 10.8078px; height: 10.8078px;\">" +
        "          <img src=\"/asset/theme/curious_blue/quiz/quiz_line_dot.svg\" width=\"10.8078005\" height=\"10.8078005\">" +
        "        " +
        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li><li class=\"sub-item dot end\"  style=\"left: 294.758px; top: 68.7769px; width: 10.8078px; height: 10.8078px;\">" +
        "          <img src=\"/asset/theme/curious_blue/quiz/quiz_line_dot.svg\" width=\"10.8078005\" height=\"10.8078005\">" +
        "        " +
        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li><li class=\"sub-item dot end\"  style=\"left: 294.758px; top: 117.903px; width: 10.8078px; height: 10.8078px;\">" +
        "          <img src=\"/asset/theme/curious_blue/quiz/quiz_line_dot.svg\" width=\"10.8078005\" height=\"10.8078005\">" +
        "        " +
        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li><li class=\"sub-item dot end\" style=\"left: 294.758px; top: 167.03px; width: 10.8078px; height: 10.8078px;\">" +
        "          <img src=\"/asset/theme/curious_blue/quiz/quiz_line_dot.svg\" width=\"10.8078005\" height=\"10.8078005\">" +
        "        " +
        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li></ul>" +

        "  <div class=\"btn check sub-item\" style=\"visibility: visible; left: 380.238px; top: 0px; width: 29.4758px; height: 29.4758px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_check.svg\" width=\"29.4758195\" height=\"29.4758195\" alt=\"정답 확인\">" +

        "        <div class=\"object_outline \" style=\"width: 100%; height: 100%; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +

        "  <div class=\"btn replay sub-item\" style=\"visibility: visible; left: 412.661px; top: 0px; width: 29.4758px; height: 29.4758px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_replay.svg\" width=\"29.4758195\" height=\"29.4758195\" alt=\"다시 풀기\">" +

        "        <div class=\"object_outline \" style=\"width: 100%; height: 100%; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +

        "  <div class=\"exp sub-item resizable aspectRatio\" style=\"display: none;\">" +
        "    <img src=\"\" width=\"\" height=\"\" alt=\"해설\" style=\"display: none; width: 100%; height: 100%; pointer-events: none;\">" +
        "    <div class=\"inner\" style=\"display: none; width: 100%; height: 100%; overflow-y: auto; background: #ffffff; color: #000000; line-height: 1.4; box-sizing: border-box;\">" +
        "      <span class=\"text\" style=\"overflow-wrap: anywhere;\"></span>" +
        "    </div>" +

        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +
        "                </div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: COMP_TYPE_3,
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

function addXoQuizElement() {
    var elId = makeid('xo-quiz', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + COMP_TYPE_4 + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class=\"content quiz_area\" style=\"left: 101px; top: 324px; width: 450px; height: 200px; cursor: pointer;\">" +
        "<div class=\"handle ui-draggable\" style=\"left: 0px; top: 0px; width: 442.125px; height: 177.813px;\">" +
        "        <div class=\"object_outline main\" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +
        "  <div class=\"marking sub-item\"  style=\"visibility: visible; left: 0px; top: 0px; width: 56.9866px; height: 56.9866px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_marking_o.svg\" width=\"56.9865843\" height=\"56.9865843\">" +

        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +

        "<div class=\"ox-items\"><ul >" +
        "          <li class=\"multiple-select ox-quiz o sub-item resizable ui-draggable ui-resizable\"  style=\"left: 102.183px; top: 86.4624px; width: 64.8468px; height: 64.8468px; z-index: 169;\">" +
        "            <span class=\"multiple-icon ox-quiz-o\">" +
        "              <img class=\"sub-item has-parent\"  src=\"/asset/theme/curious_blue/quiz/quiz_choice_user.svg\" width=\"15.7204371\" height=\"15.7204371\" style=\"\">" +

        "        <div class=\"object_outline \" style=\"width: 15.7204px; height: 15.7204px; left: 23.5625px; top: 23.5625px; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></span>" +
        "            <span class=\"blind\"></span>" +
        "          " +
        "        <div class=\"object_outline \" style=\"width: 100%; height: 100%; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li>" +
        "          <li class=\"multiple-select ox-quiz x sub-item resizable\" style=\"left: 231.876px; top: 86.4624px; width: 64.8468px; height: 64.8468px;\">" +
        "            <span class=\"multiple-icon ox-quiz-x\">" +
        "              <img class=\"sub-item has-parent\" src=\"/asset/theme/curious_blue/quiz/quiz_choice_answer.svg\" width=\"15.7204371\" height=\"15.7204371\">" +

        "        <div class=\"object_outline \" style=\"width: 15.7204px; height: 15.7204px; left: 23.5625px; top: 23.5625px; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></span>" +
        "            <span class=\"blind\"></span>             " +
        "          " +
        "        <div class=\"object_outline \" style=\"width: 100%; height: 100%; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></li>" +
        "        </ul>" +
        "</div>" +

        "  <div class=\"btn check sub-item\" style=\"visibility: visible; left: 380.238px; top: 0px; width: 29.4758px; height: 29.4758px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_check.svg\" width=\"29.4758195\" height=\"29.4758195\" alt=\"정답 확인\">" +

        "        <div class=\"object_outline \" style=\"width: 100%; height: 100%; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +

        "  <div class=\"btn replay sub-item\" style=\"visibility: visible; left: 412.661px; top: 0px; width: 29.4758px; height: 29.4758px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_replay.svg\" width=\"29.4758195\" height=\"29.4758195\" alt=\"다시 풀기\">" +

        "        <div class=\"object_outline \" style=\"width: 100%; height: 100%; display: none;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +

        "  <div class=\"exp sub-item resizable aspectRatio\" style=\"display: none;\">" +
        "    <img src=\"\" width=\"\" height=\"\" alt=\"해설\" style=\"display: none; width: 100%; height: 100%; pointer-events: none;\">" +
        "    <div class=\"inner\" style=\"display: none; width: 100%; height: 100%; overflow-y: auto; background: #ffffff; color: #000000; line-height: 1.4; box-sizing: border-box;\">" +
        "      <span class=\"text\" style=\"overflow-wrap: anywhere;\"></span>" +
        "    </div>" +

        "        <div class=\"object_outline \" style=\"display: none; width: 100%; height: 100%;\">" +
        "          <span class=\"box_outlines border_solid\"><span></span><span></span><span></span><span></span></span>" +
        "        </div></div>" +
        "                </div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: COMP_TYPE_4,
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
function addDragDropQuizElement() {
    var elId = makeid('drag-drop-quiz', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + COMP_TYPE_5 + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class=\"content quiz_area\" style=\"left: 101px; top: 200px; width: 450px; height: 450px; cursor: pointer;\">" +
        "<div class=\"btn replay sub-item\" style=\"visibility: visible; left: 412.661px; top: 0px; width: 29.4758px; height: 29.4758px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_replay.svg\" width=\"29.4758195\" height=\"29.4758195\" alt=\"다시 풀기\">" +
        "</div> " +
        "<div data-moveable class=\"content\"  style=\"left: 75px; top: 230px; width: 300px; height: 200px; cursor: pointer; justify-content: center; display: flex; align-items: center; background: #D8D8D8;\">" +
        "    <img src=\"/asset/img/quiz/drag_drop_container.svg\" style=\"width: 42px; height: 42px;\" alt=\"drop\">" +
        "</div>" +
        "<div data-moveable class=\"content\"  style=\"left: 225px; top: 150px; width: 50px; height: 50px; cursor: pointer; justify-content: center; display: flex; align-items: center; background: #D8D8D8;\">" +
        "    <img src=\"/asset/img/quiz/drag_drop.svg\"  style=\"width: 24px; height: 24px;\" alt=\"drag\">" +
        "</div>" +
        "<div data-moveable class=\"content\"  style=\"left: 150px; top: 150px; width: 50px; height: 50px; cursor: pointer; justify-content: center; display: flex; align-items: center; background: #D8D8D8;\">" +
        "    <img src=\"/asset/img/quiz/drag_drop.svg\"  style=\"width: 24px; height: 24px;\" alt=\"drag\">" +
        "</div>" +
        "  <div class=\"exp sub-item resizable aspectRatio\" style=\"display: none;\">" +
        "    <img src=\"\" width=\"\" height=\"\" alt=\"해설\" style=\"display: none; width: 100%; height: 100%; pointer-events: none;\">" +
        "    <div class=\"inner\" style=\"display: none; width: 100%; height: 100%; overflow-y: auto; background: #ffffff; color: #000000; line-height: 1.4; box-sizing: border-box;\">" +
        "      <span class=\"text\" style=\"overflow-wrap: anywhere;\"></span>" +
        "    </div>" +
        "</div>" +
        "                </div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: COMP_TYPE_5,
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

function addStickerElement() {
    var elId = makeid('sticker', 10);
    var obj = "<div id='" + elId + "' node='obj' objType='" + COMP_TYPE_6 + "' pageId='" + currentPage.pageId + "' onclick='changeSelection($(this))' data-moveable class=\"content quiz_area\" style=\"left: 101px; top: 200px; width: 450px; height: 450px; cursor: pointer;\">" +
        "<div class=\"btn replay sub-item\" style=\"visibility: visible; left: 412.661px; top: 0px; width: 29.4758px; height: 29.4758px;\">" +
        "    <img src=\"/asset/theme/curious_blue/quiz/quiz_btn_replay.svg\" width=\"29.4758195\" height=\"29.4758195\" alt=\"다시 풀기\">" +
        "</div> " +
        "<div data-moveable class=\"content\"  style=\"left: 75px; top: 230px; width: 300px; height: 200px; cursor: pointer; justify-content: center; display: flex; align-items: center; background: #D8D8D8;\">" +
        "    <img src=\"/asset/img/quiz/drag_drop_container.svg\" style=\"width: 42px; height: 42px;\" alt=\"drop\">" +
        "</div>" +
        "<div data-moveable class=\"content\"  style=\"left: 225px; top: 150px; width: 50px; height: 50px; cursor: pointer; justify-content: center; display: flex; align-items: center; background: #D8D8D8;\">" +
        "    <img src=\"/asset/img/quiz/sticker_drag.svg\"  style=\"width: 24px; height: 24px;\" alt=\"drag\">" +
        "</div>" +
        "<div data-moveable class=\"content\"  style=\"left: 150px; top: 150px; width: 50px; height: 50px; cursor: pointer; justify-content: center; display: flex; align-items: center; background: #D8D8D8;\">" +
        "    <img src=\"/asset/img/quiz/sticker_drag.svg\"  style=\"width: 24px; height: 24px;\" alt=\"drag\">" +
        "</div>" +
        "  <div class=\"exp sub-item resizable aspectRatio\" style=\"display: none;\">" +
        "    <img src=\"\" width=\"\" height=\"\" alt=\"해설\" style=\"display: none; width: 100%; height: 100%; pointer-events: none;\">" +
        "    <div class=\"inner\" style=\"display: none; width: 100%; height: 100%; overflow-y: auto; background: #ffffff; color: #000000; line-height: 1.4; box-sizing: border-box;\">" +
        "      <span class=\"text\" style=\"overflow-wrap: anywhere;\"></span>" +
        "    </div>" +
        "</div>" +
        "                </div>"
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: COMP_TYPE_6,
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

function addCheckboxElement() {
    var elId = makeid('checkbox', 10);


    var obj = '<div id="' + elId + '" node="obj" objType="' + COMP_TYPE_7 + '" pageId="' + currentPage.pageId + '" onclick="changeSelection($(this))" data-moveable class="draggable textElement" style="left:150px; top:150px; width: 320px; height: 200px; cursor: pointer;">' +
        ' <div style="height:100%; width:100%; position:relative; ">' +

        '<div class="" style="position:relative; text-align:end;">' +
        ' <img src = "/asset/theme/curious_blue/quiz/quiz_btn_replay.svg" width = "29.4758195" height = "29.4758195" alt = "다시 풀기" >' +

        ' <span class="check_wrap">' +
        '<label class="check_label">' +
        '<input type="checkbox" class="blind" checked="true">' +
        ' <span class="clabel"></span>' +
        '</label>' +
        '</span>' +
        '</div>' +
        '<div class="" style="position:relative; margin-top:10px;">' +
        ' <span class="check_wrap">' +
        '<label class="check_label">' +
        '<input type="checkbox" class="blind">' +
        ' <span class="clabel"> </span>' +
        '</label>' +
        '</span>' +
        '</div>' +
        '   <div class=" mt14" style="margin-top:14px;">' +
        '      <div class="row" style="position:relative;">' +
        ' <div class="radio_wrap">' +
        '<label class="radio_label">' +
        '  <input type="radio" name="subtree_filltype" class="blind" checked="">' +
        ' <span class="rlabel"></span>' +
        '</label>' +
        ' </div>' +
        '</div>' +
        '<div class="row" style="position:relative ; margin-top:10px ;">' +
        '<div class="radio_wrap">' +
        '<label class="radio_label">' +
        '<input type="radio" name="subtree_filltype" class="blind">' +
        '     <span class="rlabel"></span>' +
        '    </label>' +
        '   </div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    mainPage.append(obj);

    var newObj = {
        pageId: currentPage.pageId,
        id: elId,
        objType: COMP_TYPE_7, // It seems this line is not updated, you may want to adjust it accordingly
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