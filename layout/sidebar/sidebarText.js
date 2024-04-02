let lastColor = {};

$(function () {
    if(selectedObj) {
        changeSidebarElement()

        $("#spectrumColor").spectrum({
            containerClassName: "spectrum_theme",
            type: "flat",
            hideAfterPaletteSelect: true,
            showInitial: true,
            showButtons: false,
            allowEmpty: false,
            showPalette: true,
            showInput: true,
            showAlpha: false,
            preferredFormat: "hex",
            color: ( selectedObj.style.color ? ""+ selectedObj.style.color : "#000000"),
            // color: "#000000",
            palette: [
              ['rgb(0,0,0)', 'rgb(255,255,255)', 'rgb(255,0,0)', 'rgb(255,192,0)', 'rgb(255,255,0)', 'rgb(146,208,80)', 'rgb(0,176,240)', 'rgb(38,89,255)'],
            ],
            showSelectionPalette: true,
            selectionPalette: ['rgb(209,192,165)', 'rgb(241,159,194)', 'rgb(241,159,194)', 'rgb(170,137,190)', 'rgb(137,171,218)', 'rgb(133,204,201)', 'rgb(49,177,108)', 'rgb(179,212,101)', 'rgb(236,104,65)'],
            maxSelectionSize: 8,
            localStorageKey: "selpubCreatorSpectrum",
            change: changeColor,
            move: changeColor,
        });
    }
});

$(".panel_setting_open").on("click", function (e) {
    var target = e.currentTarget.closest(".panel");
    $(target).toggleClass("active");
});

$(".select_toggle").on("click", (e) => {
    var target = e.currentTarget;
    $(".select_wrap .select_toggle").removeClass("on");
    $(".select_wrap .select_list").removeClass("show");
    $(target).addClass("on");
    $(target.nextElementSibling).toggleClass("show");
});

$("span[data='font']").on("click", function (e) {
    var value = e.target.innerHTML
    $("span[selectedData='font']").text(value);
    $("span[data='font']").removeClass('on');
    e.target.classList.add("on");
    $("span[popup='font']").removeClass("show");
    changeStyle("font-family", value)

    selectedObj.style['fontFamily'] = value
    changeElementStyle(selectedObj)
});

$("span[data='size']").on("click", function (e) {
    var value = e.target.innerHTML
    $("span[data='size']").removeClass('on');
    e.target.classList.add("on");
    $("span[popup='size']").removeClass("show");
    $("span[selectedData='size']").text(value);
    changeStyle("font-size", value+'px');

    selectedObj.style['fontSize'] = value
    changeElementStyle(selectedObj)
});

$("input[name='fontSize']").on("keyup", function (e) {
    var value = e.target.value;
    if (checkNumber(value) !== false) {
        $("span[popup='size']").removeClass("show");
        changeStyle("font-size", value+'px');

        selectedObj.style['fontSize'] = value
        changeElementStyle(selectedObj)
    }
});

$("span[data='line']").on("click", function (e) {
    var value = e.target.innerHTML
    $("span[data='line']").removeClass('on');
    e.target.classList.add("on");
    $("span[popup='line']").removeClass("show");
    $("span[selectedData='line']").text(value);
    changeStyle("letter-spacing", value+'px');

    selectedObj.style['letterSpacing'] = value
    changeElementStyle(selectedObj)
});

$("input[name='lineHeight']").on("keyup", function (e) {
    var value = e.target.value;
    if (checkNumber(value) !== false) {
        $("span[popup='line']").removeClass("show");
        changeStyle("letter-spacing", value+'px');

        selectedObj.style['letterSpacing'] = value
        changeElementStyle(selectedObj)
    }
});

$("span[data='italic']").on("click", function (e) {
    $(this).toggleClass('on')
    changeClass('italic')

    selectedObj.style['fontStyle'] = $(this).hasClass('on') ? 'italic' : 'normal'
    changeElementStyle(selectedObj)
});

$("span[data='bold']").on("click", function (e) {
    $(this).toggleClass('on')
    changeClass('bold')
    
    selectedObj.style['fontWeight'] = $(this).hasClass('on') ? 'bold' : 'normal'
    changeElementStyle(selectedObj)
});

$("span[data='underline']").on("click", function (e) {
    $(this).toggleClass('on')
    changeClass('underline')

    selectedObj.style['textDecoration'] = $(this).hasClass('on') ? 'underline' : 'none'
    changeElementStyle(selectedObj)
});

$("span[data='align']").on("click", function (e) {
    var value = $(this).attr('value')
    $("span[data='align']").removeClass('on')
    $(this).toggleClass('on')
    changeStyle("text-align", value);

    selectedObj.style['textAlign'] = value
    changeElementStyle(selectedObj)
});

function changeColor(color) {
    var prmColor;
    try {
        prmColor = color.toHexString(); // #ff0000
        if($.isEmptyObject(lastColor ) || !lastColor[selectedObj.id]){
            prmColor = color2Hex(prmColor)
            lastColor[selectedObj.id] = prmColor
            changeStyle("color", prmColor);

            selectedObj.style['fontColor'] = prmColor
            changeElementStyle(selectedObj)
        }
        else if(lastColor[selectedObj.id] && lastColor[selectedObj.id] !== prmColor) {
            prmColor = color2Hex(prmColor)
            lastColor[selectedObj.id] = prmColor
            changeStyle("color", prmColor);

            selectedObj.style['fontColor'] = prmColor
            changeElementStyle(selectedObj)
        }
    }
    catch(err) {
        // console.log(err);
        return false;
    }
}

function changeStyle(style, value) {
    $('#' + selectedObj.id).css(style, value);
    $('#'+selectedObj.id+" input").css(style, value);
}

function changeClass(name) {
    $('#' + selectedObj.id).toggleClass(name);
    $('#'+selectedObj.id+" input").toggleClass(name);
}

function changeSidebarElement() {
    // console.log('text style ', selectedObj.style)
    var left = selectedObj.style.left ? selectedObj.style.left : 0
    var top = selectedObj.style.top ? selectedObj.style.top : 0
    var fontFamily = selectedObj.style.fontFamily ? selectedObj.style.fontFamily : 'Nto Sanos KR'
    var fontSize = selectedObj.style.fontSize ? selectedObj.style.fontSize : '14'
    var letterSpacing = selectedObj.style.letterSpacing ? selectedObj.style.letterSpacing : '1.5'
    var fontStyle = selectedObj.style.fontStyle ? selectedObj.style.fontStyle : 'normal'
    var fontWeight = selectedObj.style.fontWeight ? selectedObj.style.fontWeight : 'normal'
    var textDecoration = selectedObj.style.textDecoration ? selectedObj.style.textDecoration : 'none'
    var textAlign = selectedObj.style.textAlign ? selectedObj.style.textAlign : ''
    var fontColor = selectedObj.style.fontColor ? selectedObj.style.fontColor : '#000000'

    $("input[name='left']").val(left)
    $("input[name='top']").val(top)
    $("span[selectedData='font']").text(fontFamily);
    $("span[data='font']").removeClass('on');
    $("span[data='font']:contains('"+fontFamily+"')").addClass('on');
    $("span[selectedData='size']").text(fontSize);
    $("span[data='size']").removeClass('on');
    $("span[data='size']:contains('"+fontSize+"')").addClass('on');
    $("span[selectedData='line']").text(letterSpacing);
    $("span[data='line']").removeClass('on');
    $("span[data='line']:contains('"+letterSpacing+"')").addClass('on');

    $("span[data='italic']").removeClass('on')
    $("span[data='bold']").removeClass('on')
    $("span[data='underline']").removeClass('on')
    if(fontStyle === 'italic') {
        $("span[data='italic']").addClass('on')
    }
    if(fontWeight === 'bold') {
        $("span[data='bold']").addClass('on')
    }
    if(textDecoration === 'underline') {
        $("span[data='underline']").addClass('on')
    }

    $("span[data='align']").removeClass('on')
    if(textAlign) {
        $("span[data='align']").removeClass('on')
        $("span[value='"+textAlign+"']").addClass('on')
    }

    if(fontColor) {
        $("#spectrumColor").spectrum("set", fontColor);
    }
}
