$(document).ready(function()
{	
	var windowWidth = $(window).width();
	$('.part1').width(windowWidth-15);
	$('.part2').width(windowWidth-25);
	$('.part3').width(windowWidth-15);
	$("#sec1").find('table').eq(2).show();
	$("h3").click(function()
	{
		$(this).next("table").slideDown("slow").siblings("table:visible").slideUp();
	})
})