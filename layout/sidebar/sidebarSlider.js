var fileAction = '';
var choosedFile = null;

$(function () {
    if(selectedObj) {
        changeSidebarElement()
    }
});

$(".panel_setting_open").on("click", function (e) {
    var target = e.currentTarget.closest(".panel");
    $(target).toggleClass("active");
});

$("input[name='fileChooser']").on('change', function () {
    if(this.files && this.files.length > 0) {
        choosedFile = this.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            var result = event.target.result;
            if(fileAction === "insert"){
                insertImage(result)
            }
            else {
                var length = $('#imageList').children().length
                if(length === 1) {
                    insertImage(result)
                }
                else {
                    updateImage(result)
                }
            }
        };
        reader.readAsDataURL(choosedFile);
    }
})

function onActiveSlide(obj) {
    $('#imageList .slide').removeClass('active')
    $(obj).addClass('active')
}

function onAddImage(){
    fileAction = "insert"
    $("input[name='fileChooser']").click()
}

function onChangeImage(){
    fileAction = "change"
    $("input[name='fileChooser']").click()
}

function getImgListItem(url, length) {
    return "<li data='new'><div class='btn box slide "+(length === 1 ? 'active' : '')+"' onclick='onActiveSlide($(this))'>"+
    "<img class='img_slide' src='"+url+"' alt='이미지'>"+
    "<span role='button' class='btn img_delete' aria-label='삭제' onclick='removeImage($(this))'><i class='svg_icon_imgdel'></i><span class='blind'>삭제</span>"+
    "</span></div></li>";
}

function insertImage(result) {
    var imgList = $('#imageList')
    var item = getImgListItem(result, imgList.children().length);
    $(imgList).append(item)
    $("input[name='fileChooserName']").val(choosedFile.name)

    var slider = $('#'+selectedObj.id+' .image-container')
    var slideItem = '<div class="slide '+(slider.children().length > 0 ? 'hide' : '')+'"> <img src="'+result+'"></div>';
    $(slider).append(slideItem);

    if(selectedObj.datas) {
        selectedObj.datas.push({
            ord: selectedObj.datas.length+1,
            img: choosedFile,
        })
    }
    else {
        selectedObj.datas = [{
            ord: selectedObj.datas.length+1,
            img: choosedFile,
        }]
    }
    changeElementData(selectedObj)
}

function updateImage(result) {
    var index = $('#imageList .active').parent().index()
    var img = $('#imageList .active').children('img')
    img.attr('src', result)
    $("input[name='fileChooserName']").val(choosedFile.name)

    var slider = $('#'+selectedObj.id+' .image-container')
    slider.children().eq(index-1).children('img').attr('src', result)

    if(selectedObj.datas.length > index-1) {
        selectedObj.datas[index-1].img = choosedFile
        changeElementData(selectedObj)
    }
}

function removeImage(obj) {
    var li = $(obj).parent().parent()
    var index = li.index()
    $('#imageList').children().eq(index).remove();
    var slider = $('#'+selectedObj.id+' .image-container')
    slider.children().eq(index-1).remove();
    var current = slider.attr('current')
    if(current >= index-1) {
        slider.attr('current', current-1)
    }

    if(selectedObj.datas.length > index-1) {
        selectedObj.datas.splice(index-1, 1);
        changeElementData(selectedObj)
    }
}

function changeSidebarElement() {
    choosedFile = null;
    var left = selectedObj.style.left ? selectedObj.style.left : 0
    var top = selectedObj.style.top ? selectedObj.style.top : 0
    var width = selectedObj.style.width ? selectedObj.style.width : 0
    var height = selectedObj.style.height ? selectedObj.style.height : 0
    
    $("input[name='left']").val(left)
    $("input[name='top']").val(top)
    $("input[name='width']").val(width)
    $("input[name='height']").val(height)

    var children = $('#imageList').children('li[data="new"]')
    $(children).remove();

    if(selectedObj.datas &&  selectedObj.datas.length > 0) {
        var imgList = $('#imageList')
        var length = imgList.children().length
        for(var i = 0; i < selectedObj.datas.length; i++){
            if(selectedObj.datas[i].img){
                if(selectedObj.datas[i].img instanceof File){
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        var result = event.target.result;
                        var item = getImgListItem(result, length);
                        $(imgList).append(item)
                    };
                    reader.readAsDataURL(selectedObj.datas[i].img);
                }
                else {
                    var item = getImgListItem(selectedObj.datas[i], length);
                    $(imgList).append(item)
                }
            }
        }
    }
}
