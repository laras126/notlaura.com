

// FastClick
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function () {
		FastClick.attach(document.body);
	}, false);
}


// var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// // Set any attributes as desired
// shape.setAttribute("cx", getRandomInt(20,100));
// shape.setAttribute("cy", getRandomInt(20, 300));
// shape.setAttribute("r", getRandomInt(1, 10));
// shape.setAttribute("fill", "green");

// document.querySelector('.blog-character').appendChild(shape);

// http://www.a11ymatters.com/pattern/mobile-nav/#use-a-semantic-element-for-the-toggle-button
const $toggle = document.querySelector('#toggle'),
			$menu = document.querySelector('#menu');

$toggle.addEventListener('click', function () {
	if ($menu.classList.contains('js-open')) {
		$menu.classList.remove('js-open');
	} else {
		$menu.classList.add('js-open');
	}
});








var $ = jQuery;

jQuery(document).ready(function() {

	$('body').addClass('js');

	console.log('Check it: https://github.com/laras126/notlaura.com');




	// TODO move to typing.js
	// console.log('hi');

	// const TITLE_TEXT = document.querySelector('.type-title').innerHTML;

	// $('.type-it').typeIt({
	// 	speed: 100,
	// 	cursor: false,
	// 	lifeLike: false
	// })
	// 	.tiType(TITLE_TEXT);
		// .tiSettings({ speed: 100 })
		// .tiType('but now I am typing pretty fasst')
		// .tiDelete(2)
		// .tiType('t!')












	// Pocket request

	// $.ajax({
	// 	url: 'https://getpocket.com/v3/oauth/request',
	// 	data: {
	// 		'consumer_key': '70389-600b69f12a120f79b1312e67',
	// 		'redirect_uri': 'https://notlaura.com'
	// 	},
	// 	contentType: "application/json; charset=utf-8", // this
	// 	dataType: "json", // and this
	// }).done( function() {
	// 	alert('stuff');
	// });



	// ----
	// Animations (GreenSock)
	//----

	// Character 1, header
	// var mainBody = document.querySelectorAll(".main"),
	// 		eyes = document.querySelector(".eyes"),
	// 		pupils = document.querySelector(".pupils"),
	// 		characterArea = document.querySelector(".character-1");

	// 	var tl = new TimelineLite();

	// 	TweenLite.set(mainBody, { y: 150 });

	// // 	console.log(tl);

	// 	tl.set(document.querySelector(".main-header"), { backgroundColor: "green" });

	// 	characterArea.addEventListener("mouseover", () => {
	// 		tl.to(mainBody, 1, {
	// 			y: 0,
	// 			ease: Power1.easeOut
	// 		});
	// 	});

	// 	// function myFunction() {
	// 	setInterval( () => {
	// 		tl.fromTo(eyes, 1, { fill: '#1B75BC' }, { fill: 'white' })
	// 			.fromTo(pupils, 1, { fill: '#1B75BC' }, { fill: 'black' }, '-=1');
	// 	}, 3000);



	// tl.set(document.querySelector(".main-header"), { backgroundColor: "green" });


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

	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#menu"]')
		.on('click', function() {
  	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var target = $(this.hash);
				var header_ht = $('.site-header').outerHeight()+70;
	  		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  		if (target.length) {
	    		$('html,body').animate({
							scrollTop: target.offset().top - header_ht
	    		}, 1000, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
	    	return false;
			}
  	}
 	});



	// Fit Vids
	 $(".main-content").fitVids({ customSelector: 'iframe' });

});

