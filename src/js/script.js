$(document).ready(function(){
  $('.page-header__burger').on('click', function(event) {
  	event.preventDefault();
  	$('.main-nav').slideToggle('slow');
  });

  galleryResize();
  $(window).resize(galleryResize);

  // $('.gallery__img').css('opacity', '0.2');
  // $('.gallery__slider').on('mouseenter', '.gallery__img', function(){
  // 	$(this).css('opacity', '1');
  // });
  // $('.gallery__slider').on('mouseleave', '.gallery__img', function(){
  // 	$(this).css('opacity', '0.2');
  // });

  function galleryResize() {
	  if($(window).width() < 768) {
	   	$('.gallery__wrap').hide();
	   	$('.gallery__slider').height(215);
	  }
   	else {
	   	$('.gallery__wrap').show();
	  	var widthMain = parseInt($('.gallery__wrap').css('width')),
	  	heightMain = widthMain / 2.36;
	  	$('.gallery__wrap').css('height', heightMain);
	  	var widthSlider = parseInt($('.gallery__slider').css('width')),
	  	heightSlider = widthSlider / 11.8;
	  	$('.gallery__slider').css('height', heightSlider);
	  }
  };

  $('.promo__tab').on('click', function(event) {
  	event.preventDefault();
  	if(!$(this).hasClass('promo__tab--active')) {
	  	$('.promo__tab').toggleClass('promo__tab--active');
	  	$('.promo__item').toggleClass('promo__item--active');
	  	$('.rest__item').toggleClass('rest__item--active');
	  }
  });

  $('.gallery__slider').owlCarousel({
  	loop: true,
  	center: true,
  	dots: false,
  	responsive:{
  		0:{
  			items: 1
  		},
  		768:{
  			items: 6
  		}
  	}
  });

  $('.gallery__slider').on('click', '.owl-item', function() {
  	var carousel = $('.gallery__slider').data('owl.carousel');
  	carousel.to(carousel.relative($(this).index()));
  });

  $('.gallery__img').on('click', function() {
  		$('.gallery__main-img').attr('src', $(this).attr('src'));
  });

  $('.reviews__slider').rhinoslider();

  // $('.reviews__slider').slice(1).hide();
  // var n = 0;

  // $('.reviews__item').on('click', function() {

		
	 //  	$('.reviews__slider').eq(n).fadeOut(400, function() {
	 //  		$('.reviews__slider').eq(n+1).fadeIn(400);
	 //  		n = ++n;
	 //  		console.log(n);

	 //  		  	if(n >= 2 || n < 0) {
		// 	n = 0;
		// 	console.log(n + "aa");
		// }
	 //  	});
		
  // });
});