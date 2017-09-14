
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

function runTypingEffect() {

	// Get an array of all elements to be typed.
	const TYPED_SRCS = document.querySelectorAll('.js-typed-src');
	const TYPED_ELS = document.querySelectorAll('.js-typed');
	const TYPE_SPEED = 3,
		SHOW_CURSOR = false;

	var options = {
		elIndex: 0,
		strings: [TYPED_SRCS[0].innerHTML],
		typeSpeed: TYPE_SPEED,
		showCursor: SHOW_CURSOR,
		onComplete: () => {
			let nextBtn = document.querySelector('#panel-' + options.elIndex + '-btn');
			showButtons(nextBtn);
			clickToNextSection(options.elIndex+1, nextBtn);
		},
	}

	var typed = new Typed(TYPED_ELS[0], options);
}

// Start the typing elements, starting with index 0
if (window.location.pathname == "/about/") {
	runTypingEffect();
}


// Function to type next item in typedEls array
function typeNextInArray() {

	// Move through the array
	options.elIndex++;
	let newIndex = options.elIndex;
	let currentEl = TYPED_SRCS[newIndex];

	// Allow for data attributes to provide some settings
	let newTypeSpeed = "speed" in currentEl.dataset ? +currentEl.dataset.speed : TYPE_SPEED;

	// Callbacks must be defined below
	let callbackFunc = "callback" in currentEl.dataset ? window[currentEl.dataset.callback] : console.log;

	// New options set
	let newOptions = {
		elIndex: newIndex,
		startDelay: 500,
		strings: [TYPED_SRCS[newIndex].innerHTML],
		typeSpeed: newTypeSpeed,
		showCursor: SHOW_CURSOR,
		callback: callbackFunc(TYPED_SRCS[newIndex]),
		onComplete: () => {

			if (newIndex + 1 <= TYPED_ELS.length - 1) {
				let nextBtn = document.querySelector('#panel-' + newIndex + '-btn');

				if (newIndex == 2) {
					let nextBtnGroup = document.querySelectorAll('#panel-' + newIndex + '-btn .btn-next');

					showButtons(nextBtnGroup);
					clickToNextSection(newIndex.toString(), nextBtnGroup);

				} else {
					showButtons(nextBtn);
					clickToNextSection(newIndex.toString(), nextBtn);
				}

					// return typeNextInArray();

			} else {
				console.log('done');
			}
		}
	}

	let typed = new Typed(TYPED_ELS[newIndex], newOptions);
}


function getPanelClassList(index) {
	let elem = document.querySelector('#panel-' + index);
	console.log(elem.classList);
}

function clickToNextSection(index, btn) {
	console.log('#panel-' + (+index - 1) + '-btn');
	// Panel 2 has two options for next places to type
	if( index == '2' ) {
		btn.forEach(function(element) {
			element.addEventListener('click', (e) => {
				let type = element.dataset.contentRef;
				let content = document.getElementById(type).innerHTML;
				let container = document.getElementById('typeContentHolder');
				let nextPanelBtn = document.getElementById('panel-3-btn');

				container.dataset.type = type;
				container.innerHTML = content;
				nextPanelBtn.dataset.contentRef = type + '-2';

				console.log(type, content, container);

				return typeNextInArray();
			});
		}, this);

	} else if( index == '3' ) {
		btn.addEventListener('click', (e) => {
			let type = btn.dataset.contentRef;
			let content = document.getElementById(type).innerHTML;
			let container = document.getElementById('typeContentHolder2');

			container.dataset.type = type;
			container.innerHTML = content;

			return typeNextInArray();
		});
	} else {
		btn.addEventListener('click', (e) => {
			return typeNextInArray();
		});
	}

}


function showButtons(btn) {
	// Mark the stagger boolean true if selecting multiple buttons
	if( btn.length > 1) {
		reveal(btn, true);
	} else {
		reveal(btn);
	}
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
	let toHide = document.querySelector('.js-hide');
	hide(toHide);
}


// Helpers

function reveal(el, stagger = false) {
	// Stagger aimation if more than one element comes in.
	if (stagger == true) {
		let tm = new TimelineMax();
		tm.staggerTo(el, .2, { delay: 0.5, transformOrigin: "50% 50%", scale: 1, ease: Power2.easeOut, autoAlpha: 1 }, 0.1);
		// tm.staggerTo(el, .2, { delay: 0.5, transformOrigin: "50% 50%", rotation: 30, ease: Power2.easeOut }, 0.1, "");
	} else {
		TweenLite.to(el, .2, { delay: 0.5, transformOrigin: "50% 50%", scale: 1, ease: Power2.easeOut, autoAlpha: 1 });
	}
};

function hide(el) {
	TweenLite.to(el, .2, { delay: 0.5, transformOrigin: "50% 50%", scale: 0, ease: Power2.easeOut, autoAlpha: 0 });
}



