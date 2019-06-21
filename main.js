
// let psychicLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r,','s','t','u','v','w','x','y','z']
// let letterGuess = []

// let directios = document.getElementById('directions')
// let winsText = document.getElementById('wins-text')
// let lossesText = document.getElementById('losses-text')
// let guessesLeftText = document.getElementById('guessleft-text')
// let userGuessText = document.getElementById('yourguesses-text')
// let loseText = document.getElementById('lose-text')

// let wins = 0
// let losses = 0
// let guessLeft = 12

// document.onkeyup = function(event) {
//     userGuess = event.key;
//     let computerGuess = psychicLetter[Math.floor(Math.random() * psychicLetter.length)]
//     holdLetter()
//     console.log(computerGuess)

//     function holdLetter(computerGuess) {
//         if (guessLeft < 1) {
//             computerGuess = psychicLetter
//         } else {
//             computerGuess = psychicLetter[Math.floor(Math.random() * psychicLetter.length)]
//         }   
//     }

//     letterGuess.push(userGuess)
//     console.log(letterGuess)
    

//     if (userGuess === computerGuess) {
//         wins++; 
//     } else {
//         guessLeft--;
//     } 

//     if (guessLeft === 0){
//        losses++; guessLeft = 12
//     } 
//     if (wins + 1) {
//         guessleft = 12
//     }
  


// winsText.textContent = "wins: " + wins;
// lossesText.textContent = "losses: " + losses;
// guessesLeftText.textContent = "guesses left: " + guessLeft;
// userGuessText.textContent = "your guesses: " + letterGuess ; 

   
// }













let psychicLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r,','s','t','u','v','w','x','y','z']
let computerGuess = []
let letterGuess = []

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
// function selectLetter () {
//     if (guessesLeft === 0 || guessesLeft === 9) {
//     let computerGuess = psychicLetter[Math.floor(Math.random() * psychicLetter.length)]
//     console.log(computerGuess)
//     }
// }

// begin game
document.onkeyup = function(event) {
    userGuess = event.key;

    function selectLetter () {
        if (guessesLeft === 0 || guessesLeft === 9) {
        let computerGuess = psychicLetter[Math.floor(Math.random() * psychicLetter.length)]
        console.log(computerGuess)
        }
    }
    // let computerGuess = psychicLetter[Math.floor(Math.random() * psychicLetter.length)]
    selectLetter()

    letterGuess.push(userGuess)

        if (letterGuess.length > 9){
            letterGuess = []
        }

        if (userGuess === computerGuess) {
            wins++; guessesLeft = 9;
        } else {
            guessesLeft--;
            if (guessesLeft < 0) {
            losses++; guessesLeft = 9;
        }
}


winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "guesses left: " + guessesLeft;
userGuessText.textContent = "your guesses: " + letterGuess ; 
}
