
   if (window.innerWidth > 1000) {   

      const menu = $("#mMenu").click(function () {
         if ($('body').addClass("lock-scroll")) {}
      })
      
   }


   const menuover = $(".m-menu__overlay").click(function () {
      if ($('body').removeClass("lock-scroll")) {}
   })


   
   
   const menu = $(".menu-ul").click(function () {
      if ($('.all-menu').addClass("overflow-hidden")) {}
   })
   
   
   
   
   
   // const menu = $(".menu-ul li").click(function () {
   //    // console.log("test")
   //    if ($('.m-menu__headewr').addClass("psfx")) {}
   // })

   // const none = $(".menu-ul li").click(function () {
   //    if ($('body').addClass("none")) {}
   // })

   // const block = $(".back").click(function () {
   //    if ($('body').addClass("block")) {}
   // })
   
   // function hideMe() {
   //    document.getElementById("menu-header").style.display = "block";
      
   // }
   
   function none() {
      document.getElementById("menu-header").style.display = "none";
   
      // document.getElementsByClassName("all-menu").style.overflow = "hidden";
    }

   //  const menuover1 = $(".back").click(function () {
   //    console.log('test');
   //    if ($('.all-menu').removeClass("hep")) {}
   // })








// $("#mMenu").click(function(){
//    if ($('body').addClass("lock-scroll")){
//    }
//    else{
//     $('body').removeClass("lock-scroll")
//    }
//  })