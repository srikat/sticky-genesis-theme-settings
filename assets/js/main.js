jQuery(function($) {

	// add div.heading-links.
	$('#main-sortables').before('<div class="heading-links"></div>');

	// declare an empty array having the ids of the various sections.
	var ids = [];

	// populate the `ids` array with the value of `id` attribute for each section.
	$('.postbox').each(function(i) {
		ids.push($(this).attr('id'));
	});

	// this function takes an array as a parameter. For each array element construct the list item and push to `arr` array. Finally add the `arr` array wrapped in unordered list tags to div.heading-links.
	function disp(headings) {
		var arr = [];

		for (var i = 0; i < headings.length; i++) {
			arr.push('<li><a href="#' + ids[i] + '">' + headings[i].innerHTML + '</a></li>');
		}

		$(".heading-links").append('<ul>' + arr.join('') + '</ul>');
	}

	// convert all `.postbox .hndle span` elements to an array and pass to the disp() function.
	disp( $(".postbox .hndle span").toArray() );

	// declare an integer variable with admin bar height plus margin between the sections.
	var offset = 32 + 20;

	// function to set offset depending on screen width.
	function setOffset() {
		if(window.innerWidth > 1536) {
			offset = 32 + 46 + 20;
		} else if(window.innerWidth > 817 && window.innerWidth < 1537) {
			offset = 32 + 88 + 20;
		}
	}

	// http://stackoverflow.com/a/1974797/778809
	// bind to the resize event of the window object.
	$(window).on("resize", function () {
		setOffset();
		// invoke the resize event immediately.
	}).resize();

	// smooth scrolling. https://css-tricks.com/snippets/jquery/smooth-scrolling/
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - offset
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
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

})
