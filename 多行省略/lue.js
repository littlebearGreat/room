$(function(){
	function fierceEllipsis(className,n){
		var span = $(className);
		var txt = span.text();
		span.text('');
		var minH = span.height();
		var m = 0;
		for (var i = 1; i < txt.length; i++) {
			var t = txt.substring(0,i);
			span.text(t);
			var nowH = span.height();
			if (nowH != minH && m < n) {
				minH = nowH;
				m++;
			}else if (nowH != minH && m >= n) {
				t = txt.substring(0,i-2) + ' ...';
				span.text(t);
				break;
			}
		}
	}

	fierceEllipsis('.p',2);

	/**
	 *使用方法：
	 * 1. 依赖于jQuery，可以自己改成原生的
	 * 2. 调用函数fierceEllipsis(className,n)
	 * 3. 传入两个值：
	 *				第一个值：要设置标签的class名（支持标签：p、span，，，，其它的自己去测试）
	 *				第二个值：该标签下一共要显示的行数，数字格式
	 * 4. 每设置一处地方就要调用一次 fierceEllipsis函数，
	 *    为什么这样做？因为有可能所有要设置的地方要显示的行数不都是一样的
	 */
})