window.onload = function (){
	var oBox = document.getElementById('box');
	var body = document.getElementById('body');

	// 思路：方块移动的距离就是鼠标移动的距离；这里要注意获取到的方块的距离
	//      是带px单位的，用数组把单位去掉，再获取数组里的元素，获取到的是字符串，
	//      不能直接相加，否则加号的作用就是字符串的连接。
	// 第二种思路：
	// 		可以先获取方块左上角距离鼠标点击位置的距离m，那么移动后方块的位置
	// 		就是鼠标的位置减去m（因为方块左上角的位置始终比鼠标的位置少m）；


	

	oBox.onmousedown = function(ev){
		// 解决兼容性：如果接收到的是ev，那说明就是火狐浏览器，就让event = ev，
		// 否则的话就不是火狐浏览器，event = event；
		// 下面两种方法：三目运算符，“或”的判断

		// var event = ev ? ev : event;
		var event = ev || event;

		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		var iW = event.clientX - oBox.offsetLeft;
		var iT = event.clientY - oBox.offsetTop;
		document.onmousemove = function(ev){
			// console.log(width)
			// var event = ev ? ev : event;
			var event = ev || event;
			var bLeft = event.clientX - iW;
			var bTop = event.clientY - iT;
			if (bLeft > (width - oBox.offsetWidth - 50)){
				oBox.style.left = width - oBox.offsetWidth + 'px';
			} else if (bLeft < 50) {
				oBox.style.left = '0px';
			} else{
				oBox.style.left = bLeft + 'px';
			}
			if (bTop > (height - oBox.offsetHeight - 50)) {
				 oBox.style.top = height - oBox.offsetHeight + 'px';
			} else if (bTop < 50) {
				oBox.style.top = '0px';
			} else{
				oBox.style.top = bTop + 'px';
			}
		}

		// 鼠标松开的时候要停止这两个函数
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}