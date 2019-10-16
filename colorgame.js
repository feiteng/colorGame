window.onload=function() {
	var colors = [
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(255, 255, 255)",
	"rgb(0, 255, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)"
	]

	var pickedColor = colors[3];

	var squares = document.querySelectorAll(".square")

	var colorDisplay = document.getElementById("colorDisplay")

	var messageDisplay = document.querySelector("#message")

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++)
	{
		// add initial colors
		squares[i].style.backgroundColor = colors[i];
		// add click event listener

		squares[i].addEventListener("click", function(){
			// grab color or clicked color
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) alert("Correct");
			else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
			// compare color to picked color
		});
	}
}