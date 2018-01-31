/*jslint browser: true*/
/*global $, jQuery, alert*/

var search = document.querySelector("#search");
var search_open = document.querySelector("#search_open");
var search_close = document.querySelector("#search_close");
        search.onclick = function() {
        search_open.style.display = "block";
        };
        search_close.onclick = function() {
        search_open.style.display = "none";
        };
        

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

/*Удаление товара из корзины*/
$(function () {
    'use strict';
    $('.delete').on('click', function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
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
      nativeOnMobile: false,
      disableOnMobile:false,
      onChange: function() {
          $('.selectric .prepend_label').remove();
          var select_val = $('.selectric .label').text();
          if(select_val != 'Время доставки'){
              $('.selectric').prepend("<span class='prepend_label'>Время доставки</span>");
          }
          console.log(select_val);
          console.log("2");
      }
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

/*Подъем label при фокусе на форме*/
$('.order_info .receiver .form textarea').change(function () {
    if ($.trim($(this).val()).length < 1) {
        console.log("Поле не заполнено");
        $(this).siblings('label').removeClass('empty_label');
    } else {
        console.log("Поле заполнено");
        $(this).siblings('label').addClass('empty_label');
    }
});