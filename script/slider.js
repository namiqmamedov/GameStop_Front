$('#slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
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
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
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
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
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
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
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


