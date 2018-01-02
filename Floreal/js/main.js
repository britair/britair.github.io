/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    jQuery.fx.speeds.fast = 10;
});

$(document).click( function(event){
	if( $(event.target).closest("#search_open").length ) 
	return;
	$("#search_open").slideUp("fast");
    $(".header .menu").slideDown("fast");
    $("#search").slideDown("fast");
	event.stopPropagation();
});

$('#search').click( function() {
    $(this).siblings("#search_open").slideToggle("fast");
    $(this).siblings(".menu").slideToggle("fast");
    $(this).slideToggle();
    return false;
});

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

/*Мобильное подменю - Поштучно*/
$(function () {
    'use strict';
    $('.title_sub_menu').on('click', function () {
        $('.sub_menu').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
        $('.title_sub_menu').toggleClass('turn');
	});
});


/*Счетчик количества товаров*/
var plusBtn = $('.button_plus');
var minusBtn = $('.button_minus');
plusBtn.click(function() {
    var numCount = $(this).siblings(".num_count");
    var i = parseInt(numCount.val());
    i++;
    numCount.val(i);
});
minusBtn.click(function() {
    var numCount = $(this).siblings(".num_count");
    var i = parseInt(numCount.val());
    i--;
    if(i < 0){
        i = 0;
    }
    numCount.val(i);
});

/*Если адрес не будет найден, мы перезвоним вам по номеру*/
$(document).ready ( function(){
    $("#phone_buyer").keyup(function() {
        $('#phone_buyer_number').text($("#phone_buyer").val());
    });
});   
    
/*Календарь*/
$(document).ready(function(){
    $('#calendar').simpleDatepicker({
        enddate:2020,
        firstDay: 1
    });  
});    

/*Выбор времени - Selectric*/
$(function() {
  $('#delivery_time').selectric({
      /*nativeOnMobile: true,*/
  });
}); 

/*Маска ввода телефона */
$(function(){
    $("#phone_buyer").mask("8 (999) 999-99-99");
    $("#phone_receiver").mask("8 (999) 999-99-99");
});

/*Кнопка скроллинга вверх*/
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
