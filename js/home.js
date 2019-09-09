$(document).ready(function(){
	$("header").click(function() {
	  document.location.href = 'index.html';
	});

	$( window ).resize(function() {
	  if ($(window).width() < 650) {
	  	$(".proj1text").css("visibility","hidden");
	  	$(".proj2text").css("visibility","hidden");
	  	$(".proj3text").css("visibility","hidden");
	  	$("input").prop('checked', false);
	  	$("nav").css("visibility","hidden");
	  }
	  else{
	  	$(".proj1text").css("visibility","visible");
	  	$(".proj2text").css("visibility","visible");
	  	$(".proj3text").css("visibility","visible");
	  	$("input").prop('checked', false);
	  	$("nav").css("visibility","visible");
	  }
	});

	$("#work1").hover(function() {
		$("#proj1img").addClass("hovering");
		$(".proj1text").addClass("proj1texthover");
		$(".proj1text").removeClass("proj1textnon");
		if ($(window).width() < 850) {
			$(".proj1text").css("visibility","visible");
			// $("#proj1img").addClass("hovering");
			}
	});

	$("#work1").mouseleave(function() {
		$("#proj1img").removeClass("hovering");
		$(".proj1text").addClass("proj1textnon");
		$(".proj1text").removeClass("proj1texthover");
		if ($(window).width() < 850) {
			$(".proj1text").css("visibility","hidden");
		}
		else{
			$(".proj1text").css("visibility","visible");
		}
	});

	$("#work2").hover(function() {
		$("#proj2img").addClass("hovering");
		$(".proj2text").addClass("proj2texthover");
		$(".proj2text").removeClass("proj2textnon");
		if ($(window).width() < 850) {
			$(".proj2text").css("visibility","visible");
		}
	});

	$("#work2").mouseleave(function() {
		$("#proj2img").removeClass("hovering");
		$(".proj2text").addClass("proj2textnon");
		$(".proj2text").removeClass("proj2texthover");
		if ($(window).width() < 850) {
			$(".proj2text").css("visibility","hidden");
			}
	});

	$("#work3").hover(function() {
		$("#proj3img").addClass("hovering");
		$(".proj3text").addClass("proj3texthover");
		$(".proj3text").removeClass("proj3textnon");
		if ($(window).width() < 850) {
			$(".proj3text").css("visibility","visible");
		}
	});

	$("#work3").mouseleave(function() {
		$("#proj3img").removeClass("hovering");
		$(".proj3text").addClass("proj3textnon");
		$(".proj3text").removeClass("proj3texthover");
		if ($(window).width() < 850) {
			$(".proj3text").css("visibility","hidden");
			}
	});
});