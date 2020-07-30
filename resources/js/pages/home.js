import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export const home = () => {

	const swiperHome = new Swiper('.block__slider-homepage .swiper-container', {
		slidesPerView: 1,
		direction: 'horizontal',
		loop: true,
		on: {
			init: function () {
				this.update(true);
			},
		},
		navigation: {
			nextEl: '.block__slider-homepage .swiper-button-next',
			prevEl: '.block__slider-homepage .swiper-button-prev',
		},
		pagination: {
			el: '.block__slider-homepage .swiper-pagination',
			clickable: true,
		},
		speed: 750,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		}
	});

}