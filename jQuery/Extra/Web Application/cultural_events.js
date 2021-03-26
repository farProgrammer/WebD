var count=0;
var images1= new Array('images/img1.jpg','images/img2.jpg','images/img3.jpg','images/img4.jpg','images/img5.jpg','images/img6.jpg','images/img7.jpg');
var effects = new Array('fold','clip','slide','fold','clip','slide','clip');
$(document).ready(function()
{
		var windowWidth = $(window).width();
		$('.part1').width(windowWidth-15);
		$('.part2').width(windowWidth-25);
		$('.part3').width(windowWidth-15);
		$("#next").click(function()
		{	
			if(count == images1.length)
			{
				count = 0;
			}
			$("#showImg").attr("src",images1[count]).hide().show(effects[count],1000);	
			count++;
		})
})