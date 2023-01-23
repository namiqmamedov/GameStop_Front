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


(function () {
  var unClick = true;
  $('.write-menu').on('click', function () {
    $(".overlay-back").css({
      width: "100%"
    });


    $('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('active');
    return false;
  })

  $(".overlay-back").on('click', function () {
    $(".overlay-back").css({
      width: "0%"
    });


  });

  $(".bar").on('click', function () {
    $(".overlay-back").css({
      width: "0%"
    });


  });



})();


const ratingRemove = $(".bar").click(function () {
  if ($('.mobile-menu').removeClass("active")) {}

  if ($('.overlay-back').removeClass("active")) {}


})

const ratingActive = $(".write-menu").click(function () {
  if ($('.mobile-menu').addClass("active")) {}

})



const posSticky = $(".write-menu").click(function () {
  if ($('.all-table').addClass("filterRemove")) {}

})

const posStatic1 = $(".bar").click(function () {
  if ($('.all-table').removeClass("filterRemove")) {}

})

const owHidden = $(".write-menu").click(function () {
  if ($('body').addClass("overflow-hidden")) {}

})
const owStatic = $(".overlay-back").click(function () {
  if ($('body').removeClass("overflow-hidden")) {}



})

const owStaticBar = $(".bar").click(function () {
  if ($('body').removeClass("overflow-hidden")) {}



})

const posStatic = $(".overlay-back").click(function () {
  if ($('.all-table').removeClass("filterRemove")) {}

})




const ratingOverlay = $(".overlay-back").click(function () {
  if ($('.mobile-menu').removeClass("active")) {}

})