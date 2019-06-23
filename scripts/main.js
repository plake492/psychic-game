let psychicLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let computerGuess; 
let letterGuess = [];

let directios = document.getElementById('directions')
let winsText = document.getElementById('wins-text')
let lossesText = document.getElementById('losses-text')
let guessesLeftText = document.getElementById('guessleft-text')
let userGuessText = document.getElementById('yourguesses-text')
let loseText = document.getElementById('lose-text')

let wins = 0;
let losses = 0;
let guessesLeft = 9;



// Function to start the game and reset letter
function selectLetter () {
    computerGuess = psychicLetter[Math.floor(Math.random() * psychicLetter.length)];
    console.log(computerGuess);
}
// selectLetter()

// Reset And Change Wins or Losses
function resetGameWins () {
    guessesLeft = 9;
    letterGuess = [];
    wins++;
    selectLetter()
}
function resetGameLose () {
    guessesLeft = 9;
    letterGuess = [];
    losses++;
    selectLetter()
}


// Begin Game
document.onkeyup = function(event) {
    userGuess = event.key;


    if (userGuess === computerGuess) {
        resetGameWins()

    } else {

        guessesLeft--;
        letterGuess.push(userGuess)

        if (guessesLeft === 0){
            losses++;
            alert("C'omon Son!")
            resetGameLose()
        }

        if (guessesLeft === 1) {
            alert("Don't be the crevis in my arm ")
        }
    }
    
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "guesses left: " + guessesLeft;
userGuessText.textContent = "Your guesses so far: " + letterGuess.join(', ');
}

