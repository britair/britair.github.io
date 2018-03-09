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

/*Slider-news-bottom*/
var owl = $('.owl-carousel');
owl.owlCarousel({
    mouseDrag: true,
       loop: true,
       nav: true,
       navText: [""],
       autoplay:false,
       items: 5,
       dots: false,
       responsiveClass:true,
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


/*Slider-news-right*/
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
        controls: true,
        mouseDrag: true
    });
});

$('.read_more').click(function(){
    $('.news-text').css('height', 'auto');
    $('.ellipsis').css('display', 'none');
    $('.after-news').css('display', 'none');
    $('.news-full').css('display', 'block');
    $('.bxslider').css('display', 'none');
    $('.bx-controls-direction').css('display', 'none');
    $('.news .left').css('flex-basis', 'auto');
    $('.news-image').css({'width':'100%', 'height':'auto'});
});

$(function() {
    $('.news-block-title').on('click', function(e) {
        e.preventDefault();
        $('.news-block').each(function() {
            $(this).css('display', 'none');
            $(this).prev('.news-block-title').css('color','#333');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
        $(block).prev('.news-block-title').css('color','#426bb0');
    });
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
$(function() {
    $('.article-title').on('click', function(e) {
        e.preventDefault();
        $('.article-block').each(function() {
            $(this).css('display', 'none');
            $(this).siblings('.article-after').css('display','flex');
            $(this).siblings('.article-preview').css('flex-wrap','nowrap');
            $(this).siblings('.article-preview').children("img").css({
                'margin':'0 23px 0 0',
                'width':'270px',
                'height':'148px'
            });
            $(this).siblings('.article-preview').children('p').children('.ellipsis2').css('display','inline');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});

$('.read-more-article').click(function(){
    $(this).parent().css('display','none');
    $(this).parent().siblings('.article-block').css('display', 'block');
    $(this).parent().siblings('.article-preview').css({
        'flex-wrap':'wrap',
        'margin':'15px 0 10px'
    });
    $(this).parent().siblings('.article-preview').children("img").css({
        'margin':'15px 0',
        'width':'100%',
        'height':'auto'
    });
    $(this).parent().siblings('.article-preview').children('p').children('.ellipsis2').css('display','none');
   
});



$(function(){
    $('#form').validate({
    validClass: "success", 
    success: function() {
        $('#submit').removeAttr('disabled').addClass('active');
      },    
    rules: {
        name: {
            required: true,
            minlength: 2
        }
    },
    messages: {
    name: {
    required: "Вы пропустили поле",
    minlength: "min. допустимое количество знаков: 2"
    },
    email: {
    required: "Вы пропустили поле",
    email: "недопустимые символы" 
    },
    }
    });
    if($("#name").hasClass('error'))
        $("#name").siblings(".sb-icon").css('background','#ffb71d');
}); 

$(function(){
    $('#form_comment').validate({
    validClass: "success",
    errorClass: "invalid",    
    success: function() {
        $('#public').removeAttr('disabled').addClass('active');
      },    
    rules: {
        name_user: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        comment: {
            required: "Вы пропустили поле",
        },  
        name_user: {
            required: "Вы пропустили поле",
            minlength: "min. количество знаков: 2"
        },
        email_user: {
            required: "Вы пропустили поле",
            email: "Адреса не существует"
        },
    }
    });
}); 

$(function(){
    $('#form_review').validate({
    validClass: "success",
    errorClass: "invalid",    
    success: function() {
        $('#public_review').removeAttr('disabled').addClass('active');
      },    
    rules: {
        user_review: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        review: {
            required: "Вы пропустили поле",
        },  
        user_review: {
            required: "Вы пропустили поле",
            minlength: "min. количество знаков: 2"
        },
        email_review: {
            required: "Вы пропустили поле",
            email: "Адреса не существует"
        },
    }
    });
}); 

$('.tag').click(function(){
    $('.articles-tag').css('display','block');
});




