$(document).ready(function(){

		$(function() {
		$('.nav-toggle').on('click', function() {
			$('.sidebar').toggleClass('open');
		});
	});

	$('#btn-caption1').click(function(){

		$('#caption1, #caption2, #caption3').fadeTo('slow', 0.3).slideUp(800);
		$('#thumb-hoogland, #thumb-3october').fadeTo('slow', 0.3);
		$('#row1').slideDown();
	});

	$('#btn-caption2').click(function(){

		$('#caption1, #caption2, #caption3').fadeTo('slow', 0.3).slideUp(800);
		$('#thumb-lakenhal, #thumb-3october').fadeTo('slow', 0.3);
		$('#row2').slideDown();
	});

	$('#btn-caption3').click(function(){

		$('#caption1, #caption2, #caption3').fadeTo('slow', 0.3).slideUp(800);
		$('#thumb-lakenhal, #thumb-hoogland').fadeTo('slow', 0.3);
		$('#row3').slideDown();
	});

	$('.rowbutton').click(function(){
		$('#caption1, #caption2, #caption3, #thumb-lakenhal, #thumb-hoogland, #thumb-3october').slideDown().fadeTo('slow', 1);
		$("#row1, #row2, #row3").slideUp();    	

	});

	$(function() {
		$('.sidebar').children().on('click', function() {
			$('.sidebar').toggleClass('open');
		});
	})

	$(".sidebar a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top -50
	     }, 800, function(){
	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});


});
