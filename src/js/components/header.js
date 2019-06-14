$(document).ready(function(){
	/*========================
	 fixed header
	 =======================*/
	$(window).scroll(function() {
		if($(this).scrollTop()) {
		$('.bottom-header').addClass('bottom-header_fixed');
		// $('.card-box').addClass('card-box_fixed');
		// $('.logo-link').addClass('logo-link_fixed');
	}
	else{
		$('.bottom-header').removeClass('bottom-header_fixed');
		// $('.card-box').removeClass('card-box_fixed');
		// $('.logo-link').removeClass('logo-link_fixed');
		}
	});

		/*========================
	mob nav
	=========================*/
	$(".nav .menu-gamburger").on("click", function() {
		$(".page-nav-mob").toggleClass('page-nav-mob_show');
	});
	$(".nav #nav-icon").click(function(){
		$(this).toggleClass('open');
		// $('body').toggleClass('overlay');
	});

});
	
