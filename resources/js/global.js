import { gsap, TweenLite } from "gsap";

export const global = () => {

	let timer;
	let circle = document.querySelector(".circle-mouse");

	document.addEventListener("mousemove", function (e) {
		circle.classList.add('moving');

		TweenLite.to(circle, 0.5, {
			css: {
				left: e.pageX - 37.5,
				top: e.pageY - 37.5
			}
		});

		clearTimeout(timer);
		timer = setTimeout(() => {
			circle.classList.remove('moving');
		}, 3000);
	});

}