// изменение высоты навбара

var navbar = document.getElementById("navbar");

var prevHeight = 0;

window.onscroll = function changeNavbarHeight()
{
	if(document.documentElement.scrollTop > prevHeight){
		document.getElementById("navbar").style.height = "6vh";
	}
	else{
		document.getElementById("navbar").style.height = "8vh";
	}
	prevHeight = document.documentElement.scrollTop;
}

// parallax

var parallaxElements = document.getElementsByClassName("parallax");

var parallaxElementsNumber = parallaxElements.length;

document.addEventListener("scroll", function(e) { DoParallax(e); });

function DoParallax(){
	let offsetY = (window.scrollY / window.innerHeight * 10) - 5;

	for(var i = 0; i < parallaxElementsNumber; i++){
		parallaxElements[i].style.top = document.documentElement.scrollTop;
	}
}