

// Blog Header Character
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


var $main = document.querySelectorAll('.bc-main'),
		$bubbles = document.querySelectorAll(".bc-bubble"),
		$body = document.querySelectorAll(".bc-body"),
		$mouth = document.querySelector(".bc-mouth");
		$innerMouth = document.querySelector(".bc-inner-mouth"),
		$eyeball = document.querySelector(".bc-eyeball");

var tl = new TimelineLite();

for (var i = 0; i < $bubbles.length; i++) {
	$bubbles[i].style.opacity = 1;
	$bubbles[i].style.fill = "indianred";
}

// $bubbles.forEach(function() {
// 	this.style.opacity = 1;
// }, this);

tl.from($main, 1, { x: -300, ease: Power2.easeOut });

// Mouth In
tl.to([$mouth, $innerMouth], 1, { x: -20, ease: SlowMo.ease.config(0.7, 0.7, false) });

// Body inflate
tl.to($body, 2, { scale: 1.1, ease: Power2.easeIn }, "-=1.0");

// Mouth Out
tl.to([$mouth, $innerMouth], 1, { x: 0, ease: Elastic.easeOut.config(1, 0.7), force3D: true });

// Fill body
tl.to($body, 0.25, { scale: 1, ease: Power2.easeIn }, "-=1.0");

// Blow bubbles
tl.staggerFrom($bubbles, 2, { scale: 0.5, opacity: 0, delay: 0.1, ease: Elastic.easeInOut, force3D: true }, 0.1, "-=2.0");





// var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// // Set any attributes as desired
// shape.setAttribute("cx", getRandomInt(20,100));
// shape.setAttribute("cy", getRandomInt(20, 300));
// shape.setAttribute("r", getRandomInt(1, 10));
// shape.setAttribute("fill", "green");

// document.querySelector('.blog-character').appendChild(shape);











var $ = jQuery;

jQuery(document).ready(function() {

	$('body').addClass('js');

	console.log('Check it: https://github.com/laras126/notlaura.com');

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

	// ----
	// Typed.js
	// ----

	// Get an array of all elements to be typed.
	// const TYPED_SRCS = document.querySelectorAll('.js-typed-src');
	// const TYPED_ELS = document.querySelectorAll('.js-typed');
	// const TYPE_SPEED = 30,
	// 			SHOW_CURSOR = false;

	// var options = {
	// 	elIndex: 0,
	//   strings: [TYPED_SRCS[0].innerHTML],
	//   typeSpeed: TYPE_SPEED,
	//   showCursor: SHOW_CURSOR,
	//   onComplete: () => {
  // 		typeNextInArray();
	//   },
	// }

	// // Start the typing elements, starting with index 0
	// // var typed = new Typed(TYPED_ELS[0], options);

	// // Function to type next item in typedEls array
	// function typeNextInArray() {

	// 	// Move through the array
	// 	options.elIndex++;
	//   let newIndex = options.elIndex;
	// 	let currentEl = TYPED_SRCS[newIndex];

	//   // Allow for data attributes to provide some settings
	//   let newTypeSpeed = "speed" in currentEl.dataset ? +currentEl.dataset.speed : TYPE_SPEED;
	//   let callbackFunc = "callback" in currentEl.dataset ? currentEl.dataset.callback : console.log('no call back');


	//   // New options set
  // 	let newOptions = {
  // 		elIndex: newIndex,
  // 		startDelay: 500,
  // 		strings: [TYPED_SRCS[newIndex].innerHTML],
  // 		typeSpeed: newTypeSpeed,
	// 	  showCursor: SHOW_CURSOR,
  // 		onComplete: () => {
  // 			if (newIndex + 1 <= TYPED_ELS.length - 1) {
	//   			return typeNextInArray();
	//   			eval(currentEl.dataset.callback);
	//   		} else {
	//   			console.log('done');
	//   		}
  // 		}
  // 	}

  // 	let typed = new Typed(TYPED_ELS[newIndex], newOptions);
	// }


	// function executeFunctionFromData(){
	//   var d = 'hello' // Save `data-myattr` to d; (Obviously, this is just a hardcoded value as an example)
	//   window[d](); // Execute the function.
	// }



	function executeFunctionFromData(data){
    // var d = data;
	}


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

	$('a[href*=#]')
		.not('[href="#"]')
		.not('[href="#menu"]')
		.on('click', function() {
  	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    		var target = $(this.hash);
	  		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  		if (target.length) {
	    		$('html,body').animate({
	      			scrollTop: target.offset().top
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

