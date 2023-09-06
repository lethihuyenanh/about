$(window).on("load", function() { 
		$('.js-popup-iframe').magnificPopup({ 
				type: 'iframe', 
				mainClass: 'mfp-fade', 
				removalDelay: 200, 
				preloader: false,
				//autoplay
				iframe: {
					patterns: {
						youtube: {
							index: 'youtube.com',
							id: 'v=',
							src: 'https://www.youtube.com/embed/FRNARnIIpoU?rel=0&autoplay=1&mute=1'
						}
					}
				},
		});
});

$('.js-img-gallery').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', 
	gallery:{
		enabled:true
	},

	zoom: {
		enabled: true, 

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		opener: function(openerElement) {

			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}

});

$('.js-img-popup').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', 
	gallery:{
		enabled:false
	},

	zoom: {
		enabled: true, 

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		opener: function(openerElement) {

			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}

});