$(document).ready(function(){	
	$("#mycarousel").carousel({interval: 2000});			
	$("#carousel-button").click(function(){
		if($("#carousel-button").children("span").hasClass("fa-pause")){
			$("#mycarousel").carousel("pause");	
			$("#carousel-button").children("span").removeClass("fa-pause");
			$("#carousel-button").children("span").addClass("fa-play");		
		} 
		else if($("#carousel-button").children("span").hasClass("fa-play")){
			$("#mycarousel").carousel("cycle");	
			$("#carousel-button").children("span").removeClass("fa-play");
			$("#carousel-button").children("span").addClass("fa-pause");		
		} 	
	});

	$("#loginButton").click(function(){
		$("#loginModal").modal('toggle');
	});
	$("#closeLogin").click(function () {
		$("#loginModal").modal('hide');
	});
	$("#closeLoginBtn").click(function () {
		$("#loginModal").modal('hide');
	});
	
	$("#reserveButton").click(function () {
		$("#reserveModal").modal('toggle');
	});
	$("#closeReserve").click(function () {
		$("#reserveModal").modal('hide');
	});
	$("#closeReserveBtn").click(function () {
		$("#reserveModal").modal('hide');	
	});
});

	
