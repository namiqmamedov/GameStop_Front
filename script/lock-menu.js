
   if (window.innerWidth > 1000) {   

      const menu = $("#mMenu").click(function () {
         if ($('body').addClass("lock-scroll")) {}
      })
      
   }




const menuover = $(".m-menu__overlay").click(function () {
   if ($('body').removeClass("lock-scroll")) {}
})


// $("#mMenu").click(function(){
//    if ($('body').addClass("lock-scroll")){
//    }
//    else{
//     $('body').removeClass("lock-scroll")
//    }
//  })