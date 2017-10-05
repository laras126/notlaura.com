
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// ----
// Bubble Character 2
// ----

if (document.querySelector('.blog-character')) {
	runBubbleAnimation();
	console.log("hi");
}

function runBubbleAnimation() {

	const $main = document.querySelectorAll(".bc-main"),
			$text = document.querySelectorAll(".page-title"),
			$bubbles = document.querySelectorAll(".bc-bubble"),
			$body = document.querySelectorAll(".bc-body"),
			// $people = document.querySelectorAll(".people-list li a"),
			$mouth = document.querySelector(".bc-mouth");
			$innerMouth = document.querySelector(".bc-inner-mouth"),
			$eyeball = document.querySelector(".bc-eyeball");

	let tl = new TimelineLite();

	// Random colors for bubbles
	const COLORS = ["#FC625D", "#21A99C", "slategray", "#F7DE32"];

	// Randomly color bubbles
	for (var i = 0; i < $bubbles.length; i++) {
		let color = COLORS[Math.floor(Math.random() * COLORS.length)];

		$bubbles[i].style.opacity = 1;
		$bubbles[i].style.fill = color;
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

	// Show blog text
	tl.to($text, 0.5, { ease: Power4.easeOut, autoAlpha: 1 }, "-=1");


	// Adjust viewport on small screens
	// TODO: maybe reverse.
	// Mobile: 0 0 318 190
	// Large: 0 0 618 190
	if (window.innerWidth <= 690) {
		document.querySelector(".blog-character").setAttribute("viewBox", "50 0 318 190");
	}

}



// ----
// Blinking Character 1
// ----

function runBlinkingAnimation(parent) {
	const mainBody = document.querySelectorAll(parent + " .c1-main"),
				eyes = document.querySelector(parent + " .c1-eyes"),
				pupils = document.querySelector(parent + " .c1-pupils"),
				characterTrigger = document.querySelector(parent + " .js-character");

	var characterVisible = false;
	var tl = new TimelineLite();

	tl.set(mainBody, { y: 150 });

	tl.to(mainBody, 0.5, {
		y: 0,
		delay: 0.5,
		ease: Power3.easeOut,
		autoAlpha: 1
	});
	characterVisible = true;

	if( characterVisible == true ) {
		var moveEye = new TimelineMax({ delay: 2 });
		moveEye.add(TweenMax.to(pupils, 0.2, { x: 1, y: 2, rotation: 2, transformOrigin: "50% 100%" }));
	}

	var blink = new TimelineMax({ delay: 0.5, repeat: 20, repeatDelay: 2 });

	blink.add(TweenMax.fromTo(eyes, 0.5, { fill: '#1B75BC' }, { fill: 'white' }));
	blink.add(TweenMax.fromTo(pupils, 0.5, { fill: '#1B75BC' }, { fill: '#000000' }), '-=0.5');

}

// const string = document.querySelector(".panel-title").textContent;

// const array = string.split("");

// var markup = "";

// array.forEach(function(element) {
// 	let span = `<span>${element}</span>`;
// 	markup += span;
// }, this);

// document.querySelector(".panel-title").innerHTML = markup;
// const spans = document.querySelectorAll('.panel-title span');

// const panelTitle = document.querySelector('.panel-title');

// var tl = new TimelineLite();

// TweenMax.from(".sig", 1, { autoAlpha: 0, scale: 0, rotation: 360, drawSVG: 0, ease: Power4.easeInOut }, 0.1);

// tl.from('.lara-name path', 1, { drawSVG: 0 } );

// tl.to(panelTitle, 1, { scale: 1.2, x: 0, ease: Elastic.easeInOut, rotation: -40, autoAlpha: 1});