$('#slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    mobileFirst: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: false    
        }
      },
      {
        breakpoint: 767,
        settings: "unslick"
      },
      {
        breakpoint: 600,
        settings: "unslick"
      },
      {
        breakpoint: 480,
        settings: "unslick"
      }
    ]
  });

  
$('#slider1').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 767,
        settings: "unslick"
      },
      {
        breakpoint: 600,
        settings: "unslick"
      },
      {
        breakpoint: 480,
        settings: "unslick"
      }
    ]
  });


    
$('#slider2').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 4,
 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: "unslick"
    },
    {
      breakpoint: 600,
      settings: "unslick"
    },
    {
      breakpoint: 480,
      settings: "unslick"
    }
  ]
});

$('#slidero').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 4,
 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: "unslick"
    },
    {
      breakpoint: 600,
      settings: "unslick"
    },
    {
      breakpoint: 480,
      settings: "unslick"
    }
  ]
});


