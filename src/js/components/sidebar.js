$(document).ready(function() {
	/*=================
	Sidebar Tabs
	==================*/
	$(".tab_items").not(":first").hide();
	$(".sidebar .tab").click(function() {
		$(".sidebar .tab").removeClass("tab-active ").eq($(this).index()).addClass("tab-active");
		$(".tab_items").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("tab-active ");

	/*============================
	Main Components Menu Sidebar Acordion
	=============================*/
	// $("#leftside-navigation .sub-menu > a").click(function(e) {
	//   // event.preventDefault();
	//   $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
	//   e.stopPropagation()
	// })

	// $(".sidebar .accrodion-menu ul li a").on('click', function(event) {
	// 	event.preventDefault();
	// 	$(this).toggleClass("active");
	// 	// $(".accrodion-menu .menu-list .sub-menu").toggleClass('sub-menu_show-on');
	// 	$(this).next().toggleClass('sub-menu_show-on');
	// });
	// $(".sidebar .accrodion-menu ul li a").on('click', function(event) {
	//     event.preventDefault();
	// if (  $(this).next().length) {
	//     $(this).toggleClass("active");


	// $(this).next().toggleClass('sub-menu_show-on');

	// }
	$(".sidebar .accrodion-menu ul li a").on('click', function(event) {
    event.preventDefault();
		// if (
		// 	$(".accrodion-menu .menu-list .sub-menu").hasClass('sub-menu_show-on')) {

		// 	$(".sidebar .accrodion-menu ul li a").removeClass("active");
		// 	$(".accrodion-menu .menu-list .sub-menu").removeClass('sub-menu_show-on');


		// 	}


		if (  $(this).next().length) {
		    $(this).toggleClass("active");


		$(this).next().toggleClass('sub-menu_show-on');

		}
  	});

	$(window).resize(function(e){
      if(window.innerWidth < 1026) {
        $(".sub-menu__link").on('click', function(event) {
        event.preventDefault();


      if (  $(this).next().length) {
           $(this).toggleClass("active");


      $(this).next().toggleClass('sub-menu_show-on');

      }
      });

      }
  });

	// $(".sidebar #leftside-navigation ul ul li a").on('click', function(event) {
	// 	event.preventDefault();
	// 	$(".sidebar #leftside-navigation ul ul.hover-sub-menu").toggleClass('show-on');
	// });
	// $(".sidebar__switches").on("click", function() {
	// $(".tab_content").toggleClass('tab_content_show');
	// });
	$(".sidebar-catalog .menu-gamburger-sidebar").on("click", function() {
		$(".tab_content").toggleClass('tab_content_show');
	});
	$(".sidebar-catalog #nav-icon").click(function(){
		$(this).toggleClass('open');
		// $('body').toggleClass('overlay');
	});

});
