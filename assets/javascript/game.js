var wordList = [
	"neon",
	"aquanet",
	"glitter",
	"supercool",
	"flintstones",
	"gnarly",
	"radical"
];
var blanksToFill = ""; // Index of the current word in the array
var guessedLetters = []; // Stores the letters the user guessed
var wrongGuesses = [];
var blanksToFill = 0;
var filledInLetters = [];
var guessedWrong = [];
var lettersGuessed = "";

var wins = 0; // How many wins
var losses = 0; // how many losses
var maxGuesses = 10; // Maximum number of tries player has

function game() {
	// resetGame();
	maxGuesses = 10;
	//how the word is selected at random
	blanksToFill = wordList[Math.floor(Math.random() * wordList.length)];
	blanksToFill = filledInLetters.length;

	console.log(blanksToFill);

	filledInLetters = [];

	//

	guessedWrong = [];

	// document.onkeyup = function(event) {
	// 	console.log(event.key);
	// 	var blanksToFill = wordList[0];
	// 	guessedLetters.push(event.key);
	//
	for (var i = 0; i < blanksToFill; i++) {
		//
		filledInLetters.push("_ ");
	}
	//
	correctGuesses.push(event.key);
	//

	// remainingGuesses = maxTries;

	// Use Math.floor to round the random number down to the nearest whole.

	console.log(blanksToFill);
	// for (var i = 0; i < blanksToFill.length; i++) {
	// 	if (blanksToFill[i] === " ") {
	// 		guessingWord.push(" ");
	// 	}
	// }

	// Clear out arrays
	guessedLetters = [];
	guessingWord = [];

	// Build the guessing word and clear it out
	// for (var i = 0; i < blanksToFill.length; i++) {
	// 	guessingWord.push("_");
	// }

	// // Show display
	// updateDisplay();

	//  Updates the display on the HTML Page

	// Display how much of the word we've already guessed on screen.
	// var guessingWordText = "";
	// for (var i = 0; i < guessingWord.length; i++) {
	// 	guessingWordText += guessingWord[i];
	// }

	// takes a letter and finds all instances of
	// appearance in the string and replaces them in the guess word.
	function checkGuess(letter) {
		// Array to store positions of letters in string
		var letterFound = false;

	

		// Loop through word finding all instances of guessed letter, store the indicies in an array.
		for (var i = 0; i < blanksToFill.length; i++) {
			if (blanksToFill[i] === letter) {
				positions.push(i);
			}
		}
		if (positions.length <= 0) {
			remainingGuesses--;
			// Loop through all the indicies and replace the '_' with a letter.
			for (var i = 0; i < positions.length; i++) {
				guessingWord[positions[i]] = letter;
				// 	}
				if ()}
		}
	}
	// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building
}
