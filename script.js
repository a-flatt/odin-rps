function getComputerChoice () {

    randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        console.log("rock");
    } else if (randomInt == 1) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

function getHumanChoice () {

    choice = prompt("Please enter your choice");
    console.log(choice);
}