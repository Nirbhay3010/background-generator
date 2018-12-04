var b=document.querySelector(".color1");
var b1=document.querySelector(".color2");
var a=document.querySelector("h3");
var body = document.getElementById("gradient");

function color()
{
	body.style.background = 
	"linear-gradient(to right, "
	+ b.value
	+", "
	+ b1.value
	+")";
	a.textContent = body.style.background + ";";
}
b.addEventListener("input",color); 

b1.addEventListener("input",color);
