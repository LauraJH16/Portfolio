
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.nav-wrapper').addClass('scroll-down')
      $('.logo').attr('src', 'assets/images/logo2.png');
      $('.logo').css('width', '90px');
      $('.button-collapse').css('color','black');
      $('header ul li a').css('color', 'black');
      $('.main-menu').css('margin-top', '10px');
    } else {
      $('.nav-wrapper').removeClass('scroll-down');
      $('.logo').attr('src', 'assets/images/logo.png');
      $('.button-collapse').css('color','white');
      $('header ul li a').css('color', 'white');
      $('.logo').css('width', '112px');
      $('.main-menu').css('margin-top', '20px');
    }
  });


  $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen:   $('.button-collapse').sideNav('show') , // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );

});