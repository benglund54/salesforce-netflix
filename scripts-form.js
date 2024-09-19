pardot.$(function() {
	    
    var $ = window.pardot.$;

	// Add label-left class to the <form> if label alignment is set to Default or Left in form styling
	var $labelAlignment = $('#pardot-form .field-label').css('float');
	if ($labelAlignment == 'left') { $('#pardot-form').addClass('label-left'); }
   
   var url = window.location.pathname;
   if (url.indexOf('3c5myx')) {
      $('#pardot-form .submit input').attr('value','Register');
   }
});