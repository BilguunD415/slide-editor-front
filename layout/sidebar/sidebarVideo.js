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
            changeVideo(event.target.result)
        };
        reader.readAsDataURL(choosedFile);
    }
})

function onChangeVideo(){
    $("input[name='fileChooser']").click()
}

function changeVideo(result) {
    var source = $('#'+selectedObj.id).find('source')
    $(source).attr('src', result)
    var videoTag = document.querySelectorAll("[video='"+selectedObj.id+"']");
    if(videoTag && videoTag.length > 0) {
        videoTag[0].load()
    }
    $("input[name='fileChooserName']").val(choosedFile.name)

    selectedObj.datas = {
        videoName: choosedFile.name,
        video: choosedFile,
    }
    changeElementData(selectedObj)
}

function changeSidebarElement() {
    choosedFile = null;
    var left = selectedObj.style.left ? selectedObj.style.left : 0
    var top = selectedObj.style.top ? selectedObj.style.top : 0
    var width = selectedObj.style.width ? selectedObj.style.width : 0
    var height = selectedObj.style.height ? selectedObj.style.height : 0
    var videoName = selectedObj.datas && selectedObj.datas.videoName ? selectedObj.datas.videoName : ""

    $("input[name='left']").val(left)
    $("input[name='top']").val(top)
    $("input[name='width']").val(width)
    $("input[name='height']").val(height)

    $("input[name='fileChooserName']").val(videoName)
}
