// global variable declaration
var guessesLeft;
var wins = 0;
var losses = 0;

// game theme using list of words
var words = ["accordion", "bagpipe", "glockenspiel", "ocarina", "saxaphone", "ukulele", "theremin", "mandolin", "harpsichord", "dulcimer"];

// game object
var game = {
    randomWord: "",
    randomWordSplit: [],
    lettersWrong: [],
    lettersBlank: 0,
    lettersBlankAndCorect: [],

// game functions
// resets the game
    Initialize: function () {
        this.randomWord;
        this.randomWordSplit = [];
        this.lettersBlankAndCorect = [];
        this.lettersWrong = [];
        document.getElementById("lettersWrong-tracker").innerHTML = this.lettersWrong;
        this.lettersBlank = 0;
        guessesLeft = 6;

        document.getElementById("wins-tracker").innerHTML = "Wins: " + wins;
        document.getElementById("losses-tracker").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft-tracker").innerHTML = "Guesses Left: " + guessesLeft;
        console.log("Game Initialized");
    },
// chooses a random word to guess
    chooseWord: function () {
        this.randomWord = words[Math.floor(Math.random() * words.length)];
        console.log("Random word chosen: " + this.randomWord);

        this.randomWordSplit = this.randomWord.split("");
        console.log("Random word split: " + this.randomWordSplit);

        this.lettersBlank = this.randomWordSplit.length;
        console.log("Letter Length: " + this.lettersBlank);

        for (var i = 0; i < this.lettersBlank; i++) {
            this.lettersBlankAndCorect.push("_");
            document.getElementById("randomWord").innerHTML = " " + this.lettersBlankAndCorect.join(" ");

        }
        console.log("Letters Blank and Correct: " + this.lettersBlankAndCorect);
    },

// passes in user input to check against random word
    checkGuess: function(guess) {
        console.log("guess: " + guess);
        var goodGuess = false;

        for (var i = 0; i < this.lettersBlank; i++) {
            if (this.randomWord[i] == guess) {
                goodGuess = true;
            }
        }
        console.log("goodGuess: " + goodGuess);

        if (goodGuess) {
            for (var i = 0; i < this.lettersBlank; i++) {
                if (this.randomWord[i] == guess) {
                    this.lettersBlankAndCorect[i] = guess;
                    document.getElementById("randomWord").innerHTML = " " + this.lettersBlankAndCorect.join(" ");
                    this.playSound("goodGuess");
                }
            }
        } else if (this.lettersWrong.indexOf(guess) == -1) {
            this.lettersWrong.push(guess);
            document.getElementById("lettersWrong-tracker").innerHTML = this.lettersWrong;
            guessesLeft--;
            document.getElementById("guessesLeft-tracker").innerHTML = "Guesses Left: " + guessesLeft;
            this.playSound("wrongGuess");
        }

        console.log("Letters Blank and Correct: " + this.lettersBlankAndCorect);
        console.log("Letters wrong: " + this.lettersWrong);
        console.log("Guesses remaining: " + guessesLeft);
    },

// plays game sound on win, depending on word chosen
    playSound: function(instrument) {
        var audio;
        switch (instrument) {
            case "goodGuess": audio = new Audio('assets/audio/goodGuess.wav');
            break;
            case "wrongGuess": audio = new Audio('assets/audio/wrongGuess.wav');
            break;
            case "accordion": audio = new Audio('assets/audio/accordion.wav');
            break;
            case "bagpipe": audio = new Audio('assets/audio/bagpipe.wav');
            break;
            case "glockenspiel": audio = new Audio('assets/audio/glock.wav');
            break;
            case "ocarina": audio = new Audio('assets/audio/ocarina.wav');
            break;
            case "saxaphone": audio = new Audio('assets/audio/saxaphone.wav');
            break;
            case "ukulele": audio = new Audio('assets/audio/ukulele.wav');
            break;           
            case "theremin": audio = new Audio('assets/audio/theremin.wav');
            break;
            case "mandolin": audio = new Audio('assets/audio/mandolin.wav');
            break;
            case "harpsichord": audio = new Audio('assets/audio/harpsichord.wav');
            break;
            case "dulcimer": audio = new Audio('assets/audio/dulcimer.wav');
            break;
            case "loss": audio = new Audio('assets/audio/loss.wav')
            break;
        }
        audio.play();
    },

// runs to check if the game has ended, and restarts game if true
    gameOver: function() {
        if (this.randomWordSplit.toString() == this.lettersBlankAndCorect.toString()) {
            wins++;
            document.getElementById("winning-word").innerHTML = "The winning word was " + this.randomWord + "!";
            this.playSound(this.randomWord);
            this.Initialize();
            this.chooseWord();
            console.log("| Wins: " + wins + " Losses: " + losses + " |")
            return true;
        } else if (guessesLeft == 0) {
            losses++;
            document.getElementById("winning-word").innerHTML = "You lost... The winning word was " + this.randomWord + ".";
            this.playSound("loss");
            this.Initialize();
            this.chooseWord();
            console.log("| Wins: " + wins + " Losses: " + losses + " |")
            return true;
        } else {
            return false;
        }
    }
}

// displays stickman and hangman images
/*function stickmanImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    document.getElementById("stickman").appendChild(img);
}*/

// updates stickman/hangman images
function displayImage() {
switch (guessesLeft) {
    case 5: document.getElementById("stickman").src="assets/images/Stick Figure_partial_1.svg";
        document.getElementById("hangman").src="assets/images/Hangman Figure_partial_1.svg";
    break;
    case 4: document.getElementById("stickman").src="assets/images/Stick Figure_partial_2.svg";
        document.getElementById("hangman").src="assets/images/Hangman Figure_partial_2.svg";
    break;
    case 3: document.getElementById("stickman").src="assets/images/Stick Figure_partial_3.svg";
        document.getElementById("hangman").src="assets/images/Hangman Figure_partial_3.svg";
    break;
    case 2: document.getElementById("stickman").src="assets/images/Stick Figure_partial_4.svg";
        document.getElementById("hangman").src="assets/images/Hangman Figure_partial_4.svg";
    break;
    case 1: document.getElementById("stickman").src="assets/images/Stick Figure_partial_5.svg";
        document.getElementById("hangman").src="assets/images/Hangman Figure_partial_5.svg";
    break;
    case 0: document.getElementById("stickman").src="assets/images/Stick Figure_partial_6_GONE.svg";
        document.getElementById("hangman").src="assets/images/Hangman Figure_partial_6_FULL.svg";    
    break;
    default: document.getElementById("stickman").src="assets/images/Stick Figure_selection.svg";
        document.getElementById("hangman").src="assets/images/Stick Figure_partial_6_GONE.svg";
};
}

// calls to start game
game.Initialize();
game.chooseWord();
document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    //validates user input to letter value only
    isAlphaNumeric = /^[a-z]+$/i.test(guess);
    console.log("Is alphanumeric: " + isAlphaNumeric);

    if (isAlphaNumeric) {
        game.checkGuess(guess);
        displayImage();
        game.gameOver();
    }
}
