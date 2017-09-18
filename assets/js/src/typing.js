// ----
// Typed.js
// ----
const TYPE_SPEED = 5;

// Start the typing elements on pages with the story layout

if(document.querySelector('.page-template-page-story_layout')) {


	// ----
	// Prepare the panels
	// ----

	const PANELS = document.querySelectorAll('.panel');

	// Add ids to each panel and hrefs to buttons.
	// Hook up typing.
	PANELS.forEach((el, index) => {
		el.id = 'panel-'+index;
		let kids = el.children;

		for (let i = 0; i < kids.length; i++) {
			let kid = kids[i];

			addButtonHrefs(kid, index);
			setUpTyping(kid, index);
		}
	});

} // end if












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

function setUpTyping(kid, index) {
	if (kid.classList.contains('js-typed-src')) {
		let typedEl = document.createElement('span');
		typedEl.classList.add('js-typed');
		typedEl.setAttribute('aria-hidden', 'true');
		insertAfter(kid, typedEl);

		let options = {
			strings: [kid.innerHTML],
			typeSpeed: TYPE_SPEED,
			showCursor: false,
			onComplete: () => {
				let nextBtn = document.querySelector('#panel-' + index + ' .btn-next');
				markPanelComplete(index);
				addBtnClickEvent(index, nextBtn, typedEl, options);
				showButtons(nextBtn);
			}
		}

		typeFirstPanel(index, typedEl, options);
	}
}


function typeNextSection(index) {
	let typedSrc = document.querySelector('#panel-' + index + ' .js-typed-src');
	let typedEl = document.querySelector('#panel-'+index+' .js-typed');

	let determineTrigger = function(index) {
		if (panelClassesContain(index, 'js-tabs')) {
			trigger = document.querySelectorAll('#panel-' + index + ' .btn-next');
		} else {
			trigger = document.querySelector('#panel-' + index + ' .btn-next');
		}
		return trigger;
	};

	let nextBtn = determineTrigger(index);

	let options = {
		strings: [typedSrc.innerHTML],
		typeSpeed: TYPE_SPEED,
		showCursor: false,
		onComplete: () => {
			markPanelComplete(index);
			addBtnClickEvent(index, nextBtn, options);
			showButtons(nextBtn);
		}
	}

	let typed = new Typed(typedEl, options);

}



function addBtnClickEvent(index, btn, options) {
	if (!panelClassesContain(index, 'js-tabs')) {
		btn.addEventListener('click', (e) => {
			console.log('clicked');
			hide(btn);
			typeNextSection(index + 1);
		});
	} else {
		btn.forEach(function (element) {
			toggleTabs(element);
		}, this);
	}
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
	elem.classList.add('js-complete');
}

function showButtons(btn) {
	let tabbed = btn.length > 1;
	if( tabbed ) {
		reveal(btn, true);
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






// ----
// Panel Callbacks
// ----

// TODO user closest LATER
function hideLaraPic() {
	console.log('p1 is done');
	let toHide = document.querySelector('.js-hide');
	hide(toHide);
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











function typeFirstPanel(index, typedEl, options) {
  if(index == 0) {
    let typed = new Typed(typedEl, options);
	}
}
// // Function to type next item in typedEls array
// function typeNextInArray() {

// 	// Move through the array
// 	options.elIndex++;
// 	let newIndex = options.elIndex;
// 	let currentEl = TYPED_SRCS[newIndex];
// 	let morePanels = newIndex <= TYPED_ELS.length;

// 	// Allow for data attributes to provide some settings (not really using ATM)
// 	let newTypeSpeed = "speed" in currentEl.dataset ? +currentEl.dataset.speed : TYPE_SPEED;

// 	// Callbacks must be defined below
// 	let callbackFunc = "callback" in currentEl.dataset ? window[currentEl.dataset.callback] : console.log;

// 	// New options set
// 	let newOptions = {
// 		elIndex: newIndex,
// 		startDelay: 500,
// 		strings: [TYPED_SRCS[newIndex].innerHTML],
// 		typeSpeed: newTypeSpeed,
// 		showCursor: SHOW_CURSOR,
// 		callback: callbackFunc(TYPED_SRCS[newIndex]),
// 		onComplete: () => {

// 			markPanelComplete(newIndex);

// 			// If there are remaining panels:
// 			if (morePanels) {
// 				handlePanelTransition(newIndex);
// 			} else {
// 				console.log('done');
// 			}
// 		}
// 	}

// 	let typed = new Typed(TYPED_ELS[newIndex], newOptions);
// }

