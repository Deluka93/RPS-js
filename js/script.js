// Player will have choice of 3 boxes containing "rock" "paper" "scisors" buttons
// After submiting a choice computer randomly will print one of the three following choices "rock" "paper" "scisors"
// after responce program will display if player won or not.

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
     let randomNumber = Math.floor(Math.random() * 100);
     let gameResult;
        if(randomNumber <= 33) {
            gameResult = "Rock";
        }   else if ((randomNumber > 33) && (randomNumber <= 66)) {
            gameResult = "Paper";
        }   else if (randomNumber > 66) {
            gameResult = "Scissors";
        }   else {
        }                    
    return gameResult;     
    }
console.log(getComputerChoice());

function getHumanChoice() {
const gameon = document.querySelector("#gameon");   
        let gameChoice = prompt("Type your choice: Rock, Paper or Scissors");
        let choiceResult;

        if (gameChoice === "Rock") {
            choiceResult = "Rock";
        }   else if (gameChoice === "Paper") {
            choiceResult = "Paper";
        }   else if (gameChoice === "Scissors") {
            choiceResult = "Scissors";
        }   else {
        }
        console.log(choiceResult);
}