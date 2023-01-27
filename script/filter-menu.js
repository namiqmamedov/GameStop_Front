$(".btn_container").click(function () {
  $(".over_lay").css({
    width: "100%"
  });
  $(".list_items_container").css({
    left: "0px"
  });
});
$(".over_lay, .close_btn").click(function () {
  $(".over_lay").css({
    width: "0px"
  });
  $(".list_items_container").css({
    left: "-300px"
  });
});

$(".write-menu").click(function () {
  $(".header-main").css({
    position: "static"
  });

});

$(".bar").click(function () {
  $(".header-main").css({
    position: "sticky"
  });

});


$(".question-menu").click(function () {
  $(".header-main").css({
    position: "static"
  });

});

$(".bar1").click(function () {
  $(".header-main").css({
    position: "sticky"
  });

});



(function () {
  $('.write-menu').on('click', function () {
    $(".overlay-back").css({
      width: "100%"
    });


    $('.bar').toggleClass('animate');
    $('.navMenu').toggleClass('active');
    return false;
  })

  $('.question-menu').on('click', function () {
    $(".overlay-back1").css({
      width: "100%"
    });


    $('.bar').toggleClass('animate');
    $('.navMenu').toggleClass('active');
    $('.bar1').toggleClass('animate');
    $('.navMenu1').toggleClass('active');
    return false;
  })

  $(".overlay-back").on('click', function () {
    $(".overlay-back").css({
      width: "0%"
    });


  });

  $(".overlay-back1").on('click', function () {
    $(".overlay-back1").css({
      width: "0%"
    });


  });


  $(".bar").on('click', function () {
    $(".overlay-back").css({
      width: "0%"
    });


  });

  $(".bar1").on('click', function () {
    $(".overlay-back1").css({
      width: "0%"
    });


  });



})();


const ratingRemove = $(".bar").click(function () {
  if ($('.navMenu').removeClass("active")) {}

  if ($('.overlay-back').removeClass("active")) {}


})

const askRemove = $(".bar1").click(function () {
  if ($('.navMenu1').removeClass("active")) {}

  if ($('.navMenu').removeClass("active")) {}

  if ($('.overlay-back1').removeClass("active")) {}


})



const ratingActive = $(".write-menu").click(function () {
  if ($('.navMenu').addClass("active")) {}

})



const posSticky = $(".write-menu").click(function () {
  if ($('.all-table').addClass("filterRemove")) {}

})
const posStickyy = $(".question-menu").click(function () {
  if ($('.all-table').addClass("filterRemove")) {}

})

const posStatic1 = $(".bar").click(function () {
  if ($('.all-table').removeClass("filterRemove")) {}

})
const posStatic2 = $(".bar1").click(function () {
  if ($('.all-table').removeClass("filterRemove")) {}

})

const owHidden = $(".write-menu").click(function () {
  if ($('body').addClass("overflow-hidden")) {}

})
const owHidden1 = $(".question-menu").click(function () {
  if ($('body').addClass("overflow-hidden")) {}

})

const owStatic1 = $(".overlay-back1").click(function () {
  if ($('body').removeClass("overflow-hidden")) {}

})

const owStatic = $(".overlay-back").click(function () {
  if ($('body').removeClass("overflow-hidden")) {}

})

const owStaticBar = $(".bar").click(function () {
  if ($('body').removeClass("overflow-hidden")) {}

  if ($('.scroll-up').removeClass("filterRemove")) {}

})
const owStaticBar1 = $(".bar1").click(function () {
  if ($('body').removeClass("overflow-hidden")) {}

  if ($('.scroll-up').removeClass("filterRemove")) {}
  
  if ($('.navMenu').removeClass("filterRemove")) {}


})



const posStatic = $(".overlay-back").click(function () {
  if ($('.all-table').removeClass("filterRemove")) {}

})

const ratingOverlay = $(".overlay-back").click(function () {
  if ($('.navMenu').removeClass("active")) {}

})

const posStaticc = $(".overlay-back1").click(function () {
  if ($('.all-table').removeClass("filterRemove")) {}

  if ($('.navMenu').removeClass("active")) {}

})

const ratingOverlayy = $(".overlay-back1").click(function () {
  if ($('.navMenu1').removeClass("active")) {}

})

const scrollNone = $(".question-menu").click(function () {
  if ($('.scroll-up').addClass("filterRemove")) {}

  if ($('.navMenu').addClass("filterRemove")) {}

})

const scrollBlock = $(".overlay-back1").click(function () {
  if ($('.scroll-up').removeClass("filterRemove")) {}

  if ($('.navMenu').removeClass("filterRemove")) {}

})

const scrollNone1 = $(".write-menu").click(function () {
  if ($('.scroll-up').addClass("filterRemove")) {}

})

const scrollBlock1 = $(".overlay-back").click(function () {
  if ($('.scroll-up').removeClass("filterRemove")) {}

})
