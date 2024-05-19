"use strict";

const potentialChoices = ["rock", "paper", "scissors"];

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    return potentialChoices[randomIntFromInterval(0, 2)];
}

function getHumanChoice() {
    /* If the user clicks OK without entering any text, an empty string is returned.
     If the user clicks the Cancel button, this function returns null. */
    let humanChoice = prompt("Rock, paper or scissors?");
    if (humanChoice === "" || humanChoice === null) {
        return getHumanChoice();
    } else if (humanChoice.toLowerCase() === potentialChoices[0] || humanChoice.toLowerCase() === potentialChoices[1] ||
        humanChoice.toLowerCase() === potentialChoices[2]) {
        return humanChoice.toLowerCase();
    } else {
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("both players have thrown " + humanChoice + ". Play again !");
    } else {
        switch (humanChoice) {
            // humanChoice = rock
            case potentialChoices[0]:
                computerChoice === potentialChoices[1] ? logScore("computer") : logScore("human");
                break;
            // humanChoice = paper
            case potentialChoices[1]:
                computerChoice === potentialChoices[0] ? logScore("human") : logScore("computer");
                break;
            // humanChoice = scissors
            case potentialChoices[2]:
                computerChoice === potentialChoices[0] ? logScore("computer") : logScore("human");
                break;
        }

    }
}

function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function logScore(winner) {
        if (winner === "human") {
            console.log("Computer score is: " + computerScore);
            console.log("Humans score is  : " + (++humanScore));
        } else {
            console.log("Computer score is: " + (++computerScore));
            console.log("Humans score is: " + humanScore);
        }
    }
    function playRound(humanChoice, computerChoice) {
        console.log("Human Choice    : " + humanChoice);
        console.log("Computer Choice : " + computerChoice);
        if (humanChoice === computerChoice) {
            console.log("both players have thrown " + humanChoice + ". Play again !");
        } else {
            switch (humanChoice) {
                // humanChoice = rock
                case potentialChoices[0]:
                    computerChoice === potentialChoices[1] ? logScore("computer") : logScore("human");
                    break;
                // humanChoice = paper
                case potentialChoices[1]:
                    computerChoice === potentialChoices[0] ? logScore("human") : logScore("cmputer");
                    break;
                // humanChoice = scissors
                case potentialChoices[2]:
                    computerChoice === potentialChoices[0] ? logScore("computer") : logScore("human");
                    break;
            }

        }
    }

    var humanSelection;
    var computerSelection;
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Humans wins!!!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!!!");
    } else {
        console.log("Draw!!!");
    }
}

playGame();

