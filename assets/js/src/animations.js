
// Blog Header Character
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

if( window.location.pathname == "/blog/") {

	function blogAnimation() {

		var $main = document.querySelectorAll(".bc-main"),
				$text = document.querySelectorAll(".page-title"),
				$bubbles = document.querySelectorAll(".bc-bubble"),
				$body = document.querySelectorAll(".bc-body"),
				$mouth = document.querySelector(".bc-mouth");
				$innerMouth = document.querySelector(".bc-inner-mouth"),
				$eyeball = document.querySelector(".bc-eyeball");

		var tl = new TimelineLite();

		const COLORS = ["#FC625D", "#21A99C", "slategray", "#F7DE32"];

		for (var i = 0; i < $bubbles.length; i++) {
			let color = COLORS[Math.floor(Math.random() * COLORS.length)];

			$bubbles[i].style.opacity = 1;
			$bubbles[i].style.fill = color;
		}


		// Adjust viewport on small screens
		// TODO: maybe reverse.
		// Mobile: 0 0 318 190
		// Large: 0 0 618 190
		if (window.innerWidth <= 690) {
			document.querySelector(".blog-character").setAttribute("viewBox", "50 0 318 190");
		}


		tl.to($main, 1, { left: 0, ease: Power2.easeOut });

		// Mouth In
		tl.to([$mouth, $innerMouth], 1, { x: -20, ease: SlowMo.ease.config(0.7, 0.7, false) });

		// Body inflate
		tl.to($body, 2, { scale: 1.1, ease: Power2.easeIn }, "-=1.0");

		// Mouth Out
		tl.to([$mouth, $innerMouth], 1, { x: 0, ease: Elastic.easeOut.config(1, 0.7), force3D: true });

		// Fill body
		tl.to($body, 0.25, { scale: 1, ease: Power2.easeIn }, "-=1.0");

		// Blow bubbles
		tl.staggerTo($bubbles, 2, { scale: 1, delay: 0.1, ease: Elastic.easeInOut, force3D: true, autoAlpha: 1 }, 0.1, "-=2.0");

		tl.to($text, 0.5, { ease: Power4.easeOut, autoAlpha: 1 }, "-=1");
	}

	blogAnimation();
}

if (window.location.pathname == "/") {

	const $handLeft = document.querySelector('.ls-hand-left'),
				$lara = document.querySelector('.lara-character');

	var tl = new TimelineLite();

	// Slide in from left
	tl.to($lara, 1, { x: 0, ease: Power2.easeInOut, autoAlpha: 1})
		.to($handLeft, 0.25, { rotation: -20, transformOrigin: "50% 90%", ease: Power2.easeInOut, yoyo: true, repeatDelay: 0, repeat: 50 });


	}