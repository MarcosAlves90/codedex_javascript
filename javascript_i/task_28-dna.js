// Write code below 💖

const dnaPieces = ["A", "C", "G", "T"];

function random() {
    return dnaPieces[Math.floor(Math.random() * dnaPieces.length)];
}

let myDNA = [];

for (let i = 0; i < 24; i++) {
    const threeLetters = (random() + random() + random());
    myDNA.push(threeLetters);
}

console.log(myDNA)