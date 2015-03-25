/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


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

