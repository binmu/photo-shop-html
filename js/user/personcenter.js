jQuery.Huitab = function (tabBar, tabCon, class_name, tabEvent, i) {
    var $tab_menu = $(tabBar);
    // 初始化操作
    $tab_menu.removeClass(class_name);
    $(tabBar).eq(i).addClass(class_name);
    $(tabCon).hide();
    $(tabCon).eq(i).show();

    $tab_menu.bind(tabEvent, function () {
        $tab_menu.removeClass(class_name);
        $(this).addClass(class_name);
        var index = $tab_menu.index(this);
        $(tabCon).hide();
        $(tabCon).eq(index).show()
    })
}

$(function () {
    $.Huitab("#tab_demo .tabBar span", "#tab_demo .tabCon", "current", "click", "1");
});
// #tab_demo 父级id
// #tab_demo .tabBar span 控制条
// #tab_demo .tabCon 内容区
// click 事件 点击切换，可以换成mousemove 移动鼠标切换
// 1	默认第2个tab为当前状态（从0开始）