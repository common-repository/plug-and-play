jQuery(document).ready(function(){	
	jQuery('#bPress_container .accordion-header:not(.accordion-notification)').click(function(index, elem){
		jQuery('.bPress_service_content').removeClass('bPress_service_content_active');	
		jQuery('#bPress_container .accordion-header i').removeClass('dashicons-arrow-down').addClass('dashicons-arrow-left');
		jQuery(this).find('i').removeClass('dashicons-arrow-left').addClass('dashicons-arrow-down');
		var bPressService = jQuery(this).attr('name');
		console.log('bPressService = '+bPressService);
		jQuery('#'+bPressService).addClass('bPress_service_content_active');
	});
	
	jQuery('#bPress_container .accordion-notification').click(function(){
		jQuery(this).remove();
	}); 
	if(jQuery('#ui-datepicker-div').length>-1){
		setTimeout(function(){
		jQuery('#ui-datepicker-div').removeClass('ui-widget-content');	
		}, 1000)
	}
	var options = {dateFormat: 'dd-mm-yy'};
	jQuery('.bPress_service_content input[type="text"].datePicker').focus(function(){
		jQuery('#ui-datepicker-div').addClass('ui-widget-content');
	});
	jQuery('.bPress_service_content input[type="text"].datePicker').datepicker(options);
	var options = {show24Hours: true};
	jQuery('.bPress_service_content input[type="text"].timePicker').timeEntry(options);																
});