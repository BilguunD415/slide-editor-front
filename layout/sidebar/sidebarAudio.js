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
            changeAudio(event.target.result)
            
            // var result = event.target.result; // do some thing with data
            // $("input[name='fileChooserName']").val(choosedFile.name)
            // selectedObj.datas = {
            //     audioName: choosedFile.name,
            //     audio: choosedFile,
            // }
            // changeElementData(selectedObj)

            // return function (e) { // return handler function for 'onload' event
            //     var audio = $('#'+selectedObj.id).find('audio')
            //     $(audio).attr('src', result)
            //     var audioTag = document.querySelectorAll("[audio='"+selectedObj.id+"']");
            //     if(audioTag && audioTag.length > 0) {
            //         audioTag[0].load()
            //         // audioTag[0].play()
            //     }
                
            // }
        };
        reader.readAsDataURL(choosedFile);
    }
})

function onChangeAudio(){
    $("input[name='fileChooser']").click()
}

function changeAudio(result) {
    var audio = $('#'+selectedObj.id).find('audio')
    $(audio).attr('src', result)
    var audioTag = document.querySelectorAll("[audio='"+selectedObj.id+"']");
    if(audioTag && audioTag.length > 0) {
        audioTag[0].load()
        // audioTag[0].play()
    }
    $("input[name='fileChooserName']").val(choosedFile.name)

    selectedObj.datas = {
        audioName: choosedFile.name,
        audio: choosedFile,
    }
    changeElementData(selectedObj)
}

function changeSidebarElement() {
    choosedFile = null;
    var left = selectedObj.style.left ? selectedObj.style.left : 0
    var top = selectedObj.style.top ? selectedObj.style.top : 0
    var width = selectedObj.style.width ? selectedObj.style.width : 0
    var height = selectedObj.style.height ? selectedObj.style.height : 0
    var audioName = selectedObj.datas && selectedObj.datas.audioName ? selectedObj.datas.audioName : ""

    $("input[name='left']").val(left)
    $("input[name='top']").val(top)
    $("input[name='width']").val(width)
    $("input[name='height']").val(height)

    $("input[name='fileChooserName']").val(audioName)
}
