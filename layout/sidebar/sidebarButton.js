
var choosedFile = null;
var choosedResult = null;
var downloadFile = null;
var downloadResult = null;
let lastColor = {};
let colorPickerElement = null;
let colorPickerButton = null;

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
            showAlpha: true,
            preferredFormat: "hex",
            // color: ( colorPickerElement.value ? ""+ colorPickerElement.value : "#000000"),
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

$(".select_color_picker").on("click", function (e) {
    colorPickerButton = e.currentTarget;
    colorPickerElement = colorPickerButton.firstElementChild;

    var type = $(colorPickerButton).attr('data')
    var color = selectedObj.style[type]
    if(type) {
        $("#spectrumColor").spectrum("set", color ? color : "#70CCEB");
    }
    $(".spectrum_box").show();
});

$(".spectrum_box").on("mouseleave", function (e) {
    $(".spectrum_box").hide();
});

$('input[name=buttonStyleType]').change(function() {
    var button = $('#'+selectedObj.id).find('button')
    var inner = $('#'+selectedObj.id).find('span')
    
    if (this.value === 'default') {
        $(inner[0]).removeClass('hide')
        $(button[0]).css("background-image", "")

        var data = {
            backType: this.value,
        }
        selectedObj.datas = {...selectedObj.datas, ...data}
        changeElementData(selectedObj)
    }
    else if (this.value === 'image') {
        $(inner[0]).addClass('hide')
        if(choosedResult){
            $(button[0]).css("background-image", "url(" + choosedResult + ")")
        }

        var data = {
            backType: this.value,
            backFileName: choosedFile ? choosedFile.name : '',
            backFile: choosedFile,
        }
        selectedObj.datas = {...selectedObj.datas, ...data}
        changeElementData(selectedObj)
    }
});

$("input[name='fileChooser']").on('change', function () {
    if(this.files && this.files.length > 0) {
        var file = this.files[0];
        choosedFile = file;
        var reader = new FileReader();
        reader.onload = function(event) {
            var result = event.target.result;
            changeChoosedFile(result)
        };
        reader.readAsDataURL(file);
    }
})

$("input[name='buttonText']").on("keyup", function (e) {
    var value = e.target.value;
    $('#'+selectedObj.id+" span").html(value);

    selectedObj.datas = {...selectedObj.datas, buttonText: value}
    changeElementData(selectedObj)
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

$("input[name='fontSize']").on("keyup", function (e) {
    var value = e.target.value;
    if (checkNumber(value) !== false) {
        $("span[popup='size']").removeClass("show");
        changeStyle("font-size", value+'px');

        selectedObj.style['fontSize'] = value
        changeElementStyle(selectedObj)
    }
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

$("input[name='fileDownload']").on('change', function () {
    if(this.files && this.files.length > 0) {
        var file = this.files[0];
        downloadFile = file;
        var reader = new FileReader();
        reader.onload = function(event) {
            var result = event.target.result;
            changeDownloadFile(result)
        };
        reader.readAsDataURL(file);
    }
})

$('input[name=actionType]').change(function() {
    if (this.value === 'download') {
        $('input[name="actionTypeWeb"]').prop("disabled", true);
        $('input[name="actionTypePage"]').prop("disabled", true);

        var data = {
            actionType: this.value,
            actionFileName: downloadFile ? downloadFile.name : '',
            actionFile: downloadFile,
        }
        selectedObj.datas = {...selectedObj.datas, ...data}
        changeElementData(selectedObj)
    }
    else if (this.value === 'web') {
        $('input[name="actionTypeWeb"]').removeAttr('disabled');
        $('input[name="actionTypePage"]').prop("disabled", true);

        var data = {
            actionType: this.value,
            actionWeb: $("input[name='actionTypeWeb']").val(),
        }
        selectedObj.datas = {...selectedObj.datas, ...data}
        changeElementData(selectedObj)
    }
    else if (this.value === 'page') {
        $('input[name="actionTypeWeb"]').prop("disabled", true);
        $('input[name="actionTypePage"]').removeAttr('disabled');
        
        var data = {
            actionType: this.value,
            actionWeb: $("input[name='actionTypePage']").val(),
        }
        selectedObj.datas = {...selectedObj.datas, ...data}
        changeElementData(selectedObj)
    }
    else if (this.value === 'close') {
        $('input[name="actionTypeWeb"]').prop("disabled", true);
        $('input[name="actionTypePage"]').prop("disabled", true);

        selectedObj.datas = {...selectedObj.datas, actionType: this.value}
        changeElementData(selectedObj)
    }
});

$("input[name='actionTypeWeb']").on("keyup", function (e) {
    var value = e.target.value;
    var data = {
        actionType: $("input[name='actionType']:checked").val(),
        actionWeb: value,
    }
    selectedObj.datas = {...selectedObj.datas, ...data}
    changeElementData(selectedObj)
});

$("input[name='actionTypePage']").on("keyup", function (e) {
    var value = e.target.value;
    var data = {
        actionType: $("input[name='actionType']:checked").val(),
        actionPage: value,
    }
    selectedObj.datas = {...selectedObj.datas, ...data}
    changeElementData(selectedObj)
});

$("input[name='borderWidth']").on("keyup", function (e) {
    var value = e.target.value;
    if (checkNumber(value) !== false) {
        $('#'+selectedObj.id+" button").css('border-width', value+'px');

        selectedObj.style['borderWidth'] = value
        changeElementStyle(selectedObj)
    }
});

$("input[name='shadowWidth']").on("keyup", function (e) {
    var value = e.target.value;
    if (checkNumber(value) !== false) {
        $('#'+selectedObj.id+" button").css('box-shadow', "10px 10px 5px #fff !important;");

        selectedObj.style['shadowWidth'] = value
        changeElementStyle(selectedObj)
    }
});

$("input[name='borderRadius']").on("keyup", function (e) {
    var value = e.target.value;
    if (checkNumber(value) !== false) {
        $('#'+selectedObj.id+" button").css('border-radius', value+'px');

        selectedObj.style['borderRadius'] = value
        changeElementStyle(selectedObj)
    }
});


function onChoosedFile(){
    if($('input[name=buttonStyleType]:checked').val() === 'image') {
        $("input[name='fileChooser']").click()
    }
}

function changeChoosedFile(result) {
    choosedResult = result;
    var button = $('#'+selectedObj.id).find('button')
    $(button[0]).css("background-image", "url(" + result + ")")
    $("input[name='fileChooserName']").val(choosedFile.name)

    var data = {
        backType: $("input[name='buttonStyleType']:checked").val(),
        backFileName: choosedFile.name,
        backFile: choosedFile,
    }
    selectedObj.datas = {...selectedObj.datas, ...data}
    changeElementData(selectedObj)
}

function changeStyle(style, value) {
    $('#'+selectedObj.id+" span").css(style, value);
}

function changeClass(name) {
    $('#'+selectedObj.id+" span").toggleClass(name);
}

function onDownloadFile(){
    if($('input[name=actionType]:checked').val() === 'download') {
        $("input[name='fileDownload']").click()
    }
}

function changeDownloadFile(result) {
    downloadResult = result;
    $("input[name='fileDownloadName']").val(downloadFile.name)

    var data = {
        actionType: $("input[name='actionType']:checked").val(),
        actionFileName: downloadFile.name,
        actionFile: downloadFile,
    }
    selectedObj.datas = {...selectedObj.datas, ...data}
    changeElementData(selectedObj)
}

function changeColor(color) {
    var prmColor;
    try {
        prmColor = color.toHexString(); // #ff0000
        // console.log('color',colorPickerButton)
        if(($.isEmptyObject(lastColor ) || !lastColor[selectedObj.id]) ||
            (lastColor[selectedObj.id] && lastColor[selectedObj.id] !== prmColor)
        ){
            prmColor = color2Hex(prmColor)
            lastColor[selectedObj.id] = prmColor
            colorPickerElement.value =  prmColor;
            $(colorPickerButton).find("path.active_color")[0].style.fill = prmColor;

            var type = $(colorPickerButton).attr('data')
            if(type) {
                if(type === 'backgroundColor') {
                    $('#'+selectedObj.id+" button").css('background-color', prmColor);
                }
                else if(type === 'borderColor') {
                    $('#'+selectedObj.id+" button").css('border-color', prmColor);
                }
                else if(type === 'fontColor') {
                    changeStyle("color", prmColor);
                }
                selectedObj.style[type] = prmColor
                changeElementStyle(selectedObj)
            }
        }
    }
    catch(err) {
        return false;
    }
}

function changeSidebarElement() {
    // console.log(selectedObj)
    lastColor = {}
    var left = selectedObj.style.left ? selectedObj.style.left : 0
    var top = selectedObj.style.top ? selectedObj.style.top : 0
    var width = selectedObj.style.width ? selectedObj.style.width : 0
    var height = selectedObj.style.height ? selectedObj.style.height : 0
    var fontFamily = selectedObj.style.fontFamily ? selectedObj.style.fontFamily : 'Nto Sanos KR'
    var fontSize = selectedObj.style.fontSize ? selectedObj.style.fontSize : '14'
    var letterSpacing = selectedObj.style.letterSpacing ? selectedObj.style.letterSpacing : '1.5'
    var fontStyle = selectedObj.style.fontStyle ? selectedObj.style.fontStyle : 'normal'
    var fontWeight = selectedObj.style.fontWeight ? selectedObj.style.fontWeight : 'normal'
    var textDecoration = selectedObj.style.textDecoration ? selectedObj.style.textDecoration : 'none'
    var textAlign = selectedObj.style.textAlign ? selectedObj.style.textAlign : ''
    var fontColor = selectedObj.style.fontColor ? selectedObj.style.fontColor : '#70CCEB'
    var backgroundColor = selectedObj.style.backgroundColor ? selectedObj.style.backgroundColor : '#70CCEB'
    var borderColor = selectedObj.style.borderColor ? selectedObj.style.borderColor : '#70CCEB'
    var borderWidth = selectedObj.style.borderWidth ? selectedObj.style.borderWidth : 0
    var shadowWidth = selectedObj.style.shadowWidth ? selectedObj.style.shadowWidth : 0
    var borderRadius = selectedObj.style.borderRadius ? selectedObj.style.borderRadius : 20
    var datas = selectedObj.datas
    
    $("input[name='left']").val(left)
    $("input[name='top']").val(top)
    $("input[name='width']").val(width)
    $("input[name='height']").val(height)
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

    $("span[data='fontColor']").find("path.active_color")[0].style.fill = fontColor;
    $("span[data='borderColor']").find("path.active_color")[0].style.fill = borderColor;
    $("span[data='backgroundColor']").find("path.active_color")[0].style.fill = backgroundColor;

    $("input[name='borderWidth']").val(borderWidth)
    $("input[name='shadowWidth']").val(shadowWidth)
    $("input[name='borderRadius']").val(borderRadius)

    $("input[name='fileChooserName']").val('')
    if(datas.backType) {
        $("input[name=buttonStyleType][value='"+datas.backType+"']").prop("checked",true);
        if(datas.backType === 'image') {
            $("input[name='fileChooserName']").val(datas.backFileName)
        }
    }
    else {
        $("input[name=buttonStyleType][value='default']").prop("checked",true);
    }

    if(datas.buttonText) {
        $("input[name='buttonText']").val(datas.buttonText)
    }

    $("input[name='fileDownloadName']").val('')
    $("input[name='actionTypeWeb']").val('')
    $("input[name='actionTypePage']").val('')
    if(datas.actionType) {
        $("input[name=actionType][value='"+datas.actionType+"']").prop("checked",true);
        if (datas.actionType === 'download') {
            $('input[name="actionTypeWeb"]').prop("disabled", true);
            $('input[name="actionTypePage"]').prop("disabled", true);

            if(datas.actionFileName){
                $("input[name='fileDownloadName']").val(datas.actionFileName)
            }
        }
        else if (datas.actionType === 'web') {
            $('input[name="actionTypeWeb"]').removeAttr('disabled');
            $('input[name="actionTypePage"]').prop("disabled", true);

            if(datas.actionWeb){
                $("input[name='actionTypeWeb']").val(datas.actionWeb)
            }
        }
        else if (datas.actionType === 'page') {
            $('input[name="actionTypeWeb"]').prop("disabled", true);
            $('input[name="actionTypePage"]').removeAttr('disabled');
            
            if(datas.actionPage){
                $("input[name='actionTypePage']").val(datas.actionPage)
            }
        }
        else if (datas.actionType === 'close') {
            $('input[name="actionTypeWeb"]').prop("disabled", true);
            $('input[name="actionTypePage"]').prop("disabled", true);
        }
    }
    else {
        $("input[name=actionType][value='download']").prop("checked",true);
    }
    
}
