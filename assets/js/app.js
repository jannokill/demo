$(document).ready(function(){
  
    // http://codepen.io/bradfrost/pen/sHvaz
    
    $('body').addClass('js');
    var $menu = $('#menu'),
    $menulink = $('.menu-link');
    
    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });


});