const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 235) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


$(document).ready(function() {

  $('.one').on('click', function() {

    //this scroll withour animations in chrome
    $('.tablist-product').get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });

  });

  //this scroll WITH animations in all browsers 
  
  //taken from: http://praveenlobo.com/techblog/how-to-scroll-elements-smoothly-in-javascript-jquery-without-plugins/
  
  function scrollToElement(element, parent) {
    $(parent)[0].scrollIntoView(true);
    $(parent).animate({
      scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
    }, {
      duration: 'slow',
      easing: 'swing'
    });
  }

  //call animated scroll script on click of 2nd button
  $('.two').on('click', function() {
    var paretq = $('.productFeatures li:last');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })

  $('.three').on('click', function() {
    var paretq = $('.description p:last');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })

  $('.four').on('click', function() {
    var paretq = $('.specifications td:last');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })


  $('.five').on('click', function() {
    var paretq = $('.customer-rating');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })
})
