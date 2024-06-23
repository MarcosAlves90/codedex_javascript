// Write code below 💖

const myNumber = 77;
let binary = '';

for (let i = myNumber; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 === 0) {
        binary = '0' + binary
    }
    else {
        binary = '1' + binary;
    }
}

console.log(binary)

// 1001101