let HUMAN_SCORE = 0;
let COMPUTER_SCORE = 0;

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

function playRound (humanChoice, computerChoice) {

    const div = document.querySelector("#outcome");

    if (humanChoice == computerChoice) {
        div.textContent = "That's a tie.";
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        div.textContent = "You win.";
        HUMAN_SCORE += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        div.textContent = "You win.";
        HUMAN_SCORE += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        div.textContent = "You win.";
        HUMAN_SCORE += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        div.textContent = "You lose.";
        COMPUTER_SCORE += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        div.textContent = "You lose.";
        COMPUTER_SCORE += 1;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        div.textContent = "You lose.";
        COMPUTER_SCORE += 1;
    } else {
        div.textContent = "I think you inputted an invalid choice.";
    }
}

const buttons = document.querySelectorAll("button");
const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");

buttons.forEach(button => {
    button.addEventListener("click", obj => {
        const humanChoice = obj.target.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        humanScore.textContent = HUMAN_SCORE;
        computerScore.textContent = COMPUTER_SCORE;

        if (HUMAN_SCORE == 5) {
            result.textContent = "You Win!"
        }
        if (COMPUTER_SCORE == 5) {
            result.textContent = "You Lose!";
        }
    });
})