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
       dots: false,
       responsiveClass:true,
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

/*Маска ввода телефона*/
$(function(){
    $("#callback_phone").mask("8 (999) 999-99-99");
    $("#feedback_phone").mask("8 (999) 999-99-99");
    $("#order_phone").mask("8 (999) 999-99-99");
    $("#order_phone2").mask("8 (999) 999-99-99");
});

/*Заказать звонок*/
$("#callback").click(function(){
    $(".callback_form").fadeIn(200);
});

$(".callback_close").click(function(){
    $(".callback_form").fadeOut(200);
});

/*Карточка товара, фотографии*/
$("[data-fancybox]").fancybox({
    loop: true
});

/*Оценка товара*/
$(function() {
    $('#rate').barrating({
        theme: 'css-stars'
    });
});

/*Удаление товара из корзины*/
$('.delete').click(function(){
    $(this).closest('tr').remove();
});
