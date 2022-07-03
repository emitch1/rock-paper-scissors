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
        result.innerHTML= '<span>It is a tie!</span>';
        return '';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.innerHTML='<span>You lose! Paper beats rock</span>';
        return 'computer';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result.innerHTML='<span>You lose! Scissors beats paper</span>';
        return 'computer';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.innerHTML='<span>You lose! Rock beats scissors</span>';
        return 'computer';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.innerHTML='<span>You win! Paper beats rock</span>';
        return 'player';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result.innerHTML='<span>You win! Scissors beats paper</span>';
        return 'player';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.innerHTML='<span>You win! Rock beats scissors</span>';
        return 'player';
    }
}

// Sets score to 0. Asks user for selection and randomizes computer selection by function call.
// Calls to functions and adds score. Then calls for score function.
function game(playerSelection) {

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

    score.innerHTML=`<span>Player: ${playerScore} \xa0 \xa0 \xa0 Computer: ${computerScore} </span>`;
   
    if (playerScore == 5) {
        score.innerHTML+= `<br><br><span>\nCongratulation! You have won the game! Scores are now being reset to 0.</span>`;
        playerScore = 0;
        computerScore = 0;

    } else if (computerScore ==5) {
        score.innerHTML+= `<br><br><span>\nSorry! You have lost! Scores are now being reset to 0.</span>`;
        playerScore = 0;
        computerScore = 0;

    }

}

// Starts the game.

let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('.results');

const score = document.querySelector('.finalResults');
score.innerHTML=`<span>Player: ${playerScore} \xa0 \xa0 \xa0 Computer: ${computerScore} </span>`;

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => game('rock'));

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => game('paper'));

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => game('scissors'));