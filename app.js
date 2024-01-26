const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
    
    //JS prompt method, two args
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, " ").toUpperCase();
    alert(`You chose ${selection}`)
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection != SCISSORS
        ){
            alert(`Invalid choice. We chose ${ROCK} for you.`);
            return DEFAULT_USER_CHOICE;
        }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue <= 0.34) {return ROCK;}
    else if (randomValue <= 0.67) {return PAPER;}
    else {return SCISSORS;}
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE ) =>
    cChoice === pChoice
      ? RESULT_DRAW
      : (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
      ? PLAYER_WINS
      : COMPUTER_WINS;


startGameBtn.addEventListener("click", function(){
    if (gameIsRunning){return;}
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `Player chose: ${playerChoice}, Computer chose: ${computerChoice}, Results: ${winner}`;
    alert(message);
    gameIsRunning = false;
    console.log(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}, Results: ${winner}`);
});

