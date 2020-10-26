$(document).ready(function(){
	var scrolled;
	var lastPos = 0;
	var threshold = 0;
	var head_ht = $('.header').outerHeight();

	$(window).scroll(function(){
		scrolled = true;
		if($(document).scrollTop() > head_ht) {
			$('body').addClass('sticky');
		}
		else {
			$('body').removeClass('sticky');
		}
	});

	setInterval(function(){
		if(scrolled) {
			scr_fun();
			scrolled = false;
		}
	}, 200);

	function scr_fun() {
		var top = $(this).scrollTop();
		var win_height = $(window).height();
		var doc_height = $(document).height();
		//if(Math.abs(lastPos - top) <= threshold) 

		if(top > lastPos && top > head_ht) {
			$('.header').removeClass('h-down').addClass('h-up');
		}
		else {
			if(top + win_height < doc_height) {
				$('.header').removeClass('h-up').addClass('h-down');
			}
		}

		lastPos = top;

	}

});

  // scroll sticky header 
	// 	$(window).on('scroll', function () {
	// 		var scroll = $(window).scrollTop();
	// 		if (scroll < 200) {
	// 				$(".fixed-bar").removeClass("sticky");
	// 		} else {
	// 				$(".fixed-bar").addClass("sticky");
	// 		}
	// });