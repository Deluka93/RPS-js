// Player will have choice of 3 boxes containing "rock" "paper" "scisors" buttons
// After submiting a choice computer randomly will print one of the three following choices "rock" "paper" "scisors"
// after responce program will display if player won or not.


function getComputerChoice() {
     let randomNumber = Math.floor(Math.random() * 100);
     let gameResult;
        if(randomNumber <= 33) {
            gameResult = "Rock!";
        }   else if ((randomNumber > 33) && (randomNumber <= 66)) {
            gameResult = "Paper!";
        }   else if (randomNumber > 66) {
            gameResult = "Scissors!";
        }   else {
        }                    
    return gameResult;     
    }
console.log(getComputerChoice());