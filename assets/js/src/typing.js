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


function setupPanel(id) {
	var panel = Object.create(Panel);
	panel.id = id;
	panel.el = document.querySelector("#panel-" + panel.id);
	panel.complete = false;
	panel.created = false;
	panel.fired = false;
	// panel.panelType = "type" in panel.el.dataset ? panel.el.dataset.type : "typed";
	// panel.nextTrigger = UI.getNextTrigger(panel.id);

	// // Options for "Typed" panels
	// if( panel.panelType == "typed" ) {
	// 	panel.stringToType = UI.getStringToType(panel.id);
	// 	panel.typedResultEl = UI.createTypedResultEl(panel.id);

	// 	// Options for Typed plugin
	// 	panel.typedOpts = {
	// 		strings: [stringToType],
	// 		typeSpeed: Helpers.defaultTypingSpeed,
	// 		showCursor: false,
	// 		onComplete: Helpers.onTypingComplete
	// 	}
	// }

	return panel;
}


var Panel = {

	getId() {
		return this.id;
	},

	getNextTrigger(id) {
		var triggers = document.querySelectorAll('#panel-' + id + ' .btn-next');
		return triggers;
	},

	getStringToType(id) {
		var el = document.querySelector("#panel-" + id + ' .js-typed-src');
		return el.innerHTML;
	}

};


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
		this.createPanels();
	},

	createPanels() {
		this.panelElements.forEach((DOMelement, index) => {
			// Connect the element with this panel via this ID - TODO: use a data attr. or rel instead.
			DOMelement.id = 'panel-' + index;

			// Create panel obj for each element
			var panel = setupPanel(index);
			panel.created = true;
			this.setUpPanelChildren(index);
			this.panels.push(panel);

		});
	},

	getPanel(id) {
		var panel = this.panels.find((panel) => panel.id == id);
		return panel;
	},

	getNextPanel(id) {
		var nextPanelId = id + 1;
		var nextPanel = this.getPanel(nextPanelId);
		return nextPanel;
	},

	setUpPanelChildren(id) {
		var panel = this.getPanel(id);
		var nextPanel = this.getNextPanel(id);
		var kids = panel.el.children;

		// Analyze all element children – not a terribly efficient way to do this...
		for (let i = 0; i < kids.length; i++) {
			var kid = kids[i];
			var isNextButton = Boolean(kid.classList.contains('btn-next'));

			// Single button
			if (isNextButton) {
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

};


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
		this.createPanels();
	},

	createPanels() {
		this.panelElements.forEach((DOMelement, index) => {
			// Connect the element with this panel via this ID - TODO: use a data attr. or rel instead.
			DOMelement.id = 'panel-' + index;

			// Create panel obj for each element
			var panel = setupPanel(index);
			panel.created = true;
			panel.setUpChildren();
			this.panels.push(panel);

		});
	},


});

var App = setupApp();
App.init();

console.log(App.panels);


// ********************************
// ********************************


if(document.querySelector('.page-template-page-story_layout')) {

	// Type first panel
	document.addEventListener("DOMContentLoaded", function (event) {
		// var firstPanel = panelsArr[0];
		// typeIt(firstPanel);
		// addScrollListener();
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
// General Helpers
// ----

