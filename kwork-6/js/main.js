/*jslint browser: true*/
/*global $, jQuery, alert*/

/*Mobile-menu*/
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

/*Slider-news*/
$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'vertical',
        slideMargin: 10,
        infiniteLoop: true,
        touchEnabled: true,
        minSlides: 6,
        maxSlides: 9,
        moveSlides: 1,
        pager: false,
        nextText: '',
        prevText: '',
        controls: true
    });
});


$('.read_more').click(function(){
    $('.news-text').css('height', 'auto');
    $('.ellipsis').css('display', 'none');
    $('.after-news').css('display', 'none');
    $('.news-full').css('display', 'block');
});

$(function() {
    $('.tab-link').on('click', function(e) {
        e.preventDefault();
        $('.tab-block').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});
$(function() {
    $('.rubrika-title').on('click', function(e) {
        e.preventDefault();
        $('.rubrika-block').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});





