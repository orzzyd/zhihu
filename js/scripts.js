$(document).ready(function() {
	var $contentItems=$(".content-item");
	var $contentItemsPreview=$(".content-item-preview");
	$contentItems.hide();
	$contentItemsPreview.show();
	$(".expand-view-all").click(function(event) {
		 // Act on the event 
		$(this).parent().parent().parent().hide().prev().show();
	});
	$(".unexpend").click(function(event) {
		/* Act on the event */
		$(this).parents(".content-item").hide().next().show();
	});
});