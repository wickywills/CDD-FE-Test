jQuery(document).ready(function(){

	// Init Scrollify plugin [https://github.com/lukehaas/Scrollify]
	jQuery.scrollify({
		section: "section",
		scrollSpeed: 700,
		before: function(i) {
			var active = $(".slide.active");

			active.addClass("remove");
			$("[data-slide=" + i + "]").addClass("active");
			active.removeClass("remove active");

		},
	});


	// Action buttons
	jQuery('.section-actions__content .button').on('click', function(e){
		e.preventDefault();

		// Get the relevant data value for clicked button
		var animation = jQuery(this).attr('data-animation');

		// Remove any previous classes and add new class for animation
		jQuery('.section-actions__giovanni').removeClass('jump spin bounce');
		jQuery('.section-actions__giovanni').addClass(animation);
	});


	// Navigation to section
	jQuery('.section-nav__link').on('click', function(e){
		e.preventDefault();

		var sectionName = jQuery(this).attr('data-section');

		jQuery.scrollify.move("#" + sectionName);

		jQuery('.section-nav__link').removeClass('active');
		jQuery(this).addClass('active');
	});


	// Joke bubble
	jQuery('.section-friend__leonardo').on('click', function(){
		jQuery('.section-friend__joke-bubble').addClass('active');
		jQuery('.section-friend__joke-question').addClass('active');

		setTimeout(function(){
			jQuery('.section-friend__joke-question').removeClass('active');
			jQuery('.section-friend__joke-answer').addClass('active');
		}, 3000);
	});
	
});

jQuery(window).smartresize(function(){


});
