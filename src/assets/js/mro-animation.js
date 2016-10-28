jQuery(document).ready(function($) {
	// function animateStart() {
	// 	$('#site-title').hide();
	// }	

 //    $(document).ready(function() {
 //        animateStart();
 //    });

    $('#intro').css('opacity', 0);
	$('#portfolio').waypoint(function() {
	  $('#hero-bg').addClass('animated fadeOut');
	  $('#site-title').addClass('to-black');
	  $('#intro').addClass('animated fadeInLeft');
	}, { offset: '89%' });

	$('#portfolio article').waypoint(function() {
	  // $('#intro').addClass('fadeInLeft');
	  // alert('HI');
	}, { offset: '100%' });
	
	// alert('hi');
});