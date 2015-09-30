$(document).ready(function() {
	$(".hot-nav a").click(function(event) {
		/* Act on the event */
		$(this).removeClass('none-border').addClass('with-border').siblings().removeClass('with-border').addClass('none-border');
	});

	$("#content-monthly-hot").hide();
	$("#hot-nav-daily").click(function(event) {
		/* Act on the event */
		$("#content-daily-hot").show();
		$("#content-monthly-hot").hide();
		
	});
	$("#hot-nav-monthly").click(function(event) {
		/* Act on the event */
		$("#content-monthly-hot").show();
		$("#content-daily-hot").hide();
	});
});


