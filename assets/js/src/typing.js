
// $('.type-it').typeIt({
// 	// speed: 900,
// 	lifeLike: true,
// 	autoStart: true
// })
// 	.tiType("hi")
// 	.tiSettings({ speed: 100 })
// 	.tiType('but now I am typing pretty fasst')
// 	.tiDelete(2)
// 	.tiType('t!');






// ----
// Typed.js
// ----

// Get an array of all elements to be typed.
const TYPED_SRCS = document.querySelectorAll('.js-typed-src');
const TYPED_ELS = document.querySelectorAll('.js-typed');
const TYPE_SPEED = 20,
	SHOW_CURSOR = false;

var options = {
	elIndex: 0,
	strings: [TYPED_SRCS[0].innerHTML],
	typeSpeed: TYPE_SPEED,
	showCursor: SHOW_CURSOR,
	onComplete: () => {
		showNextSection('intro');
	},
}

// Start the typing elements, starting with index 0
var typed = new Typed(TYPED_ELS[0], options);



// Function to type next item in typedEls array
function typeNextInArray() {

	// Move through the array
	options.elIndex++;
	let newIndex = options.elIndex;
	let currentEl = TYPED_SRCS[newIndex];

	// Allow for data attributes to provide some settings
	let newTypeSpeed = "speed" in currentEl.dataset ? +currentEl.dataset.speed : TYPE_SPEED;

	// Callbacks must be defined below
	let callbackFunc = "callback" in currentEl.dataset ? window[currentEl.dataset.callback] : console.log('no call back');

	// New options set
	let newOptions = {
		elIndex: newIndex,
		startDelay: 500,
		strings: [TYPED_SRCS[newIndex].innerHTML],
		typeSpeed: newTypeSpeed,
		showCursor: SHOW_CURSOR,
		callback: callbackFunc(TYPED_SRCS[newIndex]),
		onComplete: () => {

			// TYPED_SRCS[newIndex].setAttribute('aria-hidden', 'true');

			if (newIndex + 1 <= TYPED_ELS.length - 1) {

				showNextSection(newIndex.toString());
					// return typeNextInArray();

			} else {
				console.log('done');
			}
		}
	}

	let typed = new Typed(TYPED_ELS[newIndex], newOptions);
}


function showNextSection(id) {
	let nextBtn = document.querySelector('#panel-' + id + '-btn');
	console.log(id);
	reveal(nextBtn);

	nextBtn.addEventListener('click', (e) => {
		jQuery('html,body').animate({
			scrollTop: (nextBtn.offsetTop + nextBtn.getBoundingClientRect().height) - 5
		}, 500);
		return typeNextInArray();
	});
}





// Specific callbacks

// TODO user closest LATER
function panel1Callback() {
	console.log('p1 is done');
}

function panel2Callback() {
	console.log('p2 callback');
}

function panel3Callback() {
	console.log('p3 call back');
}


// Helpers

function reveal(el) {
	TweenLite.to(el, 1, { delay: 0.5, transformOrigin: "50% 50%", scale: 1, ease: Bounce.easeOut, autoAlpha: 1 });
};




