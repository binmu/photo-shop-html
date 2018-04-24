$(function () {

    //用户名正则，4到16位（字母，数字，下划线，减号）
    var uPattern = /^[a-zA-Z0-9_-]{6,16}$/;

    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

    //Email正则
    var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //手机号正则
    var mPattern = /^[1][3][0-9]{9}$/;

    /**
     * 1.验证用户账号格式是否正确
     * 2.验证账号是否唯一
     */
    $("#userAccount").change(function () {
        var userAccount = $(this).val();
        if(isEmpty(userAccount)){
            var spannn = $("#accErr")[0].innerText;
            if(isEmpty(spannn)){
                return false;
            }else {
                $("#accErr").remove();
            }
            return;
        }
        var strrr;
        if(uPattern.test(userAccount)){
            $.ajax({
                data: {userAccount: userAccount},
                success: function (data) {
                    //根据返回值进行状态显示
                    if (data.repStates == "200") {
                        return;
                    }
                    else {
                        strrr = data.repMessage;
                    }
                }
            });
        }else{
            var strrr = "账号格式错误，请使用6到16位（字母，数字，下划线，减号）";
        }
        addErr("accErr",strrr);
    });

    /**
     * 验证用户密码格式是否正确
     */
    $("#userPassword").change(function () {
        var userPassword = $(this).val();
        if(isEmpty(userPassword)){
            return;
        }
        if(pPattern.test(userPassword)){
            return;
        }else{
            var strrr = "最少6位，包括字母数字特殊字符";
            addErr("pwdErr",strrr);
        }
    });

    /**
     * 验证第二次密码是否等于第一次
     */
    $("#againpwd").change(function () {
        var againpwd = $(this).val();
        var userPassword =  $("#userPassword").val();
        var strrr;
        if(isEmpty(againpwd)){
            return;
        }else{
            if(againpwd==userPassword){
                return;
            }else{
                strrr="前后两次密码不符！"
            }
        }
        addErr("agaPwdErr",strrr);
    });

    /**
     * 手机号码格式验证
     */
    $("#userPhone").change(function () {
        var userPhone = $(this).val();
        var strrr;
        if(isEmpty(userPhone)){
            return;
        }
        if(mPattern.test(userPhone)){
            return;
        }else{
            strrr="手机号码格式不正确！";
        }
        addErr("phoneErr",strrr);
    });

    /**
     * 邮箱格式验证
     */
    $("#userEmail").change(function () {
        var userEmail = $(this).val();
        var strrr;
        if(isEmpty(userEmail)){
            return;
        }
        if(ePattern.test(userEmail)){
            return;
        }else{
            strrr="邮箱格式不正确！";
        }
        addErr("emailErr",strrr);
    });


    $("#regbtn").click(function () {
        var user;

        var userAccount = $("#userAccount").val();
        if(isEmpty(userAccount)){
            layer.msg("用户账号不能为空！");
            return fase;
        }
        var userPassword = $("#userPassword").val();
        if(isEmpty(userPassword)){
            layer.msg("密码不能为空！");
            return fase;
        }
        var userPhone = $("#userPhone").val();
        if(isEmpty(userPhone)){
            layer.msg("手机号码不能为空！");
            return fase;
        }
        var userEmail = $("#userEmail").val();
        if(isEmpty(userEmail)){
            layer.msg("邮箱地址不能为空！");
            return fase;
        }
        user = {
            userAccount :userAccount,
            userPassword :userPassword,
            userPhone :userPhone,
            userEmail :userEmail
        }
        $.ajax({
            type: "POST",   //提交的方法
            url:"/register", //提交的地址
            data:user,
            async: false,
            success: function(data) {
                if(data.repStates == "200"){
                    window.location.href="showlogin";
                }
            }
        });
    });
});


function addErr(errId,message) {
    var temp = errId;
    var temp2 = message;
    var $span = '<span>'+temp2+'</span>';
    $("#"+temp).append($span);
}

//判断字符是否为空的方法
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}