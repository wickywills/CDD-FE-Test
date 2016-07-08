jQuery(document).ready(function(){

	resizeDiv();
	
});

jQuery(window).smartresize(function(){

	resizeDiv();

});

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('section').css({'height': vph + 'px'});
}