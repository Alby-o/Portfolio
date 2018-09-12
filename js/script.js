$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, function () {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });

// $("body").scroll(function(){
//   if($(this).scrollTop() === 0){
//     alert("top");   
//   }
//   console.log($(this).scrollTop());
// });

$(document).ready(function() {
  $(window).on('scroll', function (e){
    if($(this).scrollTop() > 100) {
      $(".floating-nav").fadeIn();
    } else {
      $(".floating-nav").fadeOut();
    }
  });
});
