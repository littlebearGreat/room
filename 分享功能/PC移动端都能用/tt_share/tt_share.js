// share.js

/*获取当前js路径*/  
;  
!function() {  
    "use strict"; 
	function tt_getPath(){  
        var e = document.scripts,  
            t = e[e.length - 1],  
            i = t.src;  
        if (!t.getAttribute("merge")) return i.substring(0, i.lastIndexOf("/") + 1);  
    };
    window.tt_shareSignImg = tt_getPath();
}(window); 

// 判断是否是PC打开的
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
		];
	var flag = true;	/*true-PC端;false-移动端*/
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
};

// 判断是QQ还是微信还是其它浏览器
function is_weixn_qq(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return "weixin";
	} else if (ua.match(/QQ/i) == "qq") {
		return "QQ";
    }
	return false;
};

// PC端
function tt_sharePC(id,json){
	// 生成HTML
	var dom = document.getElementById(id);
	var domStr 	= '<div class="bdsharebuttonbox">'
				+ '<a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>'
				+ '<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>'
				+ '<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>'
				+ '<a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>'
				+ '<a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>'
				+ '<a href="#" class="bds_copy" data-cmd="copy" title="分享到复制网址"></a>'
				+ '<a href="#" class="bds_more" data-cmd="more"></a>'
				+ '</div>';

	dom.innerHTML = domStr;

	// 创建需要的参数对象
	var needData = {
		"common":{
			"bdSnsKey":{
				"tsina":"",
				"tqq":"",
				"t163":"",
				"tsohu":""
			},
			"bdText":"",
			"bdMini":"1",
			"bdMiniList":false,
			"bdPic":"",		/*分享附带的图片*/
			"bdStyle":"1",
			"bdSize":"24",
			"bdUrl":""		/*分享的地址*/
		},
		"share":{}
	};

	// 判断第二个参数-json
	function isJson(obj){  
	    return toString.call(obj) === '[object Object]';  
	};

	// json的格式:
	// var ddd = {
	// 			url:'分享的网址',
	// 			picUrl:'分享的附加图片的网址',
	// 			text:'分享的内容（标题）'
	// 		};

	// 判断第二个参数是否存在
	if (json) {
		// 如果存在
		if (isJson(json)) {
			// 如果是json格式
			var a = needData.common,
				b = a.bdSnsKey;
			for(k in b){
				b[k] = json.url;
			};

			a.bdPic = json.picUrl;
			a.bdText = json.text;
			a.bdUrl = json.url;

		}else{
			alert('请传入正确的json格式参数')
		};
	};

	window._bd_share_config = needData;
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
};

// 移动端
function tt_shareMobile(){
	if (is_weixn_qq()) {
		creatIframe();
	}else{
		alert('请点开浏览器的菜单找到分享按钮进行分享');
	}
};

// QQ或者微信创建提示框
function creatIframe(){
	var body = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.right = 0;
	div.style.top = 0;
	div.style.zIndex = 9999999;
	div.style.width = '100%';
	div.style.height = '100%';
	div.style.background = 'url(' + window.tt_shareSignImg + 'share.png) no-repeat';
	div.style.backgroundSize = '100% 100%';
	div.style.cursor = 'pointer';
	body.appendChild(div);
	div.onclick = function(){
		body.removeChild(div);
	};
};

// 页面分享接口
function tt_share(id,json){
	if (IsPC()) {
		tt_sharePC(id,json);
	}else{
		tt_shareMobile();
	}
};