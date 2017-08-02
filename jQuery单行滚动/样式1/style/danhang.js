$(function(){
	setInterval(function(){
		$('.box>p').eq(0).slideUp(1000,function(){
			$('.box>p').eq(0).appendTo('.box').slideDown(0);
		});
	},2000);
})