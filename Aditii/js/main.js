/*Слайдер новостей*/
$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
       loop: true,
       nav: true,
       navText: [""],
       autoplay:true,
       autoplayTimeout:2000,
       autoplayHoverPause:true,
       smartSpeed:1000,
       responsive:{ 
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
    });
});
 
 
/*Кнопка Меню*/
	$(function() {
			$('.menuToggle').on('click', function() {
			$('#menu').slideToggle(300, function() {
			if($(this).css('display') === 'none') {
				$(this) .removeAttr('style');
			}	
		});
	});
});		

