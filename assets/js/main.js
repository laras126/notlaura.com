
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

	$menulink.click( function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	// For subnav
	// $menuTrigger.click(function(e) {
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	$this.toggleClass('active').next('ul').toggleClass('active');
	// });
		


	// ----
 	// Accordian
 	// ----

 	// Needs to be cleaned up still

  function close_accordion_section() {
        $('.accordion .acc-link').removeClass('active');
        $('.accordion .acc-content').slideUp(300).removeClass('open');
    }
 
    $('.acc-link').on('click', function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');

            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
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


	// ----
	// Misc
	// ----

	// Hack to keep out widows
	// http://css-tricks.com/preventing-widows-in-post-titles/
   
	$('.item-title, .section-title, .main p, .lead').each( function() {
		var wordArray = $(this).text().split(" ");
		if (wordArray.length > 3) {
			wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
			wordArray.pop();
	    	$(this).html(wordArray.join(" "));
	  	}
	});


	// Fit Vids
	 $(".page-body").fitVids();


});

