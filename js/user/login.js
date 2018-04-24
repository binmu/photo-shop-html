$(function() {
	// “登录”按钮单击事件
	$("#loginbtn").click(function() {
		// 获取用户账号
		var userAccount = $("#userAccount").val();
		// 获取输入密码
		var userPassword = $("#userPassword").val();
		// 开始发送数据
		$.ajax({
			url : "login",
			type : 'post',
			// 传送请求数据
			data : {
				userAccount : userAccount,
				userPassword : userPassword
			},
			success : function(data) { // 登录成功后返回的数据
				console.log(data);
				// 根据返回值进行状态显示
				if (data.repStates == "200") {
					window.location.href = "http://127.0.0.1:8088/index";
				} else {
					layer.msg("密码错误!!!");
				}
			}
		});
	});
	// 跳转到注册页面
	$("#toregister").click(function() {
		window.location.href = "showregister";
	});
});