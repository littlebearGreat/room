function getHTTPObject() {
	if (typeof XMLHttpRequest == "undefined") {  /*IE浏览器*/
		try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
			catch(e) {}
		try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
			catch (e) {}
		try {return new ActiveXObject("Msxml2.XMLHTTP");}
			catch (e) {}
		return false;
	}
	return new XMLHttpRequest();  /*非IE浏览器*/
}

// 原生的javascript ajax请求
// IE基于 ActiveXObject 对象
// 其他浏览器基于 XMLHttpRequest 对象
// IE版本不同，基于的 ActiveXObject 对象也不同，所以上面的函数中尝试三种方法去创建 ActiveXObject 对象