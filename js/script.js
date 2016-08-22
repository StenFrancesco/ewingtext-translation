$(document).ready(function(){

		$(function() {
		$('.nav-toggle').on('click', function() {
			$('.sidebar').toggleClass('open');
		});
	});

	$('#btn-caption1').click(function(){

		$('#caption1, #caption2, #caption3').fadeTo('slow', 0.3).slideUp(800);
		$('#thumb-hoogland, #thumb-3october').fadeTo('slow', 0.3).addClass('hidden-s hidden-xs hidden-m');
		$('#row1').slideDown();
	    $('html, body').animate({
	        scrollTop: $("#thumb-lakenhal").offset().top -100
	    }, 2000);
	});

	$('#btn-caption2').click(function(){

		$('#caption1, #caption2, #caption3').fadeTo('slow', 0.3).slideUp(800);
		$('#thumb-lakenhal, #thumb-3october').fadeTo('slow', 0.3).addClass('hidden-s hidden-xs hidden-m');
		$('#row2').slideDown();
	    $('html, body').animate({
	        scrollTop: $("#thumb-hoogland").offset().top -100
	    }, 2000);

	});

	$('#btn-caption3').click(function(){

		$('#caption1, #caption2, #caption3').fadeTo('slow', 0.3).slideUp(800);
		$('#thumb-lakenhal, #thumb-hoogland').fadeTo('slow', 0.3).addClass('hidden-s hidden-xs hidden-m');
		$('#row3').slideDown();
		$(window).scrollTop($('#portfolio').offset().top);
	    $('html, body').animate({
	        scrollTop: $("#thumb-3october").offset().top -100
	    }, 2000);		

	});

	$('.rowbutton').click(function(){
		$('#caption1, #caption2, #caption3, #thumb-lakenhal, #thumb-hoogland, #thumb-3october').slideDown().fadeTo('slow', 1);
		$("#row1, #row2, #row3").slideUp();
		$('#thumb-3october, #thumb-hoogland, #thumb-lakenhal').removeClass('hidden-s hidden-xs hidden-m');
		$(window).scrollTop($('#portfolio').offset().top);
	    $('html, body').animate({
	        scrollTop: $("#scrolldiv").offset().top -50
	    }, 1000);


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
