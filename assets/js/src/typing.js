

const TYPE_SPEED = 1;
const PANELS = document.querySelectorAll('.panel');

var panelsArr = [];



if(document.querySelector('.page-template-page-story_layout')) {

	class Panel {

		constructor(int) {

			this.id = int;
			this.el = document.querySelector("#panel-" + this.id);
			this.complete = false;
			this.created = false;
			this.type = "type" in this.el.dataset ? this.el.dataset.type : "typed";
			this.fired = false;

			this.nextBtn = ((int) => {
				trigger = document.querySelectorAll('#panel-' + int + ' .btn-next');
				return trigger;
			})(this.id);

			// Options for "Typed" panels (most of them)
			if( this.type == "typed" ) {

				// Find source for typing
				this.typedSrc = ((int) => {
					let el = document.querySelector("#panel-" + int + ' .js-typed-src');
					return el;
				})(this.id);

				// Create an element to hold typed content
				this.typedEl = ((int) => {
					let ref = this.typedSrc;
					let div = document.createElement('div');
							div.classList.add('js-typed', 'panel-content');
							div.setAttribute('aria-hidden', 'true');
							insertAfter(ref, div);

					let el = document.querySelector("#panel-" + int + ' .js-typed');
					return el;
				})(this.id);

				// Options for all panels
				this.typedOpts = {
					// strings: document.querySelector('#panel-' + this.id + ' .js-typed-src').innerHTML,
					strings: [this.typedSrc.innerHTML],
					typeSpeed: TYPE_SPEED,
					showCursor: false,
					onComplete: () => {
						// addEventListeners(index, $nextBtn, typedEl, options);
						showButtons(this.nextBtn);
						this.complete = true;
					}
				}
			}
		}

		setUpChildren() {
			let kids = this.el.children;
			for (let i = 0; i < kids.length; i++) {
				let kid = kids[i];
				addButtonHrefs(kid, this.id);
			}
		}

		typeIt() {
			this.fired = true;
			if( !this.complete ) {
				let typed = new Typed(this.typedEl, this.typedOpts);
			}
		}

	}


	PANELS.forEach((el, index) => {
		el.id = 'panel-' + index;

		let p = new Panel(index);
		p.created = true;

		p.setUpChildren();
		console.log(p);
		panelsArr.push(p);

	});

	// Type first panel
	document.querySelector('body').addEventListener('click', () => {
		let panel = panelsArr[0];
		panel.typeIt();
		// let typed = new Typed(panel.typedEl, panel.typedOpts);
	});

}; // end selector check



// Setting up Panel Functions

function addButtonHrefs(kid, index) {
	if (kid.classList.contains('btn-next')) {
		kid.setAttribute('href', '#panel-' + (index + 1));
	}
	if (kid.classList.contains('decision-btns')) {
		for (let i = 0; i < kid.children.length; i++) {
			kid.children[i].setAttribute('href', '#panel-' + (index + 1));
		}
	}
}



// function setUpTyping(kid, index) {
// 	if (kid.classList.contains('js-typed-src')) {

// 		let typedEl = document.createElement('div');
// 		typedEl.classList.add('js-typed', 'panel-content');
// 		typedEl.setAttribute('aria-hidden', 'true');
// 		// insertAfter(kid, typedEl);

// 		let options = {
// 			strings: [kid.innerHTML],
// 			typeSpeed: TYPE_SPEED,
// 			showCursor: false,
// 			onComplete: () => {
// 				let $nextBtn = document.querySelector('#panel-' + index + ' .btn-next');
// 				addEventListeners(index, $nextBtn, typedEl, options);
// 				showButtons($nextBtn);
// 				addScrollListener();
// 			}
// 		}

// 		// Type the first panel
// 		if (index == 0) {
// 			let typed = new Typed(typedEl, options);
// 		}
// 	}
// }


// function typePanel(index) {
// 	let idStr = '#panel-' + index;
// 	// let kids = el.children;
// 	console.log(idStr);

// 	let $typedSrc = document.querySelector(idStr + ' .js-typed-src');
// 	let $typedEl = document.querySelector(idStr + ' .js-typed');

// 	// let callbackFunc = "callback" in typedSrc.dataset ? window[typedSrc.dataset.callback] : console.log;
// 	let $nextBtn = determineTrigger(index);

// 	let options = {
// 		strings: [$typedSrc.innerHTML],
// 		typeSpeed: TYPE_SPEED,
// 		showCursor: false,
// 		onComplete: () => {
// 			// callbackFunc(index);
// 			addEventListeners(index, $nextBtn, options);
// 			showButtons($nextBtn);
// 			// markPanelComplete(index);
// 			// removeTypedSrc($typedSrc);
// 		}
// 	}

// 	let typed = new Typed($typedEl, options);
// }

function typeNextPanel(index) {
	typePanel(index + 1);
}

function addEventListeners(index, btn, options) {
	if (panelClassesContain(index, 'js-decision')) {
		btn.forEach(function (b) {
			buildTabbedPanel(b, index);
		}, this);
	} else {
		btn.addEventListener('click', (e) => {
			typeNextPanel(index);
		});
	}
}

function buildTypedPanel(index) {
	// markPanelComplete(index);
	typePanel(index + 1);
}

function buildTabbedPanel(b, index) {
	prepareTabbedSection(index);
	goToTabbedSection(b, index);
}

function prepareTabbedSection(index) {
	let nextIndex = index + 1;
	let nextBtn = determineTrigger(nextIndex);
	addEventListeners(nextIndex, nextBtn, null);
	showButtons(nextBtn);
}

function goToTabbedSection(btn, index) {

	let tabs = document.querySelectorAll('#panel-'+(index+1)+' .js-tab');
	let btns = document.querySelectorAll('#panel-'+index+' .decision-btns > a');

	let getIndex = () => {
		return index;
	}

	btn.addEventListener('click', (e) => {

		let index = getIndex();
		// markPanelComplete(index);

		btns.forEach((b) => {
			b.classList.remove('js-selected');
		});

		let type = btn.dataset.contentRef;
		btn.classList.add('js-selected');

		tabs.forEach(function (tab) {
			tab.classList.add('js-hidden');

			if (tab.getAttribute('id') == type) {
				tab.classList.remove('js-hidden');
			}
		});

	});
}


// https://stackoverflow.com/questions/29891587/check-if-element-is-between-30-and-60-of-the-viewport
function addScrollListener() {
	var $ = jQuery;
	var timeout;
	$(window).on("load scroll resize", function () {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(function () {
			var $window = $(window),
				hitbox_top = $window.scrollTop() + $window.height() * .3,
				hitbox_bottom = $window.scrollTop() + $window.height() * .6;

			$(".panel").each(function () {
				var $element = $(this),
					element_top = $element.offset().top,
					element_bottom = $element.offset().top + $element.height();

				$element.toggleClass("js-active-panel", hitbox_top < element_bottom && hitbox_bottom > element_top);

				let panel = document.querySelector(".js-active-panel");
				let index = +panel.dataset.index;
				let complete = panel.dataset.complete;

				if (index && complete == "false") {
					console.log(index);
					typePanel(index);
					complete = "true";
				}

			});
		}, 200);

	});
}






// ----
// Panel Helpers
// ----

function panelClassesContain(i, c) {
	let elem = document.querySelector('#panel-' + i);
	return elem.classList.contains(c);
}

function markPanelComplete(i) {
	let elem = document.querySelector('#panel-' + i);
	elem.dataset.complete = true;
}

function isPanelComplete(panelId) {
	let elem = document.querySelector(panelId);
	return elem.dataset.complete;
}

function determineTrigger(i) {
	if (panelClassesContain(i, 'js-decision')) {
		trigger = document.querySelectorAll('#panel-' + i + ' .btn-next');
	} else {
		trigger = document.querySelector('#panel-' + i + ' .btn-next');
	}
	return trigger;
}


function showButtons(btn) {
	let tabbed = btn.length > 1;
	// if( tabbed ) {
	// 	reveal(btn, true);
	// } else {
	// 	reveal(btn);
	// }
}

function removeTypedSrc(elem) {
	let srcEl = elem;
	elem.nextSibling.setAttribute("aria-hidden", "false");
	elem.parentNode.removeChild(srcEl);
}



// ----
// Skip Button
// ----

const SKIP_BTN = document.querySelector('.js-skipBtn');

SKIP_BTN.addEventListener('click', (e) => {
	e.preventDefault();
	let TYPED_ELS = document.querySelectorAll('.panel[data-complete="false"] .js-typed-src');
	let REVEAL_ELS = document.querySelectorAll('.panel[data-complete="false"] .js-reveal');
	let HIDDEN_ELS = document.querySelectorAll('.panel[data-complete="false"] .js-hidden');

	TYPED_ELS.forEach((el) => {
		el.classList.remove('js-typed-src');
	});

	REVEAL_ELS.forEach((el) => {
		el.classList.remove('js-reveal');
	});

	HIDDEN_ELS.forEach((el) => {
		el.classList.remove('js-hidden');
	});
});





// ----
// Panel Callbacks
// ----

// TODO user closest LATER
function hideLaraPic() {
	// console.log('p1 is done');
	// let toHide = document.querySelector('.js-hide');
	// hide(toHide);
}

function showSkipBtn() {
	let btn = document.querySelector('.js-skipBtn');
	reveal(btn);
}

function showLlamaStuff() {
	const EYE = document.querySelector('#llama .eye'),
		JAW = document.querySelector('#llama .jaw'),
		TAIL = document.querySelector('#llama .tail');

	EYE.classList.add("blinking");
	JAW.classList.add("chewing");
	TAIL.classList.add("flicking");
}




// ----
// General Helpers
// ----

// https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function reveal(el, stagger = false) {
	// Stagger aimation if more than one element comes in.
	if (stagger == true) {
		let tm = new TimelineMax();
		tm.staggerTo(el, .2, { delay: 0.5, transformOrigin: "50% 50%", ease: Power2.easeOut, autoAlpha: 1 }, 0.1);
	} else {
		TweenLite.to(el, .2, { delay: 0.5, transformOrigin: "50% 50%", ease: Power2.easeOut, autoAlpha: 1 });
	}
};

function hide(el) {
	TweenLite.to(el, .2, { delay: 0.5, transformOrigin: "50% 50%", scale: 0, ease: Power2.easeOut, autoAlpha: 0 });
}


