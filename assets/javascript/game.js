// global variable declaration
var guessesLeft;
var wins = 0;
var losses = 0;
var allLetters = ["a", "b" "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// game theme using list of words
var words: ["jimi hendrix", "eddie van halen", "eric clapton", "slash", "george harrison", "brian may", "john mayer", "steve vai", "prince", "jack white"];

// game object
var game = {
    randomWord: "",
    randomWordSplit: [],
    lettersCorrect: [],
    lettersWrong: [],
    lettersRemaining: [],

// game functions
    initializeGame: function () {
        this.randomWord = "";
        this.randomWordSplit = [];
        this.lettersCorrect = [];
        this.lettersWrong = [];
        this.lettersRemaining = allLetters;
        guessesLeft = 6;
    }



}