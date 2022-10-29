$(document).ready(function () {
<<<<<<< HEAD
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
});
=======
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
>>>>>>> fc57983ef2fec335c6f26a81d6d3716100ba4768
