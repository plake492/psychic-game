
psychicLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r,','s','t','u','v','w','x','y','z']

let directios = document.getElementById('directions')
let winsText = document.getElementById('wins-text')
let lossesText = document.getElementById('losses-text')
let guessesLeftText = document.getElementById('guessleft-text')
let userGuessText = document.getElementById('yourguesses-text')
let loseText = document.getElementById('lose-text')

let wins = 0
let losses = 0
let guessLeft = 12

document.onkeyup = function(event) {
    userGuess = event.key;
    let computerGuess = psychicLetter[Math.floor(Math.random() * psychicLetter.length)]
    console.log(computerGuess)

    if (userGuess === computerGuess) {
        wins++; 
    } else {
        guessLeft--;
    } 

    if (guessLeft === 0){
       losses++; guessLeft = 12
    } else if (wins + 1) {
        guessleft = 12
    }
  


winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "guesses left: " + guessLeft;
userGuessText.textContent = "your guesses: " + userGuess; 

   
}