$(document).ready(function(){
  $('.page-header__burger').on('click', function(event) {
  	event.preventDefault();
  	$('.main-nav').slideToggle('slow');
  });

  galleryResize();
  $(window).resize(galleryResize);

  function galleryResize() {
    var widthSlider = parseInt($('.gallery__slider').css('width'));

	  if($(window).width() < 768) {
	   	$('.gallery__wrap').hide();
      heightSlider = widthSlider / 1.47;
      $('.gallery__slider').css('height', heightSlider);
	  }
   	else {
	   	$('.gallery__wrap').show();
	  	var widthMain = parseInt($('.gallery__wrap').css('width')),
	  	heightMain = widthMain / 2.36;
	  	$('.gallery__wrap').css('height', heightMain);
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
    var from = $( "#start" ).datepicker()
        .on( "change", function() {

          to.datepicker( "option", "minDate", getDate( this ) );
          var date = $(this).datepicker('getDate');
          $( "#start-d" ).text( date.getDate() );
          $( "#start-m" ).text( date.getMonth() + 1 );
          $( "#start-y" ).text( date.getFullYear() );
        }),
      to = $( "#fin" ).datepicker()
        .on( "change", function() {
          from.datepicker( "option", "maxDate", getDate( this ) );
          var date = $(this).datepicker('getDate');
          $( "#fin-d" ).text( date.getDate() );
          $( "#fin-m" ).text( date.getMonth() + 1 );
          $( "#fin-y" ).text( date.getFullYear() );
        });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( "mm/dd/yy", element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

  $('.step__place-item--active > [name="radio-place"]').prop('checked', true);
  $('.step__list-item--active > [name="radio-cottage"]').prop('checked', true);
  $('.step__list-item--active > [name="radio-hotel"]').prop('checked', true);

  $('.step__place-item').on('click', function() {
  	if(!$(this).hasClass('step__place-item--active')) {
	  	$('.step__place-item').toggleClass('step__place-item--active');
	  	$('.step__living-type').toggleClass('step__living-type--active');
      $('.step__place-item--active > [name="radio-place"]').prop('checked', true);
      $('.step__list-item--active > [name="radio-cottage"]').prop('checked', true);
      $('.step__list-item--active > [name="radio-hotel"]').prop('checked', true);
	  
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
    $('.step__list-item--active > [name="radio-cottage"]').prop('checked', true);
    $('.step__list-item--active > [name="radio-hotel"]').prop('checked', true);
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
  $('.step__personal-input').on('change', cost);
  $('.step__place-item').on('click', cost);
  $('.step__list-item').on('click', cost);

  function cost() {

    var days = 0;

    var personalCorrect;
    var dateCorrect;

    $('.step__form-select').each(function() {
      var startDate = $('#start');
      var finDate = $('#fin');

      if ($(startDate).val() && $(finDate).val()) {
        var isValidStart = startDate[0].checkValidity();
        var isValidFin = finDate[0].checkValidity();
        if(isValidStart && isValidFin) {
          $('.step__text-price').hide();
          var start = $("#start").datepicker("getDate");
          var end = $("#fin").datepicker("getDate");
          days = (end - start) / (1000 * 60 * 60 * 24);
          console.log(days);
          dateCorrect = true;
          console.log("date correct");
        }
        else {
          $('.step__text-price').show();
          $('.step__required--date').text('введите корректные даты');
          console.log("date incorrect");
        }
      }
      else {
        $('.step__text-price').show();
        $('.step__required--date').text('введите корректные даты');
        console.log("date incorrect");
      }
    });

    $('.step__personal-input').each(function() {
      var inputPersonal = $(this);

      if ($(inputPersonal).val()) {
        var isValidPersonal = inputPersonal[0].checkValidity();
        if(isValidPersonal) {
          inputPersonal.removeClass("incorrect").addClass("correct");
        }
        else {
          inputPersonal.removeClass("correct").addClass("incorrect");
        }
      }
      else {
        inputPersonal.removeClass("correct").removeClass("incorrect");
      }
    });

    if ($('input.correct').length == $('input.step__personal-input').length) {
      $('.step__text-personal').hide();
      personalCorrect = true;
    }
    else {
      $('.step__text-personal').show();
      $('.step__required--personal').text('введите корректные данные');
      personalCorrect = false;
    }

    if (dateCorrect == true && personalCorrect == true) {
      var placeCost = +$('.step__place-item--active > [name="radio-place"]').val();
      console.log(placeCost);
      var livingCost = +$('.step__living-type--active [type="radio"]:checked').val();
      console.log(livingCost);
      var totalCost = placeCost + livingCost + days * 500;
      console.log(totalCost);
      $('.step__total-price').text(totalCost + ' Руб.');
    }
    else {
      $('.step__total-price').text('-');
    }
	}

  $('input[type="radio"]').hide();

  $('.step__cvv').on('click', function(event) {
    event.preventDefault();
  });
  $('.step__cvv').on('mouseenter', function(){
    $('.step__cvv-bubble').show();
  });
  $('.step__cvv').on('mouseleave', function(){
    $('.step__cvv-bubble').hide();
  });

});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 60.192, lng: 29.638},
    scrollwheel: false,
    disableDefaultUI: true,
    zoom: 14
  });

  var image = '..greenvalley/img/marker.png';
  var marker = new google.maps.Marker({
    position: {lat: 60.192, lng: 29.638},
    map: map,
    icon: image
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

