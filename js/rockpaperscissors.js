"use strict";

const POTENTIAL_CHOICES = ["rock", "paper", "scissors"];
var humanScore = 0;
var computerScore = 0;
var round = 0;

let body = document.querySelector('body');
let resultsDiv = document.querySelector('.results');
body.addEventListener('click', (event) => {
    if (round === 5) {
        humanScore = 0;
        computerScore = 0;
        round = 0;
    }
    let target = event.target;

    switch (target.id) {
        case POTENTIAL_CHOICES[0]:
            playRound(POTENTIAL_CHOICES[0], getComputerChoice());
            break;
        case POTENTIAL_CHOICES[1]:
            playRound(POTENTIAL_CHOICES[1], getComputerChoice());
            break;
        case POTENTIAL_CHOICES[2]:
            playRound(POTENTIAL_CHOICES[2], getComputerChoice());
            break;
    }
    event.stopPropagation();
});

function getComputerChoice() {
    return POTENTIAL_CHOICES[randomIntFromInterval(0, 2)];
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function removeChildren(parentElement) {
    if (parentElement.childElementCount > 0) {
        const collection = parentElement.children;
        for (let i = collection.length - 1; i >= 0; i--) {
            parentElement.removeChild(collection[i]);
        }
    }
}

function playRound(humanChoice, computerChoice) {
    removeChildren(resultsDiv);

    const choicesPar = document.createElement("p");
    choicesPar.textContent = `Human Choice    :  ${humanChoice}\nComputer Choice :  ${computerChoice}`;
    resultsDiv.appendChild(choicesPar);

    if (humanChoice === computerChoice) {
        const drawPar = document.createElement("p");
        drawPar.textContent = `both players have thrown ${humanChoice}. Play again !`;
        logScore();
        resultsDiv.appendChild(drawPar);
    } else {
        switch (humanChoice) {
            // humanChoice = rock
            case POTENTIAL_CHOICES[0]:
                computerChoice === POTENTIAL_CHOICES[1] ? logScore("computer") : logScore("human");
                break;
            // humanChoice = paper
            case POTENTIAL_CHOICES[1]:
                computerChoice === POTENTIAL_CHOICES[0] ? logScore("human") : logScore("computer");
                break;
            // humanChoice = scissors
            case POTENTIAL_CHOICES[2]:
                computerChoice === POTENTIAL_CHOICES[0] ? logScore("computer") : logScore("human");
                break;
        }
    }
    if (++round === 5) {
        const finalResultPar = document.createElement("p");
        if (humanScore > computerScore) {
            finalResultPar.textContent = `Human wins!!!`;
        } else if (computerScore > humanScore) {
            finalResultPar.textContent = `Computer wins!!!`;
        } else {
            finalResultPar.textContent = `Draw!!!`;
        }
        resultsDiv.appendChild(finalResultPar);

        let choiceBtns = document.querySelectorAll('button');
        choiceBtns.forEach((node) => node.disabled = true);

        let newGameBtn = document.createElement("button");
        newGameBtn.textContent = "Wants to play another round ???";
        resultsDiv.appendChild(newGameBtn);
        newGameBtn.addEventListener('click', (event) => {
            removeChildren(resultsDiv);
            choiceBtns.forEach((node) => node.disabled = false);
            event.stopPropagation();
        });

    }
}
function logScore(winner) {
    const p = document.createElement("p");
    switch (winner) {
        case "human":
            p.textContent = `Computer score is: ${computerScore}\nHumans score is  : ${++humanScore}`;
            break;
        case "computer":
            p.textContent = `Computer score is: ${++computerScore}\nHumans score is  : ${humanScore}`;
            break;
        default:
            p.textContent = `Computer score is: ${computerScore}\nHumans score is  : ${humanScore}`;
    }
    resultsDiv.appendChild(p);
}





