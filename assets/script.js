const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0;
const imgTitle = document.getElementById("img-title");
let contenu = imgTitle.innerHTML;
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function() {
	i --;
	if (i < 0)
	{
		i = slides.length - 1;
	}
	var img = slides[i].image;
	document.querySelector(".banner-img").src= "./assets/images/slideshow/"+ img;
	var newText = slides[i].tagLine;
	imgTitle.innerHTML = newText;
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener
(
	"click", 
	function() 
	{
		i++;
		if(i == slides.length)
		{
			i = 0;
		}
		var img = slides[i].image;
		document.querySelector(".banner-img").src= "./assets/images/slideshow/"+img;
		var newText = slides[i].tagLine;
		imgTitle.innerHTML = newText;	
	}
);

