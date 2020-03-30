// ADD NAV
$(document).ready(function (){
	  $("#nav-placeholder").load("nav.html");
	  //ADD FOOTER
	  $("#footer-placeholder").load("footer.html");
	  // NAV ADD UNDERLINE ON ACTIVE

	var pathname = window.location.pathname;
	  // console.log(pathname);
	  if(pathname == "/lynx.html"){
		  $('#header').addClass('lynxyellowbg');

		}
		else if(pathname == "/podyssey.html"){
		  $('#header').addClass('podysseybluebg');
		}
		else if(pathname == "/moodiq.html"){
		  $('#header').addClass('moodiqorangebg');
		}
		else if(pathname == '/nistar.html'){
		  $('#header').addClass('nistbluebg');
		}

		else if(pathname == "/index.html" || pathname == "/about.html"){
			 $('#about').addClass('active');
		}

	});

var windowsize = $(window).width();

// RESIZE WINDOW 
var half = $('.half');
var halfwidth = half.width()/1.92;

//Fix size of yellow on low fidelity

var lowfiimage = $('#lynxlofi');
var imageheight = lowfiimage.height();
var lowfisec = $('.lofiyellow');


var podysseyfinal = $('.sectionwidenopadding img');
var podysseyfinaldiv = $('#bluebgheight');
var podysseyimageheight = podysseyfinal.height();

$(window).load(function() {
		half.css('height', halfwidth);
		if(imageheight != 0){
			lowfisec.css('height', imageheight);
		}
		console.log('here');
		console.log(podysseyimageheight);
		//Flip first image in header
		$('#header').css('transform', 'scaleY(-1)');
		$('header').css('transform', 'scaleY(-1)');
		hover();
		if(podysseyimageheight != 0){
			podysseyfinaldiv.css('height', podysseyimageheight);
			console.log(podysseyimageheight);
		}

	});

$(window).resize(function() {
	halfwidth = half.width()/1.92;
	// console.log("ooo");
	// console.log(halfwidth);

	half.css('height', halfwidth);


	imageheight = lowfiimage.height();
	podysseyimageheight = podysseyfinal.height();

	lowfisec.css('height', imageheight);
	windowsize = $(window).width();
	podysseyfinaldiv.css('height', podysseyimageheight);
	hover();

});

// HOVER CHANGE IMAGE LYNX


$("#applogo").mouseover(function () {
	this.src= "img/lynx/HoverLynxLogo.png";
}).mouseout(function () {
  this.src= "img/lynx/LynxLogo1.png";
});

$("#wordmark").mouseover(function () {
	this.src= "img/lynx/HoverLynxWordmark.png";
}).mouseout(function () {
  this.src= "img/lynx/LynxWordmark1.png";
});




// HOVER LYNX
function hover(){
	windowsize = $(window).width();
	// console.log("hover");
	if(windowsize>=700){
		$(".first").removeClass("nothover");
		$(".second").addClass("nothover");
		$(".third").addClass("nothover");
		$(".fourth").addClass("nothover");
		console.log('addimg');
		$(".middlesec img").css('display', 'flex');
		$(".smallimagesview").css('display', 'none');
		$(".leftsec").css('text-align','right');
		// $(".middlesec").append('<img src="img/lynx/gifs/Create1Fixed.gif" alt="Gif showing possible application views" id="lynxphonegif"');

	$(".hoverbutton").mouseenter(function () {
		//remove 4 and add image src
		if($(this).hasClass("nothover")){
			// console.log("has hover");
			$(".hoverbutton").addClass("nothover");
		$(this).removeClass('nothover');
		 if ($(this).hasClass('first')){
		 	// console.log("first");
		 	$("#lynxphonegif").attr("src","img/lynx/gifs/Create1Fixed.gif");

		 }
		 else if ($(this).hasClass('second')){
		 	// console.log("second");
		 	$("#lynxphonegif").attr("src","img/lynx/gifs/Connect1Fixed.gif");
		 }
		 else if ($(this).hasClass('third')){
		 	// console.log("third");
		 	$("#lynxphonegif").attr("src","img/lynx/gifs/Create2Fixed.gif");
		 }
		 else {
		 	// console.log("fourth");
		 	$("#lynxphonegif").attr("src","img/lynx/gifs/Communicate1Fixed.gif");
		 }
		} }).mouseout(function () {

		  });

	}
		 else{
		 	//remove and add images
		 	$(".middlesec img").css('display', 'none');
		 	$(".smallimagesview").css('display', 'flex');
		 	$(".leftsec").css('text-align','left');
			$(".first").removeClass("nothover");
			$(".second").removeClass("nothover");
			$(".third").removeClass("nothover");
			$(".fourth").removeClass("nothover");
		 }
}


//SLIDESHOW
var slideIndex = 0;
var max = 2;

// Next/previous controls
function plusSlides(n) {
	console.log("origina"+slideIndex);
	console.log(n);
  	showSlides(n);
}

function showSlides(n) {
  console.log(slideIndex);
  if (n == 1 ) {
  	if(slideIndex < max){
	  	slideIndex = slideIndex+1;
	  }
	  else{
	  	slideIndex = 0;
	  }
  }
  else if (n == -1) {
  	if(slideIndex == 0){
	  	slideIndex = 2;
	  }
	  else{
	  	slideIndex = slideIndex-1;
	  }
  }

  if(slideIndex == 0){
  		//update caption and image
  	$("#slideshowimg").attr("src","img/nist/slideshow1.png");
  	$(".slideshowcap").replaceWith("<p class='slideshowcap caption'>Active shooter Scenario</p>");
  }
  else if(slideIndex == 1){
	$("#slideshowimg").attr("src","img/nist/slideshow2.png");
  	$(".slideshowcap").replaceWith("<p class='slideshowcap caption'>Fire Scenario</p>");
  }
  else{
  	$("#slideshowimg").attr("src","img/nist/slideshow3.png");
  	$(".slideshowcap").replaceWith("<p class='slideshowcap caption'>EMS Scenario</p>");

  }
  
}
