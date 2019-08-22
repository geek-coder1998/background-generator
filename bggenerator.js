var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

col1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, " + col1.value + "," + col2.value + ")"
	css.textContent = body.style.background;
});

col2.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, " + col1.value + "," + col2.value + ")";
	css.textContent = body.style.background;
});