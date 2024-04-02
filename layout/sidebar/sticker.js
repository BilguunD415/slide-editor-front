$(".panel_setting_open").on("click", function (e) {

    var target = e.currentTarget.closest(".panel");
    $(target).toggleClass("active");
});
$(".select_wrap").on("click", (e) => {
    var target = e.currentTarget;
    $(target).find(".select_toggle").toggleClass("on")
    $(target).find(".select_list").toggleClass("show")
});
$(".panel_subtree .example_list .btn.example_subtree_open").on("click", function (e) {
    let target = e.currentTarget;
    let targetParent = $(target).closest("div.example_list");
    $(targetParent).toggleClass("active");
    $(target).toggleClass("active").toggleClass("on");

});

let lastColor = {};
let colorPickerElement = null;
let colorPickerButton = null;

$(function () {
    if (selectedObj) {

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

$(".select_color_picker").on("click", function (e) {
    colorPickerButton = e.currentTarget;
    colorPickerElement = colorPickerButton.firstElementChild;

    var type = $(colorPickerButton).attr('data')
    var color = selectedObj.style[type]
    if (type) {
        $("#spectrumColor").spectrum("set", color ? color : "#70CCEB");
    }
    $(".spectrum_box").show();
});

$(".spectrum_box").on("mouseleave", function (e) {
    $(".spectrum_box").hide();
});


function changeColor(color) {
    var prmColor;
    try {
        prmColor = color.toHexString(); // #ff0000
        // console.log('color',colorPickerButton)
        if (($.isEmptyObject(lastColor) || !lastColor[selectedObj.id]) ||
            (lastColor[selectedObj.id] && lastColor[selectedObj.id] !== prmColor)
        ) {
            prmColor = color2Hex(prmColor)
            lastColor[selectedObj.id] = prmColor
            colorPickerElement.value = prmColor;
            $(colorPickerButton).find("path.active_color")[0].style.fill = prmColor;

            var type = $(colorPickerButton).attr('data')
            if (type) {
                if (type === 'backgroundColor') {
                    $('#' + selectedObj.id + " button").css('background-color', prmColor);
                }
                else if (type === 'borderColor') {
                    $('#' + selectedObj.id + " button").css('border-color', prmColor);
                }
                else if (type === 'fontColor') {
                    changeStyle("color", prmColor);
                }
                selectedObj.style[type] = prmColor
                // changeElementStyle(selectedObj)
            }
        }
    }
    catch (err) {
        return false;
    }
}