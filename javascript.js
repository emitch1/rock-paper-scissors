/* 
  Rock-Paper-Scissors - WIth GUI
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

//Single round function that checks all conditions and who wins and displays round winner & returns score
function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log(`It's a tie!`);
        return '';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose! Paper beats rock');
        return 'computer';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('You lose! Scissors beats paper');
        return 'computer';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You lose! Rock beats scissors');
        return 'computer';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats rock');
        return 'player';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You win! Scissors beats paper');
        return 'player';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You win! Rock beats scissors');
        return 'player';
    }
}

//Extra helper function to check who won
function calculateWinner(playerScore, computerScore) {
    if (playerScore == computerScore) {
        console.log(`No winners, it's a tie! Both players have ${playerScore} point(s).`);
    } else if (playerScore > computerScore) {
        console.log(`You won with ${playerScore} point(s) and computer has ${computerScore} point(s).`);
    } else {
        console.log(`You lost with ${playerScore} point(s) and computer has ${computerScore} point(s).`);
    }

}

// Sets score to 0. Asks user for selection and randomizes computer selection by function call.
// Calls to functions and adds score. Then calls for score function.
function game(playerSelection) {

    console.log('test')
    let playerScore = 0;
    let computerScore = 0;
    //for (let i = 0; i < 5; i++){
        //let playerSelection = prompt('Enter your selection (Rock, Paper, Scissors): ');
    let computerSelection = computerPlay();
    let winner = singleRound(playerSelection, computerSelection);
    
    if (winner == 'player') {
        playerScore++;
    } else if (winner == 'computer') {
        computerScore++;
    }
    //}
    calculateWinner(playerScore, computerScore);
}

// Starts the game.
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => game('rock'));

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => game('paper'));

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => game('scissors'));