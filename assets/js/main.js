(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	/* Maninmenu bar adding Start*/
		    	$(".toggle-icon").on("click",function(){
		    $(".toggle-menubar").addClass("done");
		});
		    	$(".close-btn").on("click",function(){
		    $(".toggle-menubar").removeClass("done");
		});
    	/* Maninmenu bar adding End*/

        	/*jquery Barfiller Start */
			   
			    $('#bar1').barfiller();
			    $('#bar2').barfiller();
			    $('#bar3').barfiller();
			
			       
			/*jQuery Barfiller End Here*/

			/*===========Counter up Section start===========*/
			$('.counter').counterUp({
				    delay: 10,
				    time: 1000
				});
			/*===========Counter up Section End===========*/

			/* Isotope Start Here*/
		var $grid=$('.grids').isotope({
				  // options
				  itemSelector: '.grid-item'
				 
				});

				$('.product_title').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});

			/* Isotope End Here*/

			/*owl Carusel Start*/

			 $('.testimonial-list').owlCarousel({
			 	items:1,
			 	loop:true,
			 	dots:true,
			 	autoplay:true
			 });
			/*owl carousel End*/

			/*company log section-Star*/
			 $('.our-partner-list').owlCarousel({
			 	items:4,
			 	loop:true,
			 	dots:false,
			 	autoplay:true,
			 	nav:true
			 });
			/*company log section-End*/

			/*Animated Css Start here*/
				
			$(".slider-content h4").addClass("wow slideInLeft");
			$(".slider-content h2").addClass("wow slideInRight");
			$(".social-icons").addClass("wow flip");
			$(".item-title").addClass("wow fadeInUp");
			$(".single-bar-item").addClass("wow fadeInLeft");
			$(".about-myslef").addClass("wow fadeInUp");
			$(".myhero-item").addClass("wow flip");
			$(".feature-item").addClass("wow fadeInUp");
			$(".feature-content").addClass("wow slideInLeft");
			$(".section-title").addClass("wow fadeInUp");
			$(".single-testimonial-item").addClass("wow bounceIn");
			$(".our-partner-log").addClass("wow fadeInDown");
			$("#full_name").addClass("wow slideInLeft");
			$("#email").addClass("wow slideInRight");
			$("#phone").addClass("wow fadeInDown");
			$("#mesage").addClass("wow slideInUp");
				/*===============wow js Start================*/
				var wow = new WOW(
				  {
				    boxClass:     'wow',  
				    animateClass: 'animated',
				    offset:       0,         
				    mobile:       true,      
				    live:         true,       
				    callback:     function(box) {
				     
				      
				    },
				    scrollContainer: null,
				    resetAnimation: true,    
				  }
				);
				wow.init();
				/*===============wow js End================*/
				
				/*Scroller js Start Here*/
					$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',   
        scrollDistance: 300,       
        scrollFrom: 'top',      
        scrollSpeed: 300,          
        easingType: 'linear',        
        animation: 'fade',          
        animationSpeed: 200,       
        scrollTrigger: false,      
        scrollTarget: false,         
        scrollText: '<i class="fa fa-angle-up"></i>', 
        scrollTitle: false,          
        scrollImg: false,            
        activeOverlay: false,        
        zIndex: 2147483647       
    });
});
				/*Scroller js End Here*/
		/*Preloader js Start here*/
		 var Body = $('body');
		Body.addClass('preloader-site');
		/*Preloader js End Here*/
				
				


    });


    jQuery(window).load(function(){
    	 $('.preloader-wrapper').fadeOut();
	$('body').removeClass('preloader-site');

        
    });


}(jQuery));	