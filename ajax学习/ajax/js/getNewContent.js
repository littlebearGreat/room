function getNewContent() {
	var request = getHTTPObject();  /*赋值ajax方法，得到 XMLHttpRequest 对象*/
	if (request) {		/*如果支持ajax*/
		request.open("GET","example.txt",true);			/*请求方法：GET/POST/SEND; 文件路径：相对于HTML的路径*/
		request.onreadystatechange = function() {
			if (request.readyState == 4) {		/*request.readyState == 4 表示：服务器已经成功返回数据（请求完成）*/
				// var para = document.createElement("p");			/*这里面都是success后的回调*/
				// var txt = document.createTextNode(request.responseText);
				// para.appendChild(txt);
				// document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert('Sorry,your browser doesn\'t support XMLHttpRequest');
	}
}
addLoadEvent(getNewContent);		/*放在处理多个javascript的方法中加载*/

// Chrome浏览器必须在服务器环境下载能使用ajax   why? 查：同源策略