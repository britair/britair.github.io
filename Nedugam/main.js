/*Слайдер новостей*/
$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
   items: 1,
   loop: true,
   dots: true,
   nav: false,
   navText: [""],
   responsiveClass:true,
   responsive:{
        600:{
            nav:true
        },
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
