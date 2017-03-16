let colours = generateRandomColoursArray(6);


//select squares

const SQUARES = document.querySelectorAll(".square");
const colourDisplay = document.querySelector("#colourTitleDisplay");
const body = document.getElementsByTagName("body")[0]
const messageDisplay = document.querySelector("#message")
let pickedColour = pickRandomColour()
const h1 = document.querySelector("h1")


// GENERATE ARRAY OF RANDOM RGB COLOURS --------------------------------------------------
function generateRandomColoursArray(num) {
let arr = [];
	for(let i = 0; i<num; i++){
		
			arr.push(generateRandomRGB())
	}
	return arr;
}

// GENERATE RANDOM RGB  --------------------------------------------------

function generateRandomRGB(){

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`

}

// PICK THE RANDOM COLOUR FOR PLAYER TO GUESS --------------------------------------------------
function pickRandomColour(){
	let random = Math.floor((Math.random() * 6))
	return colours[random]
}




colourDisplay.textContent = pickedColour;

// CHECK IF ANSWER IS CORRECT --------------------------------------------------

function checkColour(sq){
	//console.log(e.target.style.backgroundColor)

	if(sq.target.style.backgroundColor === pickedColour){
				messageDisplay.textContent = "Correct";
				changeColours(pickedColour)
				h1.style.backgroundColor = pickedColour;

	} else {
		messageDisplay.textContent = "Wrong"

		sq.target.style.backgroundColor = "#232323"

	}
}



// ASSIGN EACH SQUARE ITS RANDOM COLOUR --------------------------------------------------
// 					      CLICK HANDLER
SQUARES.forEach((square, i) => {
	SQUARES[i].style.backgroundColor = colours[i];
	SQUARES[i].addEventListener("click", sq => {checkColour(sq)})
})


// WHEN CORRECT, CHANGE ALL SQUARES TO PICKED COLOUR --------------------------------------------------
function changeColours(colour) {
	// loop through all squares
		SQUARES.forEach((square, i) => {
		SQUARES[i].style.backgroundColor = colour;

})
}