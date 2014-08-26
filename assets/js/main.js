/*
Bones Scripts File
Author: Eddie Machado (and Lara duh)
*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
	window.getComputedStyle = function(el, pseudo) {
		this.el = el;
		this.getPropertyValue = function(prop) {
			var re = /(\-([a-z]){1})/g;
			if (prop == 'float') prop = 'styleFloat';
			if (re.test(prop)) {
				prop = prop.replace(re, function () {
					return arguments[2].toUpperCase();
				});
			}
			return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		}
		return this;
	}
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {
	
	/*
	Responsive jQuery is a tricky thing.
	There's a bunch of different ways to handle
	it, so be sure to research and find the one
	that works for you best.
	*/
	
	/* getting viewport width */
	var responsive_viewport = $(window).width();
	

	/* if is below 481px */
	if (responsive_viewport < 481) {
	
	} /* end smallest screen */
	
	/* if is larger than 481px */
	if (responsive_viewport > 481) {

	} /* end larger than 481px */
	

	/* if is above or equal to 768px */
	if (responsive_viewport >= 768) {
	
		/* load gravatars */
		$('.comment img[data-gravatar]').each(function(){
			$(this).attr('src',$(this).attr('data-gravatar'));
		});
		
	}
	
	/* off the bat large screen actions */
	if (responsive_viewport > 1030) {
		
	}
	
    // Basic FitVids
    $("#container").fitVids();

	// Brad Frost toggle menu
	// 
	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');
  
	$menulink.click(function() {
  		$menulink.toggleClass('active');
  		$menu.toggleClass('active');
  		return false;
	});


	// SVG fallback
    // http://css-tricks.com/using-svg/

    if (!Modernizr.svg) {
    	$("#weFish").attr("src", "site/me-fish.png");
		$("#youFish").attr("src", "site/you-fish.png");
		$("#deliverFish").attr("src", "site/deliver-fish.png");
		$("#weFish").attr("src", "site/we-fish.png");
	}

	// Scroll top arrow

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});


	// Fittext.js
	$(".page-title").fitText( 1.2, {maxFontSize: '60px', minFontSize: '32px'} );
	$(".single-title, .post-title").fitText( 1.2, {maxFontSize: '50px', minFontSize: '32px'} );
	$(".callout-quote").fitText( 1.2, {maxFontSize: '28px', minFontSize: '16px'} );


}); /* end of as page load scripts */