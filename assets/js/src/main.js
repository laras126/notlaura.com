
var $ = jQuery;

jQuery(document).ready(function() {

	$('body').addClass('js');

	console.log('Check it: https://github.com/laras126/notlaura.com');



	// ----
	// Animations (GreenSock)
	//----

	// Character 1 (Blog)

	// const mainBody = document.querySelectorAll(".main"),
	// 			eyes = document.querySelector(".eyes"),
	// 			pupils = document.querySelector(".pupils"),
	// 			characterArea = document.querySelector(".character-1");

	// 	var tl = new TimelineLite();

	// 	TweenLite.set(mainBody, { y: 150 });

	// 	console.log(tl);

	// 	// tl.set(document.querySelector(".main-header"), { backgroundColor: "green" });

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

