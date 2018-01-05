
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
	// Smooth scrolling
	// ----

	// https://css-tricks.com/snippets/jquery/smooth-scrolling/
	var header_ht;

	if (window.innerWidth <= 690) {
		header_ht = ($('.site-header').outerHeight());
	} else {
		header_ht = ($('.site-header').outerHeight())*1.5;
	}

	$('a.js-scrollTo[href*="#"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
						scrollTop: target.offset().top - header_ht
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
			}
		}
	});

	// Fit Vids
	$(".main-content").fitVids({ customSelector: 'iframe' });

	$('.btn-reply').on('focus', function() {
		$(this).siblings('.reply-form').css({'opacity': 1, height: 'auto'});
	});

});

