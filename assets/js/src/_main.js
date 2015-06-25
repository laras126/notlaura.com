
$(document).ready(function() {
	
	$('body').addClass('js');

	console.log('Check it: https://github.com/laras126/notlaura.com');


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
	 $(".page-body").fitVids();


});

