let selectedCategoty = "";
$(".panel_setting_open").on("click", function (e) {
    var target = e.currentTarget.closest(".panel");
    $(target).toggleClass("active");
});

$(".scroll_box .panel.sub").hide();
$(".scroll_box .panel.sub").removeClass("active");

$(".panel.sub.sub1").show();
$(".panel.sub.sub1").addClass("active");

$(".panel_subtree.type_template .example_list .btn.example_subtree_open").on("click", function (e) {
    let target = e.currentTarget;
    let targetParent = $(target).closest("div.example_list");

    $(targetParent).toggleClass("active");
    $(target).toggleClass("active").toggleClass("on");

});

$(".btn.select_sub_tools").on("click", function (e) {

    let target = e.currentTarget;
    $(".btn.select_sub_tools").removeClass("on");
    $(target).addClass("on");
    let str = target.ariaLabel;
    if (selectedCategoty !== target.value) {
        selectedCategoty = target.value;
        $(".scroll_box .panel.sub").hide();
        $(".scroll_box .panel.sub").removeClass("active")
        switch (str) {
            case "기본 템플릿":
                $(".panel.sub.sub1").show();
                $(".panel.sub.sub1").addClass("active");
                break;
            case "컴포넌트":
                $(".panel.sub.sub2").show();
                $(".panel.sub.sub2").addClass("active");
                break;
            case "나만의 템플릿":
                $(".panel.sub.sub3").show();
                $(".panel.sub.sub3").addClass("active");
                break;
        }
    }
});

