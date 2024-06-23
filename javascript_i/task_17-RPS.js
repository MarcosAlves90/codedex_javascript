// Write code below 💖

const rps = ["rock", "paper", "scissors"];

const player = 0;
const computer = Math.floor(Math.random() * 3);
const playerChoice = rps[player];
const computerChoice = rps[computer];

console.log(`Player picked: ${playerChoice}`);
console.log(`Computer picked: ${computerChoice}\n`);

if (playerChoice === computerChoice) {
    console.log("It's a tie!");
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    console.log("The player won!");
} else {
    console.log("The computer won!");
}