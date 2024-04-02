let lastColor = {};
var choosedFile = null;

$(function () {
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
        // color: ( selectedObj.style.color ? ""+ selectedObj.style.color : "#000000"),
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
});

$(".panel_setting_open").on("click", function (e) {
    var target = e.currentTarget.closest(".panel");
    $(target).toggleClass("active");
});

$(".icon_list .slide").on("click", (e) => {
    var target = e.currentTarget;
    $(".icon_list .slide").removeClass("active");
    $(target).addClass("active");

    var img = $(target).find('img')
    if(img && img.length > 0){
        var imgUlr = $(img[0]).attr('src')
        $("#mainPage").css("background-image", "url(" + imgUlr + ")")

        currentPage.style['backgroundImage'] = imgUlr
        currentPage.style['backgroundColor'] = ""
    }
});

$("input[name='fileChooser']").on('change', function () {
    if(this.files && this.files.length > 0) {
        var file = this.files[0];
        choosedFile = file;
        var reader = new FileReader();
        reader.onload = function(event) {
            var result = event.target.result;
            changeImg(result)
        };
        reader.readAsDataURL(file);
    }
})

function onChangeImg(){
    $("input[name='fileChooser']").click()
}

function changeImg(result) {
    $("input[name='fileChooserName']").val(choosedFile.name)
    $("#mainPage").css("background-image", "url(" + result + ")")

    currentPage.style['backgroundImage'] = result
    currentPage.style['backgroundColor'] = ""
}

function onChangeBackground(type, obj) {
    $(".select_sub_tools").removeClass('on')
    $(obj).toggleClass('on')
    if(type === 'clear') {
        $("#mainPage").css("backgroundColor", "#fff")
        $("#mainPage").css("background-image", "")
        $("input[name='fileName']").val('');
        choosedFile = null;
        lastColor = null;

        currentPage.style['backgroundColor'] = ""
        currentPage.style['backgroundImage'] = ''
    }
    else if(type === 'color') {
        $("div[data='color']").removeClass("hide");
        $("div[data='libImg']").addClass("hide");
        $("div[data='userImg']").addClass("hide");
        
    }
    else if(type === 'libImg') {
        $("div[data='color']").addClass("hide");
        $("div[data='libImg']").removeClass("hide");
        $("div[data='userImg']").addClass("hide");
    }
    else if(type === 'userImg') {
        $("div[data='color']").addClass("hide");
        $("div[data='libImg']").addClass("hide");
        $("div[data='userImg']").removeClass("hide");
    }
}

function changeColor(color) {
    var prmColor;
    try {
        prmColor = color.toHexString(); // #ff0000
        if(lastColor !== prmColor){
            prmColor = color2Hex(prmColor)
            lastColor = prmColor
            $("#mainPage").css("background-image", "")
            $("#mainPage").css("backgroundColor", prmColor)

            currentPage.style['backgroundColor'] = prmColor
            currentPage.style['backgroundImage'] = ''
        }
    }
    catch(err) {
        // console.log(err);
        return false;
    }
}
