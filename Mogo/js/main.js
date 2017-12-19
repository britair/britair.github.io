/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    'use strict';
    $('.menuToggle').on('click', function () {
        $('#menu').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
	});
});

/*Слайдер в Шапке*/
$(document).ready(function () {
    'use strict';
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsData: true,
        dotsContainer: '#customDots',
        nav: false,
    });
});

/*Выпадающие блоки What we do*/
$(function () {
    'use strict';
    $('#photography').on('click', function () {
        $('#photo_info').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
	});
});

$(function () {
    'use strict';
    $('#creativity').on('click', function () {
        $('#creativ_info').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
	});
});

$(function () {
    'use strict';
    $('#web_design').on('click', function () {
        $('#design_info').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
	});
});

/*Слайдер с цитатами*/
var btn_prev = document.querySelector('.slider2 .container .buttons .prev');
var btn_next = document.querySelector('.slider2 .container .buttons .next');

var quotes = document.querySelectorAll('.slider2 .container .quotes .quote');
var i = 0;


btn_prev.onclick = function (){
    quotes[i].style.display = 'none';
    i--;
    
    if(i < 0){
        i = quotes.length - 1;
    }
    
    quotes[i].style.display = 'flex';
}

btn_next.onclick = function (){
    quotes[i].style.display = 'none';
    i++;
    
    if(i >= quotes.length){
        i = 0;
    }
    
    quotes[i].style.display = 'flex';
}

/*Второй слайдер с цитатами*/
var btn_prev2 = document.querySelector('.slider3 .container .buttons .prev2');
var btn_next2 = document.querySelector('.slider3 .container .buttons .next2');

var quotes2 = document.querySelectorAll('.slider3 .container .quotes .quote');
var i = 0;


btn_prev2.onclick = function (){
    quotes2[i].style.display = 'none';
    i--;
    
    if(i < 0){
        i = quotes2.length - 1;
    }
    
    quotes2[i].style.display = 'flex';
}

btn_next2.onclick = function (){
    quotes2[i].style.display = 'none';
    i++;
    
    if(i >= quotes2.length){
        i = 0;
    }
    
    quotes2[i].style.display = 'flex';
}

/*Карта*/
$(function () {
    'use strict';
    $('.map').on('click', function () {
        $('.iframe_container').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
                
			}
		});
	});
});