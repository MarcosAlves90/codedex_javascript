// Write code below 💖

const luckyNumber = 7;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== luckyNumber) {
    console.log("Wrong guess! 😈, the lucky number is not", guess);
    guess = Math.floor(Math.random() * 10) + 1;
}

console.log("Lucky number is", luckyNumber, "🎉🎉🎉");