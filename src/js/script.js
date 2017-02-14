$(document).ready(function(){
  $('.page-header__burger').on('click', function(event) {

  	event.preventDefault();

  	$('.main-nav').slideToggle('slow');
  });

  $('.owl-carousel').owlCarousel({
  	loop: true,
  	center: true,
  	items: 3
  });
});