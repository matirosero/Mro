jQuery(document).ready(function($) {
	// function animateStart() {
	// 	$('#site-title').hide();
	// }	

 //    $(document).ready(function() {
 //        animateStart();
 //    });
 	var i = 1;

	function isEven(value) {
		if (value%2 == 0)
			return true;
		else
			return false;
	}

    $('#intro, #portfolio .project-link-container').css('opacity', 0);
	$('#portfolio').waypoint(function() {
	  $('#hero-bg').addClass('animated fadeOut');
	  $('#site-title').addClass('to-black');
	  $('#intro').addClass('animated fadeInLeft');
	}, { offset: '89%' });

	$('#portfolio .section-title').waypoint(function() {
		$('#portfolio .section-title').addClass('to-black');
	}, { offset: '90%' });


	
    var ppWaypoint = $('.project-link-container').waypoint(function(direction) {
        //check the direction
        if(direction == 'down') {

            if ($('#hero #site-title').css("float") == "none" ){
	            //add the class to start the animation
	            $(this.element).addClass('animated fadeInUp');
	        } else {
	        	console.log(i);
	        	console.log(isEven(i));

	        	if ($(this.element).hasClass('showcase')) {
	        		$(this.element).addClass('animated fadeInUp');
	        	}

	        	if (isEven(i) == true) {
	        		console.log('even');
	        		$(this.element).addClass('animated fadeInLeft');
	        		i++
	        	} else {
	        		console.log('odd');
	        		$(this.element).addClass('animated fadeInRight');
	        		i++
	        	}
	        }
            //then destroy this waypoint, we don't need it anymore
            this.destroy();
        }
    }, {
        //Set the offset
        offset: '80%'
    });
	// alert('hi');
});