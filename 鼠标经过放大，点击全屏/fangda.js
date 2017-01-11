$(function(){
	// 要改变放大倍数：改变scale括号中的值即可；
	// 改变动画时间：改变0.5s的数值即可
	$('.img').mouseover(function(){
		$('.img').css({transform: 'scale(1.2)',transition: 'all 0.5s'});
	}).mouseout(function(){
		$('.img').css({transform: 'scale(1)',transition: 'all 0.5s'});
	})

	// 点击全屏
	$('.img').click(function(){
		$('.big').fadeIn(200);
		$('.big img').attr('src','1.jpg');
	})
	$('.close').click(function(){
		$('.big').fadeOut(200);
	})
})