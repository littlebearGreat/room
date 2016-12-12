window.onload = function(){
	$(document).on('click', '.open-preloader', function () {
    $.showPreloader();
    setTimeout(function () {
        $.hidePreloader();
    }, 500);
  });
  $(document).on('click','.open-preloader-title', function () {
    $.showPreloader('还是在加载')
    setTimeout(function () {
        $.hidePreloader();
    }, 2000);
  });
  $.init();
}