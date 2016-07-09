jQuery(document).ready(function(){

	resizeDiv();

	// Action buttons
	jQuery('.section-actions__content .button').on('click', function(e){
		e.preventDefault();

		// Get the relevant data value for clicked button
		var animation = jQuery(this).attr('data-animation');

		// Remove any previous classes and add new class for animation
		jQuery('.section-actions__giovanni').removeClass('jump spin bounce');
		jQuery('.section-actions__giovanni').addClass(animation);
		

				
	});
	
});

jQuery(window).smartresize(function(){

	resizeDiv();

});

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('section').css({'height': vph + 'px'});
}