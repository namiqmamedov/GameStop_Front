
$("input:checkbox").on('click', function() {

      // console.log('hello');
      var $box = $(this);
      if ($box.is(":checked")) {
     
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
  
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } 
    
    
    else {
      $box.prop("checked", false);
    }
    
  });


  $(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });

