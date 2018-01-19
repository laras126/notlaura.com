/*
 * To Mike, if you're reading this!
 * I recently completed Kyle Simpson's Deep JS Foundations class on
 * Frontend Masters and wanted to refactor this from an ES6 class to the
 * OLOO (Objects Linked to Other Objects) pattern he describes in the class.

 * @link https://frontendmasters.com/courses/javascript-foundations/
 * @link https://stackoverflow.com/questions/29788181/kyle-simpsons-oloo-pattern-vs-prototype-design-pattern

 * This feature is the type-out-a-panel effect on the homepage of https://notlaura.com.
*/



var Helpers = {
	defaultTypingSpeed: 0,

	onTypingComplete(panel) {
		this.showButtons(panel.nextTrigger);
		panel.complete = true;
	},

	// https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
	insertAfter(referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	},

	reveal(el, stagger = false) {
		// Stagger animation if more than one element comes in.
		if (stagger === true) {
			var tm = new TimelineMax();
			tm.staggerTo(el, .2, { delay: 0.5, transformOrigin: "50% 50%", ease: Power2.easeOut, autoAlpha: 1 }, 0.1);
		} else {
			TweenLite.to(el, .2, { delay: 0.5, transformOrigin: "50% 50%", ease: Power2.easeOut, autoAlpha: 1 });
	}
	}

};

var UI = Object.assign( Object.create(Helpers), {

	init() {

	},

	showButtons(btns) {
		var tabbed = Boolean(btns.length > 1);
		if(tabbed) this.reveal(btns, true);
		else this.reveal(btns);
	},

	createTypedResultEl(id) {
		var referenceEl = this.typingSrc;
		var div = document.createElement('div');
		var resultEl = document.querySelector("#panel-" + id + ' .js-typed');
				div.classList.add('js-typed', 'panel-content');
				div.setAttribute('aria-hidden', 'true');
				this.insertAfter(referenceEl, div);
		return resultEl;
	}
});


// ******************************************
// ******************************************


function setupApp() {
	var app = Object.create(Application);
	app.panels = [];

	return app;
}

var Application = Object.assign( Object.create(UI), {
	panelElements: document.querySelectorAll('.panel'),

	init() {
		this.panelElements.forEach((DOMelement, index) => {
			// Create panel obj for each element
			var panel = setupPanel(id = index);

			// Add an id to each panel
			DOMelement.id = 'panel-' + index;

			panel.created = true;
			panel.setUpChildren();
			this.panels.push(panel);

		});
	},

	return panel;
}


var Panel = {

	// Setting up Panel Functions
	setUpChildren() {
		var kids = this.el.children;
		var nextPanelId = this.id + 1;
		var nextPanel = this.getNextPanel();

		for (let i = 0; i < kids.length; i++) {
			var kid = kids[i];

			// Single button
			if (kid.classList.contains('btn-next')) {
				kid.setAttribute('href', '#panel-' + nextPanelId);
			}

			// Multiple buttons
			if (kid.classList.contains('js-decision')) {

				// Add hrefs to links within buttons within li's!
				for (let i = 0; i < kid.children.length; i++) {
					kid.children[i].setAttribute('href', '#panel-' + nextPanelId);
				}

				kid.addEventListener('click', (e) => {
					var nextPanel = this.getNextPanel();
					var el = e.target;
					var btns = document.querySelectorAll('#panel-' + this.id + ' button');

					this.complete = true;
					Helpers.showButtons(nextPanel.nextTrigger);

					btns.forEach((b) => {
						b.classList.remove('js-selected');
					});

					for (let i = 0; i < kid.children.length; i++) {
						kid.children[i].classList.remove('js-selected');
					}

					if (el && el.tagName == "BUTTON") {
						var btn = el;
						showTab(nextPanel, btn);
					}
				});
			}
		}
	},

});

var App = setupApp();
App.init();



// ******************************************
// ******************************************


function setupPanel(id) {
	var panel = Object.create(Panel);
	panel.id = id;
	panel.el = document.querySelector("#panel-" + panel.id);
	panel.complete = false;
	panel.created = false;
	panel.fired = false;
	panel.panelType = "type" in panel.el.dataset ? panel.el.dataset.type : "typed";
	panel.nextTrigger = UI.getNextTrigger(panel.id);

	// Options for "Typed" panels
	if( panel.panelType == "typed" ) {
		panel.stringToType = UI.getStringToType(panel.id);
		panel.typedResultEl = UI.createTypedResultEl(panel.id);

		// Options for Typed plugin
		panel.typedOpts = {
			strings: [stringToType],
			typeSpeed: Helpers.defaultTypingSpeed,
			showCursor: false,
			onComplete: Helpers.onTypingComplete
		}
	}

	return panel;
}


var Panel = {

	getNextTrigger(id) {
		var triggers = document.querySelectorAll('#panel-' + id + ' .btn-next');
		return triggers;
	},

	getStringToType(id) {
		var el = document.querySelector("#panel-" + id + ' .js-typed-src');
		return el.innerHTML;
	},

	getNextPanel(id) {
		var nextId = id + 1;

		// TODO panelsArr here
		var nextPanel = panelsArr.find((panel) => panel.id == nextId);

		return nextPanel;
	}
};


// ********************************
// ********************************


if(document.querySelector('.page-template-page-story_layout')) {

	UI.panelElements.forEach((el, index) => {
		// Create panel obj for each element
		var p = new Panel(index);

		// Add an id to each panel
		el.id = 'panel-' + index;

		// Mark objects created and set up children (buttons)
		p.created = true;
		p.setUpChildren();

		panelsArr.push(p);
	});


	// Type first panel
	document.addEventListener("DOMContentLoaded", function (event) {
		var firstPanel = panelsArr[0];
		typeIt(firstPanel);
		addScrollListener();
	});

}; // end selector check


function typeIt(panel) {
	panel.fired = true;
	if (!panel.complete && panel.panelType == "typed") {
		var typed = new Typed(panel.typedResultEl, panel.typedOpts);
		if(panel.id == 2) { // TODO: Remove hardcoded panel (probably when data is put into CMS)
			runBlinkingAnimation("#panel-2 .character-1");
		}
	}
}

function showTab(panel, btn) {
	var tabs = document.querySelectorAll('#panel-' + panel.id + ' .js-tab');
	var type = btn.dataset.contentRef;

	tabs.forEach((tab) => {
		tab.classList.add('js-hidden');

		if (tab.getAttribute('id') == type) {
			tab.classList.remove('js-hidden');
		}
	});

	btn.classList.add('js-selected');
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

			$('.panel').each(function () {
				var $element = $(this),
					element_top = $element.offset().top,
					element_bottom = $element.offset().top + $element.height();

					$element.toggleClass("js-active-panel", hitbox_top < element_bottom && hitbox_bottom > element_top);

				});

				PANELS.forEach((el, index) => {

					if( el.classList.contains('js-active-panel') ) {

						// Get panel obj from element if
						var str = el.id;
						var int = str.replace(/[^\d.]/g, '');
						var currPanel = panelsArr.find((currPanel) => {
							return currPanel.id == int;
						});

						// Type panel
						if( !currPanel.fired ) {
							typeIt(currPanel);
						}
					}
				});

			}, 200);

	});
}






// ----
// Panel Helpers
// ----




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


