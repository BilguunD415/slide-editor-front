$(".panel_setting_open").on("click", function (e) {
    var target = e.currentTarget.closest(".panel");
    $(target).toggleClass("active");
});
$(".panel_subtree.type_template .example_list .btn.example_subtree_open").on("click", function (e) {
    let target = e.currentTarget;
    let targetParent = $(target).closest("div.example_list");

    $(targetParent).toggleClass("active");
    $(target).toggleClass("active").toggleClass("on");

});