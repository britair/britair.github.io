/*Слайдер*/
$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
       loop: true,
       nav: true,
       navText: [""],
       autoplay:true,
       autoplayTimeout:5000,
       autoplayHoverPause:true,
       smartSpeed:1000,
       items: 1,
       dots: false
    });
});

/*Мобильное меню*/
$(function () {
    'use strict';
    $('.menuToggle').on('click', function () {
        $('.header-menu ul').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
    });
});
