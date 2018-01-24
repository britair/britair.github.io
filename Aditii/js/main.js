/*Слайдер новостей*/
$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
       loop: true,
       nav: true,
       navText: [""],
       autoplay:true,
       autoplayTimeout:2000,
       lazyLoad: true,
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
