$(function(){
	var attr = [0.3,0.7,0.4];
	$('#chart').highcharts({
			title:{ text: '' },
			credits:{ enabled:false }, // 禁用版权信息
			labels:{
				style:{ color:"#ff0000"},
				items:[{ /*根据情况显示类型文字及其位置*/
					html:attr[2]<0.1? '': (attr[0]<0.1? '' : '练习型'),
					style: { left: (attr[0] - 0.1)*160+'px', top: '260px'}
				},{
					html:attr[2]<0.1? '': ((attr[1] - attr[0]) < 0.01 ? '' : '混合型'),
					style: { left: (attr[0] + attr[1] - 0.1)*160 + 'px',top: '260px'}
				},{
					html:attr[2]<0.1? '': (attr[1]<1? '讲授型' : ''),
					style: { left: (attr[1] + 0.9)*160 + 'px',top: '260px'}
				},{
					html:attr[2]<1? '讲授型' : '',
					style: { left: '140px',top: (1 - attr[2])*135 + 'px'}
				}]
			},
			
	        xAxis: {
	        	title:{text:'Rt'},
	            gridLineWidth: 0,
	            min: 0,
	            max: 1,
	            tickInterval: 1,
	            lineColor: 'black',
	            tickLength: 50
	        },
	        yAxis: {
	        	title:{text:'Ch'},
	            gridLineWidth: 0,
	            min: 0,
	            max: 1,
	            lineWidth: 1,
	            lineColor: 'black',
				opposite: false,
				tickWidth: 1
	        },
	    	
	    	/*图表中做出的线条*/
	        series: [{
	            data: [[0, 0],[0, 0]],
				showInLegend: false
	        }]
	    });
})