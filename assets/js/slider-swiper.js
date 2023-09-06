// ---------------------------------------------------
// swiper
// ---------------------------------------------------
var galleryThumbs = new Swiper('.carousel-nav', {
	spaceBetween: 10,
	slidesPerView: 3,
	centeredSlides: true,
	roundLengths: true,
	loop: true,
	freeMode: false,
	loopedSlides: 10, //looped slides should be the same
	slideToClickedSlide: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 7,
			spaceBetween: 10,
		},
	},
	watchSlidesVisibility: true,
	watchSlidesProgress: true
});

var galleryTop = new Swiper('.carousel-main', {
	spaceBetween: 0,
	loop:true,
	loopedSlides: 10, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
	effect: 'fade',
});