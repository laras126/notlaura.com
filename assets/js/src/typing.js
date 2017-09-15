// ----
// Typed.js
// ----


// Start the typing elements on pages with the story layout

if(document.querySelector('.page-template-page-story_layout')) {

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
		markPanelComplete(options.elIndex);
		showButtons(nextBtn);
		clickToNextSection(options.elIndex+1, nextBtn);
	},
}

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

			markPanelComplete(newIndex);

			if (newIndex <= TYPED_ELS.length ) {

				if (panelClassesContain(newIndex, 'js-tabs')) {
					let nextBtnGroup = document.querySelectorAll('#panel-' + newIndex + '-btn .btn-next');

					showButtons(nextBtnGroup);

					// let tabs = document.querySelectorAll('.panel-tab');

				} else {
					let nextBtn = document.querySelector('#panel-' + newIndex + '-btn');
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


function clickToNextSection(index, btn) {
	console.log('#panel-' + (+index - 1) + '-btn');
	let panelId = '#panel-' + (+index - 1);

	// If it's a normal panel
	if( !panelClassesContain(index, 'js-tabs') ) {
		btn.addEventListener('click', (e) => {
			return typeNextInArray();
		});
	}
}


function panelClassesContain(i, c) {
	let elem = document.querySelector('#panel-' + i);
	return elem.classList.contains(c);
}


function markPanelComplete(i) {
	let elem = document.querySelector('#panel-' + i);
	elem.classList.add('js-complete');
}



function showButtons(btn) {
	// Mark the stagger boolean true if selecting multiple buttons
	let tabbed = btn.length > 1;

	if( tabbed ) {
		reveal(btn, true);
		btn.forEach(function (element) {
			toggleTabs(element);
		}, this);

	} else {
		reveal(btn);
	}
}


function toggleTabs(element) {
	let type = element.dataset.contentRef;
	let content = document.getElementById(type);
	let tabs = document.querySelectorAll('.panel-tab');
	let btns = document.querySelectorAll('.decision-btns > a');

	element.addEventListener('click', (e) => {

		btns.forEach( (btn) => {
			btn.classList.remove('js-selected');
		});

		element.classList.add('js-selected');

		tabs.forEach(function (tab) {
			tab.classList.add('js-hidden');

			if (tab.getAttribute('id') == type) {
				tab.classList.remove('js-hidden');
			}
		});

	});
}

// Specific callbacks

// TODO user closest LATER
function panel1Callback() {
	console.log('p1 is done');
	let toHide = document.querySelector('.js-hide');
	hide(toHide);
}

function panel2Callback() {
	console.log('p2 callback');
}

function panel3Callback() {
	console.log('p3 call back');
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





} // end if