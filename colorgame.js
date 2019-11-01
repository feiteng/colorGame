window.onload=function() {

	var numSqaures = 6;

	var colors = generateRandomColor(numSqaures);

	var pickedColor = pickColor();

	var squares = document.querySelectorAll(".square")

	var colorDisplay = document.getElementById("colorDisplay")

	var messageDisplay = document.querySelector("#message")

	var h1 = document.querySelector("h1");

	var resetButton = document.querySelector("#reset");

	var easyBtn = document.querySelector("#easyBtn");

	var hardBtn = document.querySelector("#hardBtn");

	var modeButtons = document.querySelectorAll(".mode");

	init();

	function init() {
		for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSqaures = 3 : numSqaures = 6;
			reset();
			});
		}
	}	

	function reset() {
		h1.style.backgroundColor = 'steelblue';
		// generate all new colors
		resetButton.style.backgroundColor = null;
		colors = generateRandomColor(numSqaures);
		// pick new random color
		pickedColor = pickColor();
		// change colors display to picked of squares
		colorDisplay.textContent = pickedColor;
		// change text back to RESET
		resetButton.textContent = 'NEW COLORS'
		// reset status text
		messageDisplay.textContent = "";
		

		for(var i = 0; i < squares.length; i++)
		{
		// add initial colors
			if(colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else
				squares[i].style.display = "none";
		}
		// h1.style.backgroundColor = 'steelblue';
	}



	// easyBtn.addEventListener("click", function(){
	// 	easyBtn.classList.add("selected")
	// 	hardBtn.classList.remove("selected")
	// 	numSqaures = 3;
	// 	colors = generateRandomColor(numSqaures);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i = 0; i < squares.length; i++){
	// 		if(colors[i]){
	// 			squares[i].style.backgroundColor = colors[i];
	// 		}
	// 		else squares[i].style.backgroundColor = '#232323'
	// 	}
	// });

	// hardBtn.addEventListener("click", function(){
	// 	easyBtn.classList.remove("selected")
	// 	hardBtn.classList.add("selected")
	// 	numSqaures = 6;
	// 	colors = generateRandomColor(numSqaures);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i = 0; i < squares.length; i++){
	// 		squares[i].style.backgroundColor = colors[i];
	// 		squares[i].style.display = 'block'
	// 	}
	// });

	resetButton.addEventListener("click", function(){
		// // generate all new colors
		// colors = generateRandomColor(numSqaures);
		// // pick new random color
		// pickedColor = pickColor();
		// // change colors display to picked of squares
		// colorDisplay.textContent = pickedColor;
		// // change text back to RESET
		// resetButton.textContent = 'NEW COLORS'
		// // reset status text
		// messageDisplay.textContent = "";
		// h1.classList.add("update");

		// for(var i = 0; i < squares.length; i++)
		// {
		// // add initial colors
		// 	squares[i].style.backgroundColor = colors[i];
		reset();
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
				messageDisplay.textContent = "Correct!";
				// messageDisplay.background = '#000000'
				resetButton.textContent = 'Play Again?'
				resetButton.style.backgroundColor = 'yellow';
				changeColor(clickedColor);
			}
			else {
				messageDisplay.textContent = 'Try Again';
				messageDisplay.classList.add('messageDisplay');
				this.style.backgroundColor = '#232323';
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