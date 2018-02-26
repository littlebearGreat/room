
$(function(){
	//发送验证码
	$("#sendCode").click(function(){ //启用定时器
		var code = new timerFun("#sendCode");// 创建定时器对象 ,设置定时器显示位置
		code.startFun();//启用定时器
	})
})
//显示弹出框
function showBox(objId){
	$(".log-box").hide();
	$("#"+objId).show();
}
//注册成功弹出框
function regSuccessBox(objId){
	$(".log-box").hide();
	$("#"+objId).show();
	var num = 4;
	var count = new timeCount(objId,num);//定时器，用于倒计时
	count.startFun();
}




//关闭弹出框
function closeBox(objId){
	$("#"+objId).hide();
	$("#"+objId+" .input-box").each(function(){
		$(this).find("input").val("");//清空input文本输入框
		$(this).find(".error").text("");//清空错误提示
	})
}
function checkMobile(objId){ 
	var _this = $("#"+objId);
 	var mobile = _this.val().trim();//获取输入手机号码
 	if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile))){ 
  		_this.parent().find(".txt-pro").removeClass("tick").addClass("error").text("手机号码格式错误").show()
 	}else if((/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile))){
 		_this.parent().find(".txt-pro").removeClass("error").addClass("tick").text("").show();
 	}
} 
//登录用户校验
function loginCheck(){
	var result = true;
	$("#loginBox .input-box").each(function(){
		var _this = $(this);
		var txt = _this.find(".input").val().trim();
		var errorpro = _this.find(".txt-pro").hasClass("error");
		if(txt == "" ){
			var pro = _this.find(".input-name").text().trim()+"不能为空!"
			_this.find(".txt-pro").addClass("error").text(pro).show(); //错误内容提示
			result = false;
			return false;
		}else if(txt == undefined || txt == null || errorpro){
			var pro = _this.find(".input-name").text().trim()+"格式错误!"
			_this.find(".txt-pro").addClass("error").text(pro).show(); //错误内容提示
			result = false;
			return false;
		}
	})
	if(result){
		alert("登录成功")
	}
	return result;
}
//注册表单提交前校验
function registerCheck(){
	var result = true;
	$("#registerBox .input-box").each(function(){
		var _this = $(this);
		var txt = _this.find(".input").val().trim();
		var errorpro = _this.find(".txt-pro").hasClass("error");
		if(txt == undefined || txt == null || txt == "" || errorpro){
			var pro = _this.find(".input-name").text().trim()+"格式有误!"
			_this.find(".txt-pro").addClass("error").text(pro).show(); //错误内容提示
			result = false;
			return false;
		}
	})
	if(result){
		alert("注册成功")
	}
	return result;
}


/*定时器*/
var timerFun = function(obj){
	var timer; //设置定时器变量
	var times = 60; //定时器时间，默认从0开始
	//调用定时器
	this.startFun = function(){
		$(obj).attr("disabled", true); //设置按钮不可用
		timerStart();
	}
	//停止定时器
	this.stopFun = function(){
		timerEnd();
	}
	//开始定时器
	var timerStart = function(){
		times--; //时间自动加1;
		if(times>0){
			$(obj).val(times+"秒后重新发送验证码");//修改定时器显示内容
			timer = setTimeout(function(){
				timerStart();//执行开始定时器方法
			},1000);
		}else{
			timerEnd();
			$(obj).attr("disabled", false); //设置按钮可用
			$(obj).val("重新发送验证码");//修改定时器显示内容
		}
	}
	
	//结束定时器
	var timerEnd= function(){
		clearTimeout(timer); //清除定时器
		
	}
}

var timeCount = function(obj,num){
	var timer; //设置定时器变量
	var times = num; //定时器时间，默认从0开始
	//调用定时器
	this.startFun = function(){
		timerStart();
	}
	//停止定时器
	this.stopFun = function(){
		timerEnd();
	}
	//开始定时器
	var timerStart = function(){
		times--; //时间自动加1;
		if(times>0){
			$("#"+obj+" .num").text(times);//修改定时器显示内容
			timer = setTimeout(function(){
				timerStart();//执行开始定时器方法
			},1000);
		}else{
			timerEnd();
			$("#"+obj).hide();//隐藏弹出框
		}
	}
	
	//结束定时器
	var timerEnd= function(){
		clearTimeout(timer); //清除定时器
	}
}