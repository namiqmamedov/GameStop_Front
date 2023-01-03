
jQuery(document).ready(function(){

    var $this = $('#more-item');
    if ($this.find('li').length > 6) {
        $('#more-item').append('<div><a href="javascript:;" class="showMore"></a></div>');
    }
    
    $('#more-item li').slice(0,6).addClass('shown');
    $('#more-item li').not('.shown').hide();
    $('#more-item .showMore').on('click',function(){
      $('#more-item li').not('.shown').toggle(300);
      $(this).toggleClass('showLess');
    });

    var $this = $('#more-item1');
    if ($this.find('li').length > 6) {
        $('#more-item1').append('<div><a href="javascript:;" class="showMore"></a></div>');
    }
    
    $('#more-item1 li').slice(0,6).addClass('shown');
    $('#more-item1 li').not('.shown').hide();
    $('#more-item1 .showMore').on('click',function(){
      $('#more-item1 li').not('.shown').toggle(300);
      $(this).toggleClass('showLess');
    });

    var $this = $('#more-item2');
    if ($this.find('li').length > 6) {
        $('#more-item2').append('<div><a href="javascript:;" class="showMore"></a></div>');
    }
    
    $('#more-item2 li').slice(0,6).addClass('shown');
    $('#more-item2 li').not('.shown').hide();
    $('#more-item2 .showMore').on('click',function(){
      $('#more-item2 li').not('.shown').toggle(300);
      $(this).toggleClass('showLess');
    });


    var $this = $('#more-item3');
    if ($this.find('li').length > 6) {
        $('#more-item3').append('<div><a href="javascript:;" class="showMore"></a></div>');
    }
    
    $('#more-item3 li').slice(0,6).addClass('shown');
    $('#more-item3 li').not('.shown').hide();
    $('#more-item3 .showMore').on('click',function(){
      $('#more-item3 li').not('.shown').toggle(300);
      $(this).toggleClass('showLess');
    });
  
  });


