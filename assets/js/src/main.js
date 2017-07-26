

$(document).ready(function() {

	$('body').addClass('js');

	console.log('Check it: https://github.com/laras126/notlaura.com');



	// ----
	// Typed.js
	// ----

	// Get an array of all elements to be typed.
	const TYPED_SRCS = document.querySelectorAll('.js-typed-src');
	const TYPED_ELS = document.querySelectorAll('.js-typed');
	const TYPE_SPEED = 20,
				SHOW_CURSOR = false;

	var options = {
		elIndex: 0,
	  strings: [TYPED_SRCS[0].innerHTML],
	  typeSpeed: TYPE_SPEED,
	  showCursor: SHOW_CURSOR,
	  onComplete: () => {
  		typeNextInArray();
	  },
	}

	// Start the typing elements, starting with index 0
	var typed = new Typed(TYPED_ELS[0], options);

	// Function to type next item in typedEls array
	function typeNextInArray() {

		// Move through the array
		options.elIndex++;
	  let newIndex = options.elIndex;
		let currentEl = TYPED_SRCS[newIndex];

	  // Allow for data attributes to provide some settings
	  let newTypeSpeed = "speed" in currentEl.dataset ? +currentEl.dataset.speed : TYPE_SPEED;
	  let callbackFunc = "callback" in currentEl.dataset ? currentEl.dataset.callback : console.log('no call back');


	  // New options set
  	let newOptions = {
  		elIndex: newIndex,
  		startDelay: 500,
  		strings: [TYPED_SRCS[newIndex].innerHTML],
  		typeSpeed: newTypeSpeed,
		  showCursor: SHOW_CURSOR,
  		onComplete: () => {
  			if (newIndex + 1 <= TYPED_ELS.length - 1) {
	  			return typeNextInArray();
	  		} else {
	  			console.log('done');
	  		}
  		}
  	}

  	let typed = new Typed(TYPED_ELS[newIndex], newOptions);
	}


	// function executeFunctionFromData(){
	//   var d = 'hello' // Save `data-myattr` to d; (Obviously, this is just a hardcoded value as an example)
	//   window[d](); // Execute the function.
	// }



	function executeFunctionFromData(data){
    // var d = data;
	}

	// ----
	// Toggle Menu
	// ----

	// TODO: better fallback for non-JS - adding a .js class but it causes the nav to blink
	// Look into Modernizr for that

	var $menu = $('#menu'),
	    $menulink = $('.menu-link'),
	    $menuTrigger = $('.has-subnav > a');

	$menulink.on( 'click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});



	// ----
	// Smooth scrolling
	// ----

	// https://css-tricks.com/snippets/jquery/smooth-scrolling/

	$('a[href*=#]:not([href=#menu])').click(function() {
  	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    		var target = $(this.hash);
	  		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  		if (target.length) {
	    		$('html,body').animate({
	      			scrollTop: target.offset().top
	    		}, 1000);
	    	return false;
			}
  	}
 	});



	// Fit Vids
	 $(".page-body").fitVids({ customSelector: 'iframe' });

});

