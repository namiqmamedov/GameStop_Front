
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

function clearRadioButtons(){
  var ele = document.querySelectorAll("input[type=radio],input[type=checkbox]");
   for(var i=0;i<ele.length;i++){
      ele[i].checked = false;
   }
}


$(document).ready(function() {

   var checkBox = $('.type');
   var checkElem = $('input[type="checkbox"');
   var deleteBtn = $('.choiceDelete');

   $('.choiceBox').click(function() {
       close();
       checkDelete();
   });

  

   checkItem();

   checkElem.change(function(event) {
       checkItem();
       checkDelete();
   });


   function checkItem() {
       var itemLabel = Array();
       checkElem.each(function() {
           if ($(this).prop('checked')) {
               itemLabel.push($(this).next('label').text());
           }
       });
       var itemLabelsStr = itemLabel.join();
       if (itemLabel.length > 0) {
           $('.platform-name').text(itemLabelsStr);
       }
   }



});





