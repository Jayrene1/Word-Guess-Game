// global variable declaration
var guessesLeft;
var wins = 0;
var losses = 0;
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// game theme using list of words
var words = ["jimi hendrix", "eddie van halen", "eric clapton", "slash", "george harrison", "brian may", "john mayer", "steve vai", "prince", "jack white"];

// game object
var game = {
    randomWord: "",
    numSpaces: 0,
    randomWordSplit: [],
    lettersCorrect: [],
    lettersWrong: [],
    lettersRemaining: [],
    lettersBlank: 0,
    lettersBlankAndCorect: [],

// game functions
// resets the game
    Initialize: function () {
        this.randomWord;
        this.numSpaces = 0;
        this.randomWordSplit = [];
        this.lettersBlankAndCorect = [];
        this.lettersCorrect = [];
        this.lettersWrong = [];
        document.getElementById("lettersWrong-tracker").innerHTML = this.lettersWrong;
        this.lettersRemaining = allLetters;
        this.lettersBlank = 0;
        guessesLeft = 6;

        document.getElementById("wins-tracker").innerHTML = wins;
        document.getElementById("losses-tracker").innerHTML = losses;
        document.getElementById("guessesLeft-tracker").innerHTML = guessesLeft;
        console.log("Game Initialized");
    },
// chooses a random word to guess
    chooseWord: function () {
        this.randomWord = words[Math.floor(Math.random() * words.length)];
        console.log("Random word chosen: " + this.randomWord);


        this.randomWordSplit = this.randomWord.split(" ");
        console.log("Random word split: " + this.randomWordSplit);

        this.numSpaces = this.randomWordSplit.length - 1;
        console.log("Number of Spaces: " + this.numSpaces);


        for(var i = 0; i < this.randomWordSplit.length; i++){
          for(var j = 0; j < this.randomWordSplit[i].length; j++){
            this.lettersBlank++;
          }
        }

        console.log("Letter Length: " + this.lettersBlank);

        for (var i = 0; i < this.randomWord.length; i++) {
          if(this.randomWord[i] == " "){
            this.lettersBlankAndCorect.push(" ");
          }
          else{
            this.lettersBlankAndCorect.push("_");
          }
            //console.log(this.lettersBlankAndCorect.join(" "));
            document.getElementById("randomWord").innerHTML = " " + this.lettersBlankAndCorect.join("");

        }
        console.log("Letters Blank and Correct: " + this.lettersBlankAndCorect);
    },

// passes in user input to check against random word
    checkGuess: function(guess) {
        console.log("guess: " + guess);
        var goodGuess = false;

        for (var i = 0; i < this.lettersBlank + this.numSpaces; i++) {
            if (this.randomWord[i] == guess) {
                goodGuess = true;
            }
        }
        console.log("goodGuess: " + goodGuess);

        if (goodGuess) {
            for (var i = 0; i < this.lettersBlank + this.numSpaces; i++) {
                if (this.randomWord[i] == guess) {
                    this.lettersBlankAndCorect[i] = guess;
                    document.getElementById("randomWord").innerHTML = " " + this.lettersBlankAndCorect.join("");
                }
            }
        } else if (this.lettersWrong.indexOf(guess) == -1) {
            this.lettersWrong.push(guess);
            document.getElementById("lettersWrong-tracker").innerHTML = this.lettersWrong;
            guessesLeft--;
            document.getElementById("guessesLeft-tracker").innerHTML = guessesLeft;
        }

        console.log("Letters Blank and Correct: " + this.lettersBlankAndCorect);
        console.log("Letters wrong: " + this.lettersWrong);
        console.log("Guesses remaining: " + guessesLeft);
    },

// runs to check if the game has ended, and restarts game if true
    gameOver: function() {

        if (this.randomWord == this.lettersBlankAndCorect.join("").toString()) {
            wins++;
            this.Initialize();
            this.chooseWord();
            console.log("| Wins: " + wins + " Losses: " + losses + " |")
            return true;
        } else if (guessesLeft == 0) {
            losses++;
            this.Initialize();
            this.chooseWord();
            console.log("| Wins: " + wins + " Losses: " + losses + " |")
            return true;
        } else {
            return false;
        }
    }
}

// calls to start game
game.Initialize();
game.chooseWord();
document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    game.checkGuess(guess);
    game.gameOver();
}