/**
 * Ajax封装类
 * @constructor
 */
function RemoteService(){
	this.type="POST";
	this.async=true; 
	this.dataType="json";
	this.contentType="application/json;charset=utf-8";
};

/**
 * 异步提交
 * @param url
 * @param para
 * @param call_back
 */
RemoteService.prototype.call=function(url,para,call_back){
	var ro = this;
	if(para == undefined ){
		para= new Object();
	}
	$.ajax({
		type : ro.type,
		async : ro.async,
		url : url,
		data : $.toJSON(para),
		dataType : ro.dataType,
		contentType : ro.contentType,
		success : function(result) {
			if(call_back !=undefined && call_back!=null){
				call_back.call(this,result);
			}
			
		},
		error : function(data,textstatus) {
			layer.alert(data.responseJSON.msg,{icon:2}); 
			layer.title('加载错误');
		}
	});
};

/**
 * 同步提交
 * @param url
 * @param para
 * @param call_back
 */
RemoteService.prototype.syncCall=function(url,para,call_back){
	var ro = this;
	if(para == undefined ){
		para= new Object();
	}
	$.ajax({
		type : ro.type,
		async : false,
		url : url,
		data : $.toJSON(para),
		dataType : ro.dataType,
		contentType : ro.contentType,
		success : function(result) {
			if(call_back !=undefined && call_back!=null){
				call_back.call(this,result);
			}
			
		},
		error : function(data,textstatus) {
			layer.alert(data.responseText);
		}
	});
};

/**
 * form表单提交
 * @param url
 * @param formData
 * @param call_back
 */
RemoteService.prototype.postForm=function(url,formData,call_back){
	var ro = this;
	if(formData == undefined ){
		formData= new FormData();
	}
	var loading = new LoadingPop();
	loading.show();
	$.ajax({
		type : ro.type,
		async : ro.async,
		url : url,
		data : formData,
		dataType : ro.dataType,
		contentType :false,
		processData: false,//不转换参数格式
		success : function(result) {
			if(call_back !=undefined && call_back!=null){
				call_back.call(this,result);
			}
			
		},
		error : function(data,textstatus) {
			layer.alert(data.responseText);
		}
	});
};

var remote= new RemoteService();