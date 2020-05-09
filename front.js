//toggling color of navbar toggler
$(".navbar-toggler").click(function(){
    $(this).toggleClass("donee")
})
$(".navbar-toggler").mouseenter(function(){
    $(this).toggleClass("donee")
})
$(".navbar-toggler").mouseleave(function(){
    $(this).toggleClass("donee")
})


/* hover dropdown */
$('.dropdown').hover(function(){ 
    $('.dropdown-toggle', this).trigger('click'); 
  });
  $('.dropright').hover(function(){ 
    $('.dropdown-toggle', this).trigger('click'); 
  });
  $('.dropleft').hover(function(){ 
    $('.dropdown-toggle', this).trigger('click'); 
  });