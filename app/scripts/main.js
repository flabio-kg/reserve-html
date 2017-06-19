jQuery(document).ready(function($) {

	$(".nilo__item").matchHeight();
	
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});


	if (Modernizr.mq('(max-width: 992px)')) {
		$('.js_menu_toggle').addClass('-active');
		$('.menu').addClass('-hide');
		$('.content').addClass('-show');
	} else {
		$('.js_menu_toggle').removeClass('-active');
		$('.menu').removeClass('-hide');
		$('.content').removeClass('-show');
	}
	$(window).resize(function(){
		if (Modernizr.mq('(max-width: 992px)')) {
			$('.js_menu_toggle').addClass('-active');
			$('.menu').addClass('-hide');
			$('.content').addClass('-show');
		} else {
			$('.js_menu_toggle').removeClass('-active');
			$('.menu').removeClass('-hide');
			$('.content').removeClass('-show');
		}
	});
	
	$('.js_menu_toggle').on('click', function(event) {
		$(this).toggleClass('-active');
		$('.menu').toggleClass('-hide');
		$('.content').toggleClass('-show');
		event.preventDefault();
	});

	$('.gallery__item').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		}
	});

});