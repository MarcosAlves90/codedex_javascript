// Write code below 💖

function isPalindrome(word) {
    let palindrome = (word.toLowerCase()).split("");
    return verifyPalindrome((palindrome.slice().reverse()).join('') === palindrome.join(''))
}

function verifyPalindrome(verify) {
    const final = ['A palavra é um palíndromo.','A palavra não é um palíndromo.']
    return verify ? final[0] : final[1]
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("madam"))
console.log(isPalindrome("moonlight"))
console.log(isPalindrome("aviary"))