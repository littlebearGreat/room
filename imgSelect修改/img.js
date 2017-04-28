$(function(){
	$('.box').imgAreaSelect({
		handles:true,
		onSelectEnd:function(img,selection){
			console.log('width:' + selection.width + ';height:' + selection.height);
			console.log('坐标是:' + '(' + selection.x1 + ',' + selection.y1 + ')');
			console.log('坐标是:' + '(' + selection.x2 + ',' + selection.y2 + ')');
		}
	})
})