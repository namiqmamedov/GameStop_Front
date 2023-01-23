

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
    $('.write-menu').on('click', function() {
      $(".overlay-back").css({
        width: "100%"
      });
      $(".mobile-menu").show();
      
      $('.bar').toggleClass('animate');
      $('.mobile-menu').toggleClass('active');
      return false;
    })

    $(".overlay-back").on('click', function(){
      $(".overlay-back").css({
        width: "0%"
      });
      
    
    });

    $(".bar").on('click', function(){
      $(".overlay-back").css({
        width: "0%"
      });
      
    
    });


    // $(".bar").click(function(){
    //   $(".mobile-menu").css({
    //     display: "none"
    //   });
    // });

 

    
  })();


  const ratingRemove = $(".bar").click(function () {
    if ($('.mobile-menu').removeClass("active")) {}

    if ($('.overlay-back').removeClass("active")) {}


 })

 const ratingActive = $(".write-menu").click(function () {
  if ($('.mobile-menu').addClass("active")) {}

})

const ratingOverlay = $(".overlay-back").click(function () {
  if ($('.mobile-menu').removeClass("active")) {}

})





 
