import Swiper, { Pagination } from 'swiper';
import { gsap, TweenMax } from "gsap";
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination]);

export const home = () => {

	const swiperHome = new Swiper('.block__slider-homepage .swiper-container', {
		direction: 'horizontal',
		slidesPerView: 2,
    centeredSlides: true,
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
		speed: 1000,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		}
	});


	// document.querySelector('.block__slider-homepage').addEventListener('mousemove', function(e) {
	// 	parallaxIt(e, ".swiper-slide .image", -100);
	// 	// parallaxIt(e, ".swiper-slide .content", -30);
	// });

	// function parallaxIt(e, target, movement) {
	// 	var $this = document.querySelector(".swiper-slide");
	// 	var relX = e.pageX - $this.offsetLeft;
	// 	var relY = e.pageY - $this.offsetTop;

	// 	TweenMax.to(target, 1, {
	// 		x: (relX - $this.getBoundingClientRect().width / 2) / $this.getBoundingClientRect().width * movement,
	// 		y: (relY - $this.getBoundingClientRect().height / 2) / $this.getBoundingClientRect().height * movement
	// 	});
	// }

}