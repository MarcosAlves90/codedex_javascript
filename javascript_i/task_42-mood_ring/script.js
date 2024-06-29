let stone = document.getElementById("stone");
const randomNumber = Math.floor(Math.random()*9) + 1;
const colors = ["red", "orange", "yellow", "green", "blue", "#4169e1", "#00008b", "purple", "black"];
stone.style.backgroundColor = colors[randomNumber - 1];
console.log(randomNumber)