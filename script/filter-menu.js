
  $(".btn_container").click(function(){
    $(".over_lay").css({
      width: "100%"
    });
    $(".list_items_container").css({
      left: "0px"
    });
  });
  $(".over_lay, .close_btn").click(function(){
    $(".over_lay").css({
      width: "0px"
    });
    $(".list_items_container").css({
      left: "-300px"
    });
  });


  (function () {
    $('.hamburger-menu').on('click', function() {
      $('.bar').toggleClass('animate');
      $('.mobile-menu').toggleClass('active');
      return false;
    })
    $('.has-children').on ('click', function() {
         $(this).children('ul').slideToggle('slow', 'swing');
         $('.icon-arrow').toggleClass('open');
    });
  })();
