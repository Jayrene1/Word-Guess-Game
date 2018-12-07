# Word-Guess-Game
Hangman clone with vanilla Javascript (ES5)

## Coding with vanilla Javascript
This is a single-page interactive web game that uses bootstrap and javascript. It is my first javascript project. I used it to practice referencing html ID's in javascript, and performing logic with user input via keyboard presses.

## Features
* user guesses game word with keyboard, and receives updating stats and visual feedback
* functions and variables contained in a "game" object
* dynamically updating .svg graphics depicting a hangman stick figure (w/switch statement)
* audio cues for guesses, wins, and losses depending on the game word

## Ideas for improvements
* compatibility with touchscreen input using onscreen keyboard
* alphabet display that shows various colors based on each letter's state
  1. orange: available for guess
  1. blue: correct guess (unavailable)
  1. gray: incorrect guess (unavailable)
* images associated with game word displays upon win
