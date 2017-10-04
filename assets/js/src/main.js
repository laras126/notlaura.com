
console.log('Check it: https://github.com/laras126/notlaura.com');

// FastClick
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function () {
		FastClick.attach(document.body);
	}, false);
}

// Toggle Menu
// http://www.a11ymatters.com/pattern/mobile-nav/#use-a-semantic-element-for-the-toggle-button
const $toggle = document.querySelector('#toggle'),
			$menu = document.querySelector('#menu');

$toggle.addEventListener('click', function () {
	if ($menu.classList.contains('js-open')) {
		$menu.classList.remove('js-open');
		$toggle.classList.remove('js-open');
	} else {
		$menu.classList.add('js-open');
		$toggle.classList.add('js-open');
	}
});





var $ = jQuery;

jQuery(document).ready(function() {


	// ----
	// Animations (GreenSock)
	//----

	/**
	 * on scroll
	 * if scroll position is same as menus position from top
	 * scroll pos
	 * menu pos
	 *
	 * fix menu
	 *
	 */

	// const RAIL = document.querySelector('.nav-rail'),
	// 			SECTION_NAV = document.querySelector('.section-nav');

	//  function offset(el) {
	// 	var rect = el.getBoundingClientRect(),
	// 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	// 	return { offset: rect.top + scrollTop, scroll: scrollTop };
	// }

	// document.addEventListener('scroll', function() {
	// 	let position = offset(RAIL);
	// 	let sectionNavPos = position.offset;

	// 	if (position.scroll > sectionNavPos) {
	// 		SECTION_NAV.classList.add('fixed');
	// 		RAIL.style.paddingTop = sectionNavPos.toFixed(0) + "px";
	// 	} else {
	// 		SECTION_NAV.classList.remove('fixed');
	// 		RAIL.style.paddingTop = "0";
	// 	}
	// 	console.log(position);
	// });
	// var scrollPos = window.pageYOffset || document.documentElement.scrollTop,
			// menuPos =



	// ----
	// Smooth scrolling
	// ----

	// https://css-tricks.com/snippets/jquery/smooth-scrolling/
	var header_ht;

	if (window.innerWidth <= 690) {
		header_ht = ($('.site-header').outerHeight())/2;
	} else {
		header_ht = ($('.site-header').outerHeight())*1.5;
	}

	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#menu"]')
		.on('click', function() {
  	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var target = $(this.hash);
	  		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  		if (target.length) {
	    		$('html,body').animate({
							scrollTop: target.offset().top - header_ht/2.5
	    		}, 300, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});

				if (target.attr("data-type") == "decision" ){
					return true;
				} else {
					return false;
				}
			}
  	}
 	});

	// Fit Vids
	 $(".main-content").fitVids({ customSelector: 'iframe' });

});

