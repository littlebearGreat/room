function addLoadEvent(func) {
	var oldonload = window.onload;				/*定义oldonload = window.onload  把window.onload赋给oldonload*/
	if (typeof window.onload != "function") {	/*如果window.onload还是不是一个function，就是window.onload还没有指向一个function*/
		window.onload = func;					/*这时候，就让winidow.onload指向我们传进来的function*/
	}else{										/*否则，也就是window.onload已经指向了一个function,（再赋值的话会把前面的覆盖掉）*/
		window.onload = function(){				/*这时候，就让window.onload指向一个新函数*/
			oldload();							/*在这个函数里，我们执行原来window.onload指向的函数（oldonload）*/
			func();								/*再执行我们传进来的function*/
		}										/*这个方法就可以实现加载多个javascript的功能*/
	}
}

// 此函数是加载多个javascript的方法
