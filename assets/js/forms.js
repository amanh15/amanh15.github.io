/*===============================================
  1. Order Form
===============================================*/

jQuery( document ).ready(function( $ ) {
	// variable to hold request
	var request;
	// bind to the submit event of our form
	$("#order-form").submit(function(event){
		// abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);
		// let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();

		// let's disable the inputs for the duration of the ajax request
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);
		$('#result').text('Processing order...');

		// fire off the request to /form.php
		request = $.ajax({
			// url: // works
      url: "https://script.google.com/macros/s/AKfycbzlUgcaa9dbjAyhsGOMtmsXoVLxxHtDrfjGG3YsSKVe9RQczMhO/exec",  // clone
			type: "post",
			data: serializedData
		});

		// callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			// log a message to the console
      console.log(response, textStatus, jqXHR);
			$('#result').html('<a>Received! Thanks for supporting Tsuki Designs.</a>');
			console.log("Hooray, it worked!");
		});

		// callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// log the error to the console
			console.error(
				"We are having issues receiving your order. Please retry or contact us."
			);
		});

		// callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});

		// prevent default posting of form
		event.preventDefault();
	});
});


/*===============================================
  2 Contact Form
===============================================*/

jQuery( document ).ready(function( $ ) {
	// variable to hold request
	var request;
	// bind to the submit event of our form
	$("#contact-form").submit(function(event){
		// abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);
		// let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();

		// let's disable the inputs for the duration of the ajax request
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);
		$('#result').text('Sending message...');

		// fire off the request to /form.php
		request = $.ajax({
			// url: // works
      url: "https://script.google.com/macros/s/AKfycbxmqKqn6HGIQupBpyOF0wS_FQ9IqdDN2563lAIgRE31lq0UYcuC/exec",  // clone
			type: "post",
			data: serializedData
		});

		// callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			// log a message to the console
      console.log(response, textStatus, jqXHR);
			$('#result').html('<a>Received! We will get in touch soon.</a>');
			console.log("Hooray, it worked!");
		});

		// callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// log the error to the console
			console.error(
				"We are having issues receiving your order. Please retry or contact us via our socials."
			);
		});

		// callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});

		// prevent default posting of form
		event.preventDefault();
	});
});
