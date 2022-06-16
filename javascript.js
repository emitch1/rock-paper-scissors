/* Pseudocode GO:

Create function called computerPlay
Function will return one of 3 values 'Rock', 'Paper', or 'Scissors' (random)

Create function called singleRound
Function will take 2 parameters playerSelection and computerSelection &
return string that declares winner of round

*/

//Function determines randomly which one computer will choose and return that value
function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1; 
    if (number == 1) {
        return 'rock';
    } else if (number == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log(`It's a tie!`);
        return 0;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose! Paper beats rock');
        return -1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('You lose! Scissors beats paper');
        return -1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You lose! Rock beats scissors');
        return -1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats rock');
        return 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You win! Scissors beats paper');
        return 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You win! Rock beats scissors');
        return 1;
    }
}

function calculateWinner(score) {
    if (score == 0) {
        console.log(`No winners, it's a tie!`);
    } else if (score > 0) {
        console.log(`You won with ${score} point(s) more than computer!`);
    } else {
        console.log(`You lost with ${score - (score * 2)} point(s) less than computer.`);
    }

}

// Starts the game, sets score to 0. Asks user for selection and randomizes computer selection.
// Calls to functions and adds score. Then calls for score function.
function game() {

    let score = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Enter your selection: ');
        let computerSelection = computerPlay();
        score += singleRound(playerSelection, computerSelection);
    }
    calculateWinner(score);
}

game();

