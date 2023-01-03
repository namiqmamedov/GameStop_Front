// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 235) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })



// Get the button
let mybutton = document.getElementsByClassName("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





