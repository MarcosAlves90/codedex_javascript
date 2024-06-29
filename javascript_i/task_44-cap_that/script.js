const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
    "Gaviota",
    "Jao",
    "Igor",
    "Lyntter"
];

const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");
const generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", function () {
    randomMeme.src = memeArray[Math.floor(Math.random()*memeArray.length)];
    randomCaption.innerText = captionsArray[Math.floor(Math.random()*captionsArray.length)];
});