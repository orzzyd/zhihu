$(document).ready(function() {
	bindItemMousedownEvent();
	bindItemMouseupEvent();
});
function bindItemMousedownEvent(){
	$(".always-topics-items").mousedown(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).addClass('draging');
		var $itemOffset=$(this).offset();
		var $mouseOffsetX=event.pageX-$itemOffset.left;
		var $mouseOffsetY=event.pageY-$itemOffset.top;
		var $pageX=event.pageX;
		var $pageY=event.pageY;

		$dragingItem=$(this);
		$cloneItem=$(this).clone(true).insertAfter($(this)).css('visibility', 'hidden').hide();
		
		$(document).mousemove(function(event) {
			/* Act on the event */
			event.preventDefault();
			$dragingItem.appendTo($dragingItem.parent());
			$dragingItem.css({
				position: 'fixed',
				left: event.pageX-$mouseOffsetX-$(document).scrollLeft(),
				top: event.pageY-$mouseOffsetY-$(document).scrollTop(),
			});

			if((event.pageX-$pageX<=135)&&(event.pageX-$pageX>=-135)&&($dragingItem.offset().top>=250)&&($dragingItem.offset().top<=500)){
				$cloneItem.show();
				if (($dragingItem.offset().top>=250)&&($dragingItem.offset().top<330)) {
					$tempIndex=0;
				};
				if (($dragingItem.offset().top>=330)&&($dragingItem.offset().top<400)) {
					$tempIndex=1;
				};
				if (($dragingItem.offset().top>=400)&&($dragingItem.offset().top<=500)) {
					$tempIndex=2;
				};

				$cloneItem.appendTo($cloneItem.parent());
				$cloneItem.insertBefore($cloneItem.parent().children().eq($tempIndex));
			}else{
				$cloneItem.hide();
			}
		});

	});
}
function bindItemMouseupEvent(){
	$(document).mouseup(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".always-topics-items").removeClass('draging');
		$(document).unbind('mousemove');

		if ($cloneItem) {
			$cloneItem.css('visibility', 'visible').show();
		};
		
		$dragingItem.remove();
	});
}

var $dragingItem=null;
var $cloneItem=null;
var $tempIndex=-1;