
function makeid(prefix, length) {
    let result = prefix+'-';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function checkNumber(value){
    try {
        var ret = parseInt(value);
        return ret;
    }
    catch(e) {
        return false;
    }
}

// function rgb2hex(rgb){
//     rgb = rgb.match(/^rgb((d+),s*(d+),s*(d+))$/);
//     return "#" +
//         ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
//         ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
//         ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
// }

var hexDigits =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var hex= function(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function color2Hex(color) {
    if(color.indexOf('rgb') >= 0) {
        var newColor = rgb2hex(color)
        return newColor
    }
    return color
}


function onResize(target) {
    var value = $(target).val();
    if (checkNumber(value) !== false) {
        moveable.target = null
        var styleAttr = $(target).attr('name');
        var data = {}
        data[styleAttr] = value + 'px'
        $('#' + selectedObj.id).css({ ...data });

        selectedObj.style[styleAttr] = value
        changeElementStyle(selectedObj)
    }
}

function addElement(obj){
    currentPage.body.push(obj);
}

function getElement(id){
    if(currentPage.body.length > 0) {
        for(var i = 0; i < currentPage.body.length; i++) {
            if(currentPage.body[i].id === id) {
                return currentPage.body[i];
            }
        }
    }
    return null;
}

function changeElement(id) {
    var obj = getElement(id);
    if(obj) {
        selectedObj.pageId = obj.pageId;
        selectedObj.id = obj.id;
        selectedObj.objType = obj.objType;
        selectedObj.style = obj.style;
        selectedObj.datas = obj.datas;
    }
}

function resetElement() {
    selectedObj.pageId = "";
    selectedObj.id = "";
    selectedObj.objType = "";
    selectedObj.style = {};
    selectedObj.datas = null;
    moveable.target = null;
}

function changeElementStyle(obj){
    if(currentPage.body.length > 0) {
        for(var i = 0; i < currentPage.body.length; i++) {
            if(currentPage.body[i].pageId === obj.pageId && currentPage.body[i].id === obj.id) {
                currentPage.body[i].style = obj.style;
                break;
            }
        }
    }
}

function changeElementData(obj){
    if(currentPage.body.length > 0) {
        for(var i = 0; i < currentPage.body.length; i++) {
            if(currentPage.body[i].pageId === obj.pageId && currentPage.body[i].id === obj.id) {
                currentPage.body[i].datas = obj.datas;
                break;
            }
        }
    }
}


function prevSlides(obj) {
    var imageSlider = $(obj).parent().parent().children('.image-container')
    var current = $(imageSlider).attr('current')
    current = parseInt(current)
    var length = $(imageSlider).children().length
    if(length > 0 && current > 0) {
        showSlide(imageSlider, current-1)
    }
}

function nextSlides(obj) {
    var imageSlider = $(obj).parent().parent().children('.image-container')
    var current = $(imageSlider).attr('current')
    current = parseInt(current)
    var length = $(imageSlider).children().length
    if(length > 0 && current+1 < length) {
        showSlide(imageSlider, current+1)
    }
}

function showSlide(slider, index) {
    var slides = $(slider).children()
    $(slides).addClass('hide')
    $(slides)[index].classList.remove('hide')
    $(slider).attr('current', index)
}