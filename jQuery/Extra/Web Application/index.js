var count = -1;
var images1 = new Array('images/banner01.jpg',
'images/banner02.jpg','images/banner03.jpg',
'images/banner04.jpg');
function changeImage()
{
	var c = count1();
	document.getElementById('banner').src = images1[c];
}

function count1()
{
	if(count==images1.length-1)
	{
		count=-1;
	}
	count += 1;
	return count;
}
$(document).ready(function()
{
		var windowWidth = $(window).width();
		$('.part1').width(windowWidth-15);
		$('.menus').width(windowWidth-15);
		$('.main').width(windowWidth-15);
		$("#menu1").mouseenter(function()
		{
			$('ul:visible').hide();
			$('#list1').show();
		})
		$("#menu2").mouseenter(function()
		{	
			$('ul:visible').hide();
			$('#list2').show();
		})
		$("#menu3").mouseenter(function()
		{	
			$('ul:visible').hide();
			$('#list3').show();
		})
		$("#menu4").mouseenter(function()
		{	
			$('ul:visible').hide();
			$('#list4').show();
		})
		$("#menu5").mouseenter(function()
		{	
			$('ul:visible').hide();
			$('#list5').show();
		})
		$("#menu6").mouseenter(function()
		{	
			$('ul:visible').hide();
		})
		$("#menu7").mouseenter(function()
		{	
			$('ul:visible').hide();
		})
		$("#sl2").mouseenter(function()
		{	
			$('#sublist1list4').show();
		})
		$("#sl1").mouseenter(function()
		{	
			$('#sublist1list4').hide();
		})
		$(".part1").mouseenter(function()
		{
			$('ul:visible').hide();
		})
		$(".part2").mouseenter(function()
		{
			$('ul:visible').hide();
		})
		setInterval('changeImage()',5000);
		$('#sec1').addClass('s1');
		$('#sec2').addClass('s2');
		$('#sec3').addClass('s2');
		$('#sec1').click(function()
		{
			$('#sec1').removeClass('s2').addClass('s1');
			$('#sec2').removeClass('s1').addClass('s2');
			$('#sec3').removeClass('s1').addClass('s2');
		})
		$('#sec2').click(function()
		{
			$('#sec1').removeClass('s1').addClass('s2');
			$('#sec2').removeClass('s2').addClass('s1');
			$('#sec3').removeClass('s2').addClass('s2');
		})
		$('#sec3').click(function()
		{
			$('#sec1').removeClass('s1').addClass('s2');
			$('#sec2').removeClass('s1').addClass('s2');
			$('#sec3').removeClass('s2').addClass('s1');
		})
})