/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).click( function(event){
	if( $(event.target).closest("#search_open").length ) 
	return;
	$("#search_open").slideUp("fast");
	event.stopPropagation();
});

$('#search').click( function() {
    $(this).siblings("#search_open").slideToggle("fast");
    $('#search').toggleClass('no_display');
    $('.menu').toggleClass('no_display');
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
var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
    plusBtn.onclick = function() {
        var i = parseInt(numCount.value);
        i++;
    numCount.value = i;
}
    minusBtn.onclick = function() {
        var i = parseInt(numCount.value);
        i--;
        if(i < 0){
        i = 0;
    }
    numCount.value = i;
}
/*Календарь*/
$(document).ready(function(){
    $('#calendar').simpleDatepicker();  
});    

/*Выбор времени - Selectric*/
$(function() {
  $('#delivery_time').selectric({
      /*nativeOnMobile: true,*/
  });
}); 

/*Маска ввода телефона */
$(function(){
    $("#phone_buyer").mask("8(999)999-99-99");
    $("#phone_receiver").mask("8(999)999-99-99");
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
