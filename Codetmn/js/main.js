/*jslint browser: true*/
/*global $, jQuery, alert*/

/*Мобильное меню*/
$(function () {
    'use strict';
    $('.menuToggle').on('click', function () {
        $('#menuMobile').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
			}
		});
    });
});

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$(function() {
    $(document).ready(function() {
        $('.open_course').click(function() {
            $("#window_registration").fadeIn().css("display", "flex")
        });
        $('.close').click(function (){
            $("#window_registration").fadeOut()
        });
    });
});


