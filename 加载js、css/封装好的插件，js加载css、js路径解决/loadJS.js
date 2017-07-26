/*加载js/css  */
;
!function() {
	"use strict";
	var TT = {
		getPath:function(){
			var e = document.scripts,
				t = e[e.length - 1],
				i = t.src;
			if (!t.getAttribute("merge")) return i.substring(0, i.lastIndexOf("/") + 1);
		}(),
		head:function(){
			var head = document.getElementsByTagName('head')[0];
			return head;
		}(),
		adLink:function(link){
			if (TT.getPath) {
				for (var i = 0; i < link.length; i++) {
					var l = document.createElement("link");
					l.rel = "stylesheet";
					l.href = TT.getPath + link[i];
					TT.head.appendChild(l);
				};
			};
		},
		adScript:function(src){
			if (TT.getPath) {
				for (var i = 0; i < src.length; i++) {
					src[i]
					var s = document.createElement("script");
					s.src = TT.getPath + src[i];
					TT.head.appendChild(s);
				};
			};
		}
	};

	// 把要加载的css相对于此js脚本的路径写在link数组中
	// 把要加载的js相对于此js脚本的路径写在src数组中
	var link = ['../../other/css/cs.css'];
	var src  = ['../../other/js1.js','../../other/js2.js'];

	TT.adLink(link);
	TT.adScript(src);
}(window);
