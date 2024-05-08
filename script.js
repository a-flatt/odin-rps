let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {

    randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return "rock";
    } else if (randomInt == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {

    choice = prompt("Please enter your choice");
    choice.toLowerCase();
    return choice;
}

function playRound (humanChoice, computerChoice) {

    // paper beats rock
    // rock beats scissors
    // scissors beats paper

    if (humanChoice == computerChoice) {
        console.log("That's a tie.");
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win.");
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win.');
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win.');
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose.');
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose.');
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose.');
    } else {
        console.log("I think you inputted an invalid choice.");
    }
}

function playGame () {

    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
}