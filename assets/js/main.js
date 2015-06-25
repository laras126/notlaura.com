
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



	// ----
	// Delicious Feed
	// ----

	// Included in the footer of each page.
	
	// $.ajax({
	// 	url: 'http://feeds.delicious.com/v2/json/notlaura',
	// 	jsonp: 'callback',
	// 	dataType: 'jsonp',

	// 	success: function( data ) {
	// 		var items = [Math.floor(Math.random()*items.length)];
	// 		$.each( data, function(key,val) {
	// 			var title = val.d,
	// 				date = val.dt,
	// 				url = val.u,
	// 				desc = val.t;

	// 			var html = '<li>';
	// 				html += '<h4><a href="' + url + '" target=\"blank\">' + title + '</a></h4>';
	// 				html += '<p class="meta">' + date + '</p>';
	// 				html += '<p>' + desc + '</p>';

	// 				html += '</li>';
	// 			$('.items').append(html);
	// 		} );
	// 	}
	// });


	// Fit Vids
	 $(".page-body").fitVids();


});

