$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.nav-wrapper').addClass('scroll-down')
      $('.logo').attr('src' ,'assets/images/logo2.png');
      $('.logo').css('width' ,'90px');
      $('header ul li a').css('color','black');
      $('.main-menu').css('margin-top','10px');
    } else {
      $('.nav-wrapper').removeClass('scroll-down');
      $('.logo').attr('src' ,'assets/images/logo.png');
      $('header ul li a').css('color','white');
      $('.logo').css('width' ,'112px');
      $('.main-menu').css('margin-top','20px');
    }
  });

 