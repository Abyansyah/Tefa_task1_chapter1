$(document).ready(function () {
  // menu navbar script
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
      $('.navbar img.hitam').show();
      $('.navbar img.putih').hide();
    } else {
      $('.navbar').removeClass('sticky');
      $('.navbar img.hitam').hide();
      $('.navbar img.putih').show();
    }
  });

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
  $(".navbar .menu li a").click(function() {  
    $(".navbar .menu li a").removeClass("active"); 
    $(this).addClass("active"); 
  });
  
});
