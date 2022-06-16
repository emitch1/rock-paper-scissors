/* Pseudocode GO:

Create function called computerPlay
Function will return one of 3 values 'Rock', 'Paper', or 'Scissors' (random)

Create function called singleRound
Function will take 2 parameters playerSelection and computerSelection &
return string that declares winner of round

*/

function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1;
    console.log(number);
}

computerPlay();