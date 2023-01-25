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


    $('.tablist-product').get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });

  });

  
  function scrollToElement(element, parent) {
    $(parent)[0].scrollIntoView(true);
    $(parent).animate({
      scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
    }, {
      duration: 'slow',
      easing: 'swing'
    });
  }

  $('.two').on('click', function() {
    var paretq = $('.features li:last-child');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })

  $('.three').on('click', function() {
    var paretq = $('.description .body-text:last-of-type');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })

  $('.four').on('click', function() {
    var paretq = $('.specifications .product-table:last-of-type');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })


  $('.five').on('click', function() {
    var paretq = $('.customer-rating');
    var elemq = $('.twoDesc');
    scrollToElement(elemq, paretq);
  })
})
