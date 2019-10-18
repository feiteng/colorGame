window.onload=function() {
	var colors = generateRandomColor(6);

	var pickedColor = pickColor();

	var squares = document.querySelectorAll(".square")

	var colorDisplay = document.getElementById("colorDisplay")

	var messageDisplay = document.querySelector("#message")

	var h1 = document.querySelector("h1");

	var resetButton = document.querySelector("#reset");

	resetButton.addEventListener("click", function(){
		// generate all new colors
		generateRandomColor(6);
		// pick new random color
		pickedColor = pickColor();
		// change colors display to picked of squares
		colorDisplay.textContent = pickedColor;

		h1.style.backgroundColor = '#232323';

		for(var i = 0; i < squares.length; i++)
		{
		// add initial colors
			squares[i].style.backgroundColor = colors[i];
		}
	});

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++)
	{
		// add initial colors
		squares[i].style.backgroundColor = colors[i];
		// add click event listener

		squares[i].addEventListener("click", function(){
			// grab color or clicked color
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor, pickedColor);
			if(clickedColor === pickedColor) 
			{
				
				h1.style.backgroundColor = clickedColor;
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				resetButton.textContent = 'Play Aagin?'
			}
			else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
			// compare color to picked color
		});
	}

	function changeColor(color){
		// loop through all squares
		// change each color to match given color
		for(var i = 0; i < color.length; i++)
		{
			squares[i].style.backgroundColor = color;
		}	
	}

	function pickColor() {
		var rand = Math.floor(Math.random() * colors.length);
		return colors[rand];
	}

	function generateRandomColor(len) {
		var arr = [];
		// add random colors to array
		for(var i = 0; i < len; i++)
			arr.push(randomColor());
		return arr;
	}

	function randomColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}