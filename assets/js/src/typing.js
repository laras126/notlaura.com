
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
const TYPE_SPEED = 60,
	SHOW_CURSOR = false;

var options = {
	elIndex: 0,
	strings: [TYPED_SRCS[0].innerHTML],
	typeSpeed: TYPE_SPEED,
	showCursor: SHOW_CURSOR,
	onComplete: () => {
		// var arrow = document.querySelector('.panel-icon-down');
		// TweenMax.to(arrow, 0.5, {autoAlpha: 1});
		// helloCallback();
		typeNextInArray();
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
	let nextBtn = document.querySelector('.btn-next');

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
				nextBtn.addEventListener('click', () => {
					return typeNextInArray();
				});
			} else {
				console.log('done');
			}
		}
	}

	let typed = new Typed(TYPED_ELS[newIndex], newOptions);
}


// TODO user closest LATER
function panel1Callback() {
	revealHelper(document.querySelector('.btn-next'));
}

function panel2Callback() {
	let target = document.querySelector('.btn-next');

	alert('holla');

	jQuery('html,body').animate({
		scrollTop: (target.offsetTop + target.getBoundingClientRect().height)
	}, 500);

}

function revealHelper(el) {
	TweenLite.to(el, 1, { delay: 0.5, transformOrigin: "50% 50%", scale: 1.2, ease: Bounce.easeOut, autoAlpha: 1 });
};

// function executeFunctionFromData(){
//   var d = 'hello' // Save `data-myattr` to d; (Obviously, this is just a hardcoded value as an example)
//   window[d](); // Execute the function.
// }



function executeFunctionFromData(data) {
	// var d = data;
}





// Closest polyfill

if (!Element.prototype.matches)
	Element.prototype.matches = Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};