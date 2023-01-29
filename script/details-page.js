"use strict";



const menu1 = $("#mMenu").click(function () {
  if ($('body').addClass("lock-scroll")) {}
})


const menuover = $(".m-menu__overlay").click(function () {
  if ($('body').removeClass("lock-scroll")) {}
})

const menuClose = $(".close").click(function () {
  if ($('body').removeClass("lock-scroll")) {}
})


const filterOptions = $(".filter-options").click(function () {
  if ($('body').addClass("lock-scroll")) {}
})

const filterRemove = $(".over_lay").click(function () {
  if ($('body').removeClass("lock-scroll")) {}
})

const filterRemoveBtn = $(".close_btn").click(function () {
  if ($('body').removeClass("lock-scroll")) {}
})


const filterOptions1 = $(".filter-options").click(function () {
  if ($('.header-main').addClass("none")) {}
})

const filterRemove1 = $(".over_lay").click(function () {
  if ($('.header-main').removeClass("none")) {}
})

const menuPosition = $("#mMenu").click(function () {
  if ($('.filter-options').addClass("filterRemove")) {}
})

const menuPosition1 = $(".close").click(function () {
  if ($('.filter-options').removeClass("filterRemove")) {}
})


const menuPositionn2 = $(".close").click(function () {
  if ($('.filter-options').removeClass("filterRemove")) {}
})


const ratingOptions = $(".filter-options").click(function () {
  if ($('body').addClass("lock-scroll")) {}
})

const ratingRemoveBtn = $(".close_btn").click(function () {
  if ($('body').removeClass("lock-scroll")) {}
})

const ratingRemove = $(".over_lay").click(function () {
  if ($('body').removeClass("lock-scroll")) {}

})

$("#mMenu").click(function () {
  $(".search .fa-search").css({
    display: "none"
  })
});


$(".m-menu__toggle .close").click(function () {
  $(".search .fa-search").css({
    display: "block"
  })
});

$(".m-menu__overlay").click(function () {
  $(".search .fa-search").css({
    display: "block"
  })
});


$(".menu-ul").click(function () {
  $(".menu-ul-1").css({
    visibility: "visible"
  })
});

$(".menu-ul").click(function () {
  $(".menu-ul").css({
    visibility: "hidden"
  })
});

$(".menu-ul").click(function () {
  $(".m-menu__header").css({
    visibility: "visible"
  })
});

$(".menu-ul").click(function () {
  $(".menu1 li").css({
    display: "none"
  })
});

$("#mMenu").click(function () {
  $(".all-table").css({
  
  transform: "translateY(533px)"
  })
});

$(".close").click(function () {
  $(".all-table").css({
  
  transform: "translateY(0px)"
  })
});

$(".m-menu__overlay").click(function () {
  $(".all-table").css({
  
  transform: "translateY(0px)"
  })
});






const scrollNone = $(".back-label").click(function () {

  if ($('#menuUl').addClass("vVisible")) {}

})

const scrollNone2 = $(".a-label__chevron").click(function () {

  if ($('.menu-ul').removeClass("vVisible")) {}

})



const menuOverflow = $(".img-main").click(function () {
  if ($('body').addClass("lock-scroll")) {}
})

const closeModel = $(".item-overlay__btn-img").click(function () {
  if ($('body').removeClass("lock-scroll")) {}
})

const closeModel1 = $(".item-overlay slide").click(function () {
  if ($('body').removeClass("lock-scroll")) {}
})
$(".img-main").click(function () {
  $(".all-table").css({
    top: "100%"
  });
});

$(".item-overlay__btn-img").click(function () {
  $(".all-table").css({
    top: "0%"
  });
});


// const posStatic = $(".img-main").click(function () {
//   if ($('.all-table').addClass("none")) {}

// })

// const posSticky = $(".item-overlay__btn-img").click(function () {
//   if ($('.all-table').removeClass("none")) {}

// })


const imgBtn = Array.from(document.querySelectorAll(".img-btn"));
const img = document.querySelector(".img-main");
const video = document.querySelector(".img");
const source = document.querySelector(".source-main");
const mainImgBtns = Array.from(document.querySelectorAll(".img-main__btn"));

const overlayCon = document.querySelector(".overlay-container");
const overlayImg = document.querySelector(".item-overlay__img");
const overlayImgBtn = Array.from(
  document.querySelectorAll(".overlay-img__btn")
);
const overlayBtnImgs = Array.from(
  document.querySelectorAll(".overlay-img__btn-img")
);
const overlayCloseBtn = document.querySelector(".item-overlay__btn ");
const overlayBtns = Array.from(document.querySelectorAll(".overlay-btn"));

const cartBtn = document.querySelector(".head-rgt__btn");
const cart = document.querySelector(".head-cart");
const cartItem = document.querySelector(".head-cart__item");
const emptyCartTxt = document.querySelector(".head-cart__txt");
const addToCart = document.querySelector(".price-cart__btn");
const clearCart = document.querySelector(".head-cart__item-btn");
const priceSingle = document.querySelector(".head-cart__price-single");
const priceTotal = document.querySelector(".head-cart__price-total");

const priceBtns = Array.from(document.querySelectorAll(".price-btn__img"));
const totalItems = document.querySelector(".price-btn__txt");

const menuOpen = document.querySelector(".head-lft__btn");
const menu = document.querySelector(".head-nav");
const menuBtnImg = document.querySelector(".head-lft__btn-img");

const bodyOverlay = document.querySelector(".body-wrapper");
const body = document.querySelector("body");

const headerCart = document.querySelector(".head-rgt");

/* Eventlisteners related to cart and items adding */
let nextImg = 0,
  noOfItems = 0,
  clicked,
  trasitionTimer;

const minQuery = window.matchMedia("(min-width: 850px)"),
  maxQuery = window.matchMedia("(max-width: 850px)");

/*//////////////////////
 Functions 
 /////////////////////*/
/*Function to stop transition animation from triggering when page resize and reloading  */
function transitionDelay() {
  body.classList.add("preload");
  clearTimeout(trasitionTimer);
  trasitionTimer = setTimeout(() => {
    body.classList.remove("preload");
  }, 1000);
}

/* Function to get next and previous images*/
function imgBtns(btns, img, imgName) {

}

imgBtns(overlayBtns, overlayImg, "item-overlay");
imgBtns(mainImgBtns, img, "img-main");

/* Function to show single and total items price in the cart  */
function productPrice(items) {
  totalItems.textContent = items;
  priceSingle.textContent = `$125 * ${items}`;
  priceTotal.textContent = `$${125 * items}`;
  if (items >= 1) {
    headerCart.setAttribute("data-content", `${items}`);
    headerCart.style.setProperty("--display", `block`);
  } else {
    headerCart.style.setProperty("--display", `none`);
  }
}

/* Function to close navigation menu */
function closeMenu() {
  menu.classList.remove("open-menu");
  body.style.overflow = "visible";
  bodyOverlay.classList.remove("open-overlay");
  menuBtnImg.src = "/images/icon-menu.svg";
}

/* Function to open navigation menu */

function openMenu() {
  menu.classList.add(".open-menu");
  menuBtnImg.src = "/images/icon-close.svg";
  body.style.overflow = "hidden";
  cart.classList.remove("open-cart");
  bodyOverlay.classList.add("open-overlay");
}

/* Function to delete cart item when cart items are zero */

function cartIt() {
  cartItem.classList.add("open-cart");
  emptyCartTxt.classList.remove("open-cart");
}

/* Function to delete cart text 'empty cart' when cart items are > 0 */

function cartTx() {
  cartItem.classList.remove("open-cart");
  emptyCartTxt.classList.add("open-cart");
}

/* Function to delete cart text cart item  */
function emptyCart() {
  cartItem.classList.remove("open-cart");
  emptyCartTxt.classList.remove("open-cart");
}

/*//////////////////////
 Event Listeners 
 /////////////////////*/

/*  Eventlistener to close and open cart   */

cartBtn.addEventListener("click", function () {
  cart.classList.toggle("open-cart");
  if (cart.classList.contains("open-cart")) {
    if (noOfItems >= 1 && clicked === true) cartIt();
    else cartTx();
  } else {
    emptyCart();
  }
});

/*  Eventlistener to increase and decrease no. of items   */
priceBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    clicked = false;
    if (e.target.classList.contains("price-btn__add-img")) {
      if (noOfItems >= 10) return;
      noOfItems++;
      productPrice(noOfItems);
    } else if (e.target.classList.contains("price-btn__remove-img")) {
      if (noOfItems <= 0) return;
      noOfItems--;
      productPrice(noOfItems);
    }
  });
});

/*  Eventlistener for add to cart button  */
addToCart.addEventListener("click", function (e) {
  clicked = true;
  if (cart.classList.contains("open-cart")) {
    if (noOfItems >= 1) {
      cartIt();
    } else if (noOfItems <= 0) {
      cartTx();
    }
  }
});

/*  Eventlistener for delete cart item button   */
clearCart.addEventListener("click", function () {
  cartTx();
  noOfItems = 0;
  totalItems.textContent = noOfItems;
  headerCart.style.setProperty("--display", `none`);
});

/*  Eventlistener to open overlay image modal   */
img.addEventListener("click", function () {
  if (minQuery.matches) {
    overlayCon.style.display = "block";
    overlayImg.src = img.src;
  }
});

/*  Eventlistener to close overlay image modal   */
overlayCloseBtn.addEventListener("click", function () {
  if (minQuery.matches) {
    overlayCon.style.display = "none";
  }
});

/*  Eventlistener for overlay image modal btn to change overlay image same as button image  */
overlayImgBtn.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    overlayImg.src = overlayBtnImgs[i].src;
    nextImg = e.target.dataset.img;
  });
});

/*  Eventlistener for  image to change when image button is clicked  */
imgBtn.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    img.src = overlayBtnImgs[i].src;
  });
});

/* Menu eventlisteners */
/*  Eventlistener to open menu / navigation  */
menuOpen.addEventListener("click", function () {
  menu.classList.toggle("open-menu");
  if (menu.classList.contains("open-menu")) {
    openMenu();
    emptyCart();
  } else {
    closeMenu();
  }
});

/*  Eventlistener to stop transition animation from triggering when page resize */
window.addEventListener("resize", function () {
  transitionDelay();

  if (maxQuery.matches) overlayCon.style.display = "none";

  if (minQuery.matches) closeMenu();
});

/*  Eventlistener to stop transition animation from triggering when page reloading  */
window.addEventListener("load", function () {
  transitionDelay();
});