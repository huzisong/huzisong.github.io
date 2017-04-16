$(document).ready(function() {

	$(function() {
	    $('#window').fadeIn(0, function () {
	        fadeItOut();
	    });
	});

	function fadeItIn() {
	    $('#window').fadeTo(2000, 0.4, function () {
	        fadeItOut();
	    });
	}

	function fadeItOut() {
	    $('#window').fadeTo(3000, 0.9, function () {
	        fadeItIn();
	    });
	}

});

