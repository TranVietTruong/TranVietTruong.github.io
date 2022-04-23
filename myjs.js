jQuery(document).ready(function($) {
	$("#toggle").click(function(event) {
		$("menu ul").slideUp(400);
		$(".menu ul").toggleClass('act');
	});

	function GetRanDom(min, max)
	{
		return Math.floor(Math.random() * (max - min)) + min;
	}


	// 	setInterval(() => {
	//   	// var screenHeigt = $("html,body").height();
	//   	// var screenWidth = $("html,body").width(); 

	//   	var screenHeigt = window.innerHeight;
	//   	var screenWidth = window.innerWidth;

	// 	var startLeft = GetRanDom(0,screenWidth);
	// 	var endLeft = GetRanDom(startLeft-100,startLeft+100);

	// 	var timeRun = GetRanDom(3000,8000);

	// 	var opacity = Math.random() * (1 - 0.2) + 0.2;

	// 	var size = GetRanDom(5,20);

	// 	var snow = document.createElement('i');

	// 	$(snow).addClass('fas fa-heart').css({
	//   		'position':'absolute',
	//   		'z-index': 'auto',
	//   		'color': '#ef2b64',
	//   		'display' : 'block',
	//   		'top': 0,
	//   		'left':startLeft,
	//   		'opacity' : opacity,
	//   		'font-size' : size + 'px'
	// 	})
	// 	.appendTo('body')
	// 	.animate(
	// 	{
	// 	  	'top': screenHeigt - size,
	// 	  	'left': endLeft
	// 	},
	// 	{
	// 		duration: timeRun,
	// 		easing: 'linear',
	// 		complete: function(){
	// 	  		$(this).fadeOut('slow',function(){
	// 	  			$(this).remove();
	// 	  		});
	// 		}

	// 	});
	// },500)

	$("#avatar").click(function(event) {
		document.getElementById('audio').play();
			setTimeout(() => {
			  setInterval(() => {
				  	// var screenHeigt = $("html,body").height();
				  	// var screenWidth = $("html,body").width(); 

				  	var screenHeigt = window.innerHeight;
				  	var screenWidth = window.innerWidth;

					var startLeft = GetRanDom(0,screenWidth);
					var endLeft = GetRanDom(startLeft-100,startLeft+100);

					var timeRun = GetRanDom(3000,8000);

					var opacity = Math.random() * (1 - 0.2) + 0.2;

					var size = GetRanDom(5,20);

					var snow = document.createElement('i');

					$(snow).addClass('fas fa-heart').css({
				  		'position':'absolute',
				  		'z-index': 'auto',
				  		'color': '#ef2b64',
				  		'display' : 'block',
				  		'top': 0,
				  		'left':startLeft,
				  		'opacity' : opacity,
				  		'font-size' : size + 'px'
					})
					.appendTo('body')
					.animate(
					{
					  	'top': screenHeigt - size,
					  	'left': endLeft
					},
					{
						duration: timeRun,
						easing: 'linear',
						complete: function(){
					  		$(this).fadeOut('slow',function(){
					  			$(this).remove();
					  		});
						}

					});
				},500)
			}, 25000);
	});

	$("#about").click(function(event) {
		var vt = $("#ab").offset().top;
		
		$("html,body").animate({scrollTop:vt-100},500);
	});
	$("#skill").click(function(event) {
		var vt = $("#sk").offset().top;
		
		$("html,body").animate({scrollTop:vt-100},500);
	});
	$("#project").click(function(event) {
		var vt = $("#pr").offset().top;
		
		$("html,body").animate({scrollTop:vt-100},500);
	});
	$("#contact").click(function(event) {
		var vt = $("#ct").offset().top;
		
		$("html,body").animate({scrollTop:vt-100},500);
	});
});