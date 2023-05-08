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

var i = 0;
const imgTitle = document.getElementById("img-title");
var contenu = imgTitle.innerHTML;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
var positionDot = 0;

//function left click

arrowLeft.addEventListener
(
	"click", function()
{
	i --;
	if (i < 0)
	{
		i = slides.length - 1;
	}
	var img = slides[i].image;
	document.querySelector(".banner-img").src= "./assets/images/slideshow/"+ img;
	var newText = slides[i].tagLine;
	imgTitle.innerHTML = newText;
	dotPosition = i;
	dotChange();
});

//function right click

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
		dotPosition = i;
		dotChange();
	}
);

//div dot creation

for (let i = 0; i < slides.length; i++)
{
const newDot = document.createElement("div");
newDot.classList = "dot";
dots.appendChild(newDot);
}

//function changing dot

var dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected");

function dotChange()
{
	for(let i = 0; i < dot.length; i++)
	{
		if(i === dotPosition)
		{
			dot[i].classList.add("dot_selected");
		} 
		else
		{
			dot[i].classList.remove("dot_selected");
		}
	}
}