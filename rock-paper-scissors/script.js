function getComputerChoice() {
    
    let num = Math.floor(Math.random() * 3);

    if(num === 0) return "rock";
    else if(num === 1) return "paper";
    else return "scissors";

    
}

function getPlayerChoice() {
    let selection = prompt("Choose hand: Rock, Paper, Scissors");
    selection = selection.toLowerCase();
    return selection;
}

function playRound(playerSelection , computerSelection) {
    if(playerSelection !== computerSelection) {
        if(playerSelection === "rock") {
            if(computerSelection === "scissors") console.log("Congrats! You win this round");
            else console.log("Sorry, you lose this round");
        } else if(playerSelection === "paper") {
            if(computerSelection === "rock") console.log("Congrats! You win this round");
            else console.log("Sorry, you lose this round");
        } else {
            if(computerSelection === "paper") console.log("Congrats! You win this round");
            else console.log("Sorry, you lose this round");
        }
    } else {
        console.log("Tie");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}


playGame();