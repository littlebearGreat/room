$(function(){
	(function () {
            var b = document.documentElement,
            a = function () {
                var a = b.getBoundingClientRect().width;
                b.style.fontSize = (a/1080) * 100 + "px"
            }, c = null;
            window.addEventListener("resize", function () {
                clearTimeout(c);
                c = setTimeout(a, 300)
            });
            a()
        })();
	// 添加分类
	$('.iconfont').hide();
	$('.btn').click(function(){
		var newLi = document.createElement('li');
		var num = $('.category li').length;
		newLi.innerHTML = $('.ipt').val();
		if (num < 3) {
			$('.iconfont').hide();
			$('.category').append(newLi);	
		}else{
			$('.iconfont').show();
			$('.more').append(newLi);
		}
		$('.ipt').val('');
	})
	// 点击展开收起
	var ico = document.getElementById('ico');
	ico.index = 'down';
	$('.iconfont').click(function(){
		if (ico.index == 'down') {
			$('.more-box').slideDown();
			ico.innerHTML = '&#xe6a5;';
			ico.index = 'up';
		}else{
			$('.more-box').slideUp();
			ico.innerHTML = '&#xe6a6;';
			ico.index = 'down';
		}
	})
})