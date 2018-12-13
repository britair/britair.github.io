/*Phone input mask*/
$(function(){
    $("#phone").mask("+7 (999) 999-99-99");
});

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});