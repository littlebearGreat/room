$(function(){
	function turnPic(imagesTag,signTag,previousTag,nextTag,boxTag,signHoverClass){
		// 定义当前显示的图片的序号
		var picI;
		// 初始化轮播图
		function init(){
			$(imagesTag).eq(0).show();
			$(signTag).eq(0).addClass(signHoverClass);
			picI = 0;
		};
		init();

		// 点击指示器切换
		$(signTag).click(function(){
			var n = $(this).index();
			picI = n;
			$(imagesTag).eq(n).fadeIn().siblings().fadeOut();
			$(this).addClass(signHoverClass).siblings().removeClass(signHoverClass);
		})

		// 点击左边按钮切换
		function previous(){
			if (picI == 0) {
				picI = $(signTag).length - 1;
			}else{
				picI --;
			};

			$(imagesTag).eq(picI).fadeIn().siblings().fadeOut();
			$(signTag).eq(picI).addClass(signHoverClass).siblings().removeClass(signHoverClass);
		};

		$(previousTag).click(function(){
			previous();
		});

		// 点击右边按钮切换
		function next(){
			if (picI == $(signTag).length - 1) {
				picI = 0;
			}else{
				picI ++;
			};

			$(imagesTag).eq(picI).fadeIn().siblings().fadeOut();
			$(signTag).eq(picI).addClass(signHoverClass).siblings().removeClass(signHoverClass);
		};

		$(nextTag).click(function(){
			next();
		});

		// 自动切换
		var bannerIv = setInterval(next,3000);
		$(boxTag).hover(function(){
			clearInterval(bannerIv);
		},function(){
			bannerIv = setInterval(next,3000);
		});

	};

	turnPic('.images li','.sign li','.banner .previous','.banner .next','.banner','active');

	/** 此轮播图为淡入淡出轮播（如若兼容IE8，请注意css中rgba的兼容性）
	 *	参数说明：
	 *	turnPic(imagesTag,signTag,previousTag,nextTag,boxTag,signHoverClass)
	 *	imagesTag		要轮播的图片的class
	 *	signTag			指示器的class
	 *	previousTag		后退按钮的class
	 *	nextTag 		前进按钮的class
	 *	boxTag 			整个轮播图box的class，用于鼠标移进去后停止自动轮播
	 *	signHoverClass	指示器高亮的class，用于给某个指示器添加此class，从而使得高亮
	 **/
})