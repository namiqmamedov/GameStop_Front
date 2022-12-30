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
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
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
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
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


