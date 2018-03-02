/*jslint browser: true*/
/*global $, jQuery, alert*/

/*Мобильное меню*/
$(function () {
    'use strict';
    $('.menuToggle').on('click', function () {
        $('.menuMobile').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
        $('.menuToggle').toggleClass('close');
	});
});


/*Слайдер*/
$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
       loop: true,
       nav: false,
       autoplay:true,
       autoplayTimeout:4000,
       autoplayHoverPause:true,
       smartSpeed:1000,
       items: 1,
       dots: true,
       dotsData: true,
       dotsContainer: '#customDots',
       responsiveClass:true
    });
});