$(function(){
	setInterval(function(){
		$('.cont').animate({top:-40},1000,function(){
			$('.cont>li').eq(0).appendTo('.cont');
			$('.cont').css('top',0);
		});
	},2000)
})