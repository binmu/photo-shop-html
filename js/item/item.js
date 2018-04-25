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
    //选项卡
    $.Huitab("#tab_demo .tabBar span", "#tab_demo .tabCon", "current", "click", "0");


    //库存
    var stockQuantity = $("#stockQuantity")[0].innerText;
    //数量
    var itemNum = $("#itemNum").val();
    //增加数量
    $("#numadd").click(function () {
        if (itemNum > stockQuantity) {
            layer.msg("库存不足！");
            return false;
        } else {
            itemNum = itemNum + 1;
            $("#itemNum").val(itemNum);
        }
    });

    //减少数量
    $("#numdel").click(function () {
        if (itemNum > 1) {
            itemNum = itemNum - 1;
        } else {
            //默认数量为1
            itemNum = 1;
        }
        $("#itemNum").val(itemNum);
    });

    //加入购物车
    $("#addCart").click(function () {
        window.location.href="cart/showcart";
    });

});