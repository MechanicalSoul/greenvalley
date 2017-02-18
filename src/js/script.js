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

  $('.promo__item').not('.promo__item--active').hide();
  $('.rest__item').not('.rest__item--active').hide();

  $('.promo__tab').on('click', function(event) {
  	event.preventDefault();
  	if(!$(this).hasClass('promo__tab--active')) {
	  	$('.promo__tab').toggleClass('promo__tab--active');
	  	$('.promo__item--active').fadeOut(400, function() {
	  		$('.promo__item').toggleClass('promo__item--active');
	  		$('.promo__item--active').fadeIn(400);
	  	});
	  	$('.rest__item--active').fadeOut(400, function() {
	  		$('.rest__item').toggleClass('rest__item--active');
	  		$('.rest__item--active').fadeIn(400);
	  	});
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

  $('.reviews__slider').slice(1).hide();
  var n = 0;

  $('.reviews__item').on('click', function() {
  	$('.reviews__slider').eq(n).fadeOut(400, function() {
  		$('.reviews__slider').eq(n+1).fadeIn(400);
  		n = ++n;
  		console.log(n);
	  	if(n >= 2 || n < 0) {
				n = 0;
				$('.reviews__slider').eq(n).fadeIn(400);
				console.log(n + "aa");
			}
  	});
  });

  $('.offers__slider').owlCarousel({
  	loop: true,
  	center: true,
  	dots: true,
  	dotsEach: true,
  	items: 1
  });

  $('.single-room__slider').owlCarousel({
  	loop: true,
  	center: true,
  	dots: false,
  	nav: true,
  	navText: ['',''],
  	items: 1,
  	responsive:{
  		0:{
  			nav: false
  		},
  		768:{
  			nav: true
  		}
  	}
  });

	$('.single-room__btn').on('click', function(event) {
		event.preventDefault();
		$('.single-room__modal-img').attr('src', $('.single-room__slider .active .single-room__img').attr('src'));
		$('.single-room__modal').show();
		$('body').addClass('modal-open');
	});

	$('.single-room__modal').on('click', function() {
		$('.single-room__modal').hide();
		$('body').removeClass('modal-open');
	});

	$( function() {
    $('#datepicker').datepicker();
  } );

  $('.step__place-item').on('click', function() {
  	if(!$(this).hasClass('step__place-item--active')) {
	  	$('.step__place-item').toggleClass('step__place-item--active');
	  	$('.step__living-type').toggleClass('step__living-type--active');
	  
			stepOptions = document.querySelectorAll('.step__living-type--active .step__list-item');
			stepAbouts = document.querySelectorAll('.step__living-type--active .step__about');
			stepOptionsArray = Array.prototype.slice.call(stepOptions);
			stepAboutsArray = Array.prototype.slice.call(stepAbouts);

			for(var i = 0; i < stepOptionsArray.length; i++) {
			  stepOptionsArray[i].addEventListener('click', changeAbout);
			}
	  }
  });

	var stepOptions = document.querySelectorAll('.step__living-type--active .step__list-item');
	var stepAbouts = document.querySelectorAll('.step__living-type--active .step__about');
	var stepOptionsArray = Array.prototype.slice.call(stepOptions);
	var stepAboutsArray = Array.prototype.slice.call(stepAbouts);

	function changeAbout(event) {
	  var currentLink = event.target;
    for(var j = 0; j < stepOptionsArray.length; j++) {
      stepOptionsArray[j].classList.remove('step__list-item--active');
      stepAboutsArray[j].classList.remove('step__about--active');
    }
    currentLink.classList.add('step__list-item--active');
    var pos = stepOptionsArray.indexOf(currentLink);
    stepAboutsArray[pos].classList.add('step__about--active');
	}

	for(var i = 0; i < stepOptionsArray.length; i++) {
	  stepOptionsArray[i].addEventListener('click', changeAbout);
	}

  $('.step__pay-time').on('click', function() {
  	if(!$(this).hasClass('step__pay-time--active')) {
	  	$('.step__pay-time').toggleClass('step__pay-time--active');
	  }
  });



$('.step__form-select').on('change', cost);
$('.step__personal-item').on('change', cost);

  function cost() {

  $('.step__form-select').each(function() {
  	if($(this).val() == "") {
  		$('.step__text--price').show();
  	}
  	else {
  		$('.step__text--price').hide();
  	}
  });

  $('.step__personal-input').each(function() {
  	if($(this).val() == "") {
  		$('.step__text--personal').show();
  	}
  	else {
  		$('.step__text--personal').hide();
  	}
  });

  if(!$('[type="email"]')[0].checkValidity()) {
  	console.log("not valid");
  }
  
	// var itemCost = document.getElementById("path__select").value;
	// console.log(itemCost);
	// var select = document.getElementById("people-number__select").value;
	// console.log(select);
	// var totalPrice = select * itemCost;
	// console.log(totalPrice);
	// document.getElementById("price").innerText=totalPrice + ' Р';

	}





});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 60.192, lng: 29.638},
    scrollwheel: false,
    disableDefaultUI: true,
    zoom: 14
  });

  var marker = new google.maps.Marker({
    position: {lat: 60.192, lng: 29.638},
    map: map,
    icon: '../img/marker.png'
  });

	var center;
	function calculateCenter() {
	  center = map.getCenter();
	}
	google.maps.event.addDomListener(map, 'idle', function() {
	  calculateCenter();
	});
	google.maps.event.addDomListener(window, 'resize', function() {
	  map.setCenter(center);
	});
}

