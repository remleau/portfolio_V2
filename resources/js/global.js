export const global = () => {

	let timer;
	let mouseX = 0, mouseY = 0;
	let xp = 0, yp = 0;
	let circle = document.querySelector(".circle-mouse");
	let parent = document.querySelector("body");

	parent && parent.addEventListener('mousemove', (e) => {
		// if mouse start moving add class moving
		// it will show the circle with opacity transition 
		circle.classList.add('moving');

		// get the mouse position minus 160px to center the circle
		mouseX = e.pageX - 37.5;
		mouseY = e.pageY - 37.5;

		// if mouse stop moving clear timer and call mouseStopped function
		clearTimeout(timer);
		timer = setTimeout(() => {
			circle.classList.remove('moving');
		}, 3000);
	});

	// set the momentum with setInterval function
	let loop = setInterval(function () {
		// change 12 to alter damping higher is slower
			xp += ((mouseX - xp) / 4);
			yp += ((mouseY - yp) / 4);
			circle.style.left = xp + 'px';
			circle.style.top = yp + 'px';
	}, 30);

}