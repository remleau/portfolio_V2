import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination]);

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
		pagination: {
			el: '.block__slider-homepage .swiper-pagination',
			type: 'fraction',
			clickable: true,
		},
		speed: 750,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		}
	});

}