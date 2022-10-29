$(document).ready(function () {
<<<<<<< HEAD
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
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
  
=======
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
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
    $(function() {
      $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
      });
    });
    
  });
>>>>>>> 57224a6671aa9d945840cbe6b94011bc9a9a7989
});
