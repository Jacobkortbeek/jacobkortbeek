$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('.nav-container').toggleClass('nav-container-shown');
		$('#nav-icon2').toggleClass('icon-dislpay');
		if ($('.nav-container ul').hasClass('menu-items')) {
		     var delay = 425; //ms
		     setTimeout(function(){
		         $('.nav-container ul').removeClass('menu-items');
		     },delay );
		   }
		   // element doesn't have green class --> add it
		   else {
				 setTimeout(function() {
		     $('.nav-container ul').addClass('menu-items');
			 }, 125);
		  };
	});
});

$('body').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 20);
    var amountMovedY = (e.pageY * -1 / 20);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

$(document).ready(function(){
	$('#home-container h2').each(function(i){
		setTimeout(function() {
    	$('#home-container h2').eq(i).addClass('parallax');
		},150*(i+1));
  });
});

$(window).scroll(function(){

var wScroll = $(this).scrollTop();

$('#home-container img').css({'transform': 'translate(0px, -' + wScroll /16 + '%)'});
$('#home-container h1').css({'transform': 'translate(0px, -' + wScroll /4 + '%)'});


if(wScroll > $('#about-container').offset().top - ($(window).height() / 1.3)) {

  $('#about-container h1').each(function(){

    $('#about-container h1').addClass('parallax');

  });

};

if(wScroll > $('#about-container').offset().top - ($(window).height() / 1.6)) {

  $('#about-container p').each(function(){

    $('#about-container p').addClass('parallax');

  });

};

if(wScroll > $('#knowledge-container').offset().top - ($(window).height() / 1.3)) {

  $('#knowledge-container h1').each(function(){

    $('#knowledge-container h1').addClass('parallax');

  });

};

if(wScroll > $('#knowledge-container').offset().top - ($(window).height() / 1.6)) {

  $('#knowledge-container p').each(function(){

    $('#knowledge-container p').addClass('parallax');

  });

};

if(wScroll > $('#knowledge-container').offset().top - ($(window).height() / 2)) {

  $('#knowledge-container img').each(function(i){
		setTimeout(function() {
    	$('#knowledge-container img').eq(i).addClass('parallax');
		},150*(i+1));
  });

};

if(wScroll > $('#contact-container').offset().top - ($(window).height() / 1.3)) {

  $('#contact-container h1').each(function(){

    $('#contact-container h1').addClass('parallax');

  });

};

//input fields
if(wScroll > $('#contact-container').offset().top - ($(window).height() / 1.6)) {

  $('#contact-container form textarea').each(function(){

    $('#contact-container form textarea').addClass('parallax');

  });

};

//input fields
if(wScroll > $('#contact-container').offset().top - ($(window).height() / 1.6)) {

  $('#contact-container form input').each(function(i){
		setTimeout(function() {
    	$('#contact-container form input').eq(i).addClass('parallax');
		},150*(i+1));
  });

};

if(wScroll > $('#footer-container .social-container').offset().top - ($(window).height() / 1)) {

  $('#footer-container .social-container img').each(function(i){
		setTimeout(function() {
    	$('#footer-container .social-container img').eq(i).addClass('parallax');
		},150*(i+1));
  });

};

});
