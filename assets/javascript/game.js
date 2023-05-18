// Creating a wordGuessGame object that will house all of our logic and variables.
const wordGuessGame = {
  // Object of all words that can be chosen, along with their image.
  wordsToPick: {
    // Words and their associated images
    nintendo: { picture: "neon.jpg" },
    neon: { picture: "neon.jpg" },
    tamagotchi: { picture: "neon.jpg" },
    aquanet: { picture: "aquanet.jpg" },
    glitter: { picture: "glitter.jpg" },
    supercool: { picture: "supercool.jpg" },
    atari: { picture: "flinstones.jpeg" },
    pogs: { picture: "gnarly.jpg" },
    walkman: { picture: "radical.png" },
    radical: { picture: "radical.png" },
    vhs: { picture: "radical.png" }
  },
  wordInPlay: null,
  lettersOfTheWord: [],
  matchedLetters: [],
  guessedLetters: [],
  guessesLeft: 0,
  totalGuesses: 0,
  letterGuessed: null,
  wins: 0,

  // Sets up the game by choosing a random word, initializing variables, and updating the display.
  setupGame() {
    const wordKeys = Object.keys(this.wordsToPick);
    this.wordInPlay = wordKeys[Math.floor(Math.random() * wordKeys.length)];
    this.lettersOfTheWord = this.wordInPlay.split("");
    this.rebuildWordView();
    this.processUpdateTotalGuesses();
  },

// Updating the page and game state based on the user's guessed letter.
updatePage(letter) {
  if (this.guessesLeft === 0) {
    this.restartGame();
  } else {
    this.updateGuesses(letter);
    this.updateMatchedLetters(letter);
    this.rebuildWordView();
    if (this.updateWins()) {
      this.restartGame();
    }
  }
},

  // Handles incorrect guesses by updating the guessed letters, decreasing remaining guesses, and updating the display.
  updateGuesses(letter) {
    if (
      !this.guessedLetters.includes(letter) &&
      !this.lettersOfTheWord.includes(letter)
    ) {
      this.guessedLetters.push(letter);
      this.guessesLeft--;
      document.querySelector("#guesses-remaining").textContent =
        this.guessesLeft;
      document.querySelector("#guessed-letters").textContent =
        this.guessedLetters.join(", ");
    }
  },

  // Sets the initial number of guesses based on the length of the word.
  processUpdateTotalGuesses() {
    this.totalGuesses = this.lettersOfTheWord.length + 5;
    this.guessesLeft = this.totalGuesses;
    document.querySelector("#guesses-remaining").textContent =
      this.guessesLeft;
  },

  // Updates the matched letters array if the guessed letter is in the word.
  updateMatchedLetters(letter) {
    for (const char of this.lettersOfTheWord) {
      if (letter === char && !this.matchedLetters.includes(letter)) {
        this.matchedLetters.push(letter);
      }
    }
  },

  // Rebuilds the word view display with correctly guessed letters and underscores for unguessed letters.
  rebuildWordView() {
    let wordView = "";
    for (const char of this.lettersOfTheWord) {
      if (this.matchedLetters.includes(char)) {
        wordView += char;
      } else {
        wordView += "&nbsp;_&nbsp;";
      }
    }
    document.querySelector("#current-word").innerHTML = wordView;
  },

  // Restarts the game by resetting variables and updating the display.
  restartGame() {
    document.querySelector("#guessed-letters").textContent = "";
    this.wordInPlay = null;
    this.lettersOfTheWord = [];
    this.matchedLetters = [];
    this.guessedLetters = [];
    this.guessesLeft = 0;
    this.totalGuesses = 0;
    this.letterGuessed = null;
    this.setupGame();
    this.rebuildWordView();
  },

  // Checks if the user has won the game by matching all letters in the word.
  updateWins() {
    let win = this.matchedLetters.length > 0;
    for (const char of this.lettersOfTheWord) {
      if (!this.matchedLetters.includes(char)) {
        win = false;
        break;
      }
    }
    if (win) {
      this.wins++;
      document.querySelector("#wins").textContent = this.wins;
      document.querySelector("#word-image").innerHTML =
        "<img class='word-image' src='assets/images/" +
        this.wordsToPick[this.wordInPlay].picture +
        "' alt='" +
        this.wordInPlay +
        "'>";
      return true;
    } else {
      return false;
    }
  }
};

// Initialize the game when the page loads.
wordGuessGame.setupGame();

// Event listener for key presses.
document.onkeyup = function(event) {
  const letterGuessed = String.fromCharCode(event.which).toLowerCase();
  wordGuessGame.updatePage(letterGuessed);
};
