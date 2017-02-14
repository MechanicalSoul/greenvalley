$(document).ready(function(){
  $('.page-header__burger').on('click', function(event) {

  	event.preventDefault();

  	$('.main-nav').slideToggle('slow');
  });

  $('.promo__tab').on('click', function(event) {

  	event.preventDefault();

  	if(!$(this).hasClass('promo__tab--active')) {
	  	$('.promo__tab').toggleClass('promo__tab--active');
	  	$('.promo__item').toggleClass('promo__item--active');
	  	$('.rest__item').toggleClass('rest__item--active');
	  }
  });

  $('.owl-carousel').owlCarousel({
  	loop: true,
  	center: true,
  	items: 1
  });
});