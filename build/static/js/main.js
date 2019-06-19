$(document).ready(function () {
    svg4everybody({});

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

	/*=================
	Sidebar Tabs
	==================*/
	$(".tab_items").not(":first").hide();
	$(".sidebar .tab").click(function() {
		$(".sidebar .tab").removeClass("tab-active ").eq($(this).index()).addClass("tab-active");
		$(".tab_items").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("tab-active ");

	/*====================================
	Main Components Menu Sidebar Acordion
	======================================*/
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

	/*====================================
	Slider Page Index
	======================================*/
	$('.home-slider').slick({
	  dots: false,
	  arrow: true,
	  // nextArrow: '<svg class="slider-svg-ico slider-svg-ico__right svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>',
	  nextArrow: '<svg class="slider-svg-ico slider-svg-ico__right svg-inline--fa fa-chevron-right fa-w-8" aria-hidden="true" data-fa-processed="" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>',
	  // nextArrow: '<i class="slider-ico slider-ico__right fa fa-angle-right" aria-hidden="true"></i>',
	  // prevArrow: '<svg class="slider-svg-ico slider-svg-ico__left svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>',
	  prevArrow: '<svg class="slider-svg-ico slider-svg-ico__left svg-inline--fa fa-chevron-left fa-w-8" aria-hidden="true" data-fa-processed="" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>',
	  // prevArrow: '<i class="slider-ico slider-ico__left fa fa fa-angle-left" aria-hidden="true"></i>',
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});

	/*====================================
	fancybox
	======================================*/
	$('.fancybox').fancybox({ 
	  animationEffect : 'fade'
	}).attr('data-fancybox', 'group1');

	/*====================================
	Слайдер в карточке товара
	======================================*/
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  // centerMode: true,
	  focusOnSelect: true
	});
	
	/*====================================
	Рейтинг звезд в карточке товара
	======================================*/
	var stars = $(".star__item");
	var starsActive;
	var starsSelect;
	  
	stars.hover(function(el) {
	  starsActive = stars.slice(0, $(this).index()+1);
	  starsActive.addClass("star__item_active");
	},
	function(){
	  stars.removeClass("star__item_active");
	});

	stars.on("click", function() {
	  stars.removeClass("star__item_select");
	  starsActive.addClass("star__item_select");
	  starsSelect = starsActive;
	});

	$('.item-card-carousel').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  // autoplay: true,
	  // autoplaySpeed: 2000,
	  dots: true,
	  arrows: true,
	  // nextArrow: '<svg class="slider-svg-ico slider-svg-ico__right svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>',
	  nextArrow: '<svg class="slider-svg-ico slider-svg-ico__right svg-inline--fa fa-chevron-right fa-w-8" aria-hidden="true" data-fa-processed="" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>',
	  // nextArrow: '<i class="slider-ico slider-ico__right fa fa-angle-right" aria-hidden="true"></i>',
	  // prevArrow: '<svg class="slider-svg-ico slider-svg-ico__left svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>',
	  prevArrow: '<svg class="slider-svg-ico slider-svg-ico__left svg-inline--fa fa-chevron-left fa-w-8" aria-hidden="true" data-fa-processed="" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>',
	  // prevArrow: '<i class="slider-ico slider-ico__left fa fa fa-angle-left" aria-hidden="true"></i>',
	  // infinite: true,

	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        // centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        // centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});
