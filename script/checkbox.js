
// $("input:checkbox").on('click', function() {

//       // console.log('hello');
//       var $box = $(this);
//       if ($box.is(":checked")) {
     
//       var group = "input:checkbox[name='" + $box.attr("name") + "']";
  
//       $(group).prop("checked", false);
//       $box.prop("checked", true);
//     } 
    
    
//     else {
//       $box.prop("checked", false);
//     }
    
//   });

function clearRadioButtons(){
  var ele = document.querySelectorAll("input[type=radio],input[type=checkbox]");
   for(var i=0;i<ele.length;i++){
      ele[i].checked = false;
   }
}



