$(document).ready(function(){
  $('.page-header__burger').on('click', function(event) {
  	
  	event.preventDefault();

  	$('.main-nav').slideToggle('slow');
  });
});
