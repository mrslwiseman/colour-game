// REFACTOR THIS TO BE IN AN OBJECT,
// so that there are no loose ends, not cloggin up namespace etc

const game = {


};

















let numSquares = 6;
let colours = [];
let pickedColour;


const SQUARES = document.querySelectorAll(".square");
const colourDisplay = document.querySelector("#colourTitleDisplay");
const body = document.getElementsByTagName("body")[0]
const messageDisplay = document.querySelector("#message")
const h1 = document.querySelector("h1")
const newGameBtn = document.querySelector("#newGame")
const modeBtns = document.querySelectorAll(".mode")


// set up event listeners
init();

function setupModeButtons(){
	// hard easy button event listeners
	modeBtns.forEach(btn => {
	btn.addEventListener("click", function(){
		modeBtns.forEach(x => {
			x.classList.remove("selected")
		})
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

		reset();
	})
})
}

function setupSquares(){
	// ASSIGN EACH SQUARE ITS CLICK HANDLER --------------------------------------------------
// 					      
SQUARES.forEach((square, i) => {
	SQUARES[i].addEventListener("click", sq => {checkColour(sq)})
})
}
3
function init(){
setupModeButtons();
setupSquares();
reset();
}

// NEW GAME BUTTON --------------------------------------------------



newGameBtn.addEventListener("click", reset)

//EASY AND HARD BUTTONS --------------------------------------------------

// loop through buttons, add event handlers
// when button is clicked, 
//loop through all buttons, 
// remove selected class and 
// add selected class to clicked button


function reset(){
	// figure out how many squares to show
	// pick new colours
	// pick a new pickedColour
	// update page to reflect changes

colourDisplay.textContent = pickedColour;

colours = generateRandomColoursArray(numSquares);
pickedColour = pickRandomColour();
colourDisplay.textContent = pickedColour
h1.style.backgroundColor = "#232323";
messageDisplay.textContent = "";
newGameBtn.textContent = "New Colours"
SQUARES.forEach((square, i) => {
	if(colours[i]) {
		SQUARES[i].style.display = "block"
		SQUARES[i].style.backgroundColor = colours[i];
	} else {
		SQUARES[i].style.display = "none"
	}
	
})

}



// CHECK IF ANSWER IS CORRECT --------------------------------------------------

function checkColour(sq){
	//console.log(e.target.style.backgroundColor)

	if(sq.target.style.backgroundColor === pickedColour){
				messageDisplay.textContent = "Correct";
				newGameBtn.textContent = "Play Again"
				changeColours(pickedColour)
				h1.style.backgroundColor = pickedColour;

	} else {
		messageDisplay.textContent = "Wrong"

		sq.target.style.backgroundColor = "#232323"

	}
}



// WHEN CORRECT, CHANGE ALL SQUARES TO PICKED COLOUR --------------------------------------------------
function changeColours(colour) {
	// loop through all squares
		SQUARES.forEach((square, i) => {
		SQUARES[i].style.backgroundColor = colour;

})
}













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
	let random = Math.floor((Math.random() * numSquares))
	return colours[random]
}



