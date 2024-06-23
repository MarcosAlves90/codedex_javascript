// Write code below 💖

const question = "Question: "
const random_number = Math.floor(Math.random() * 9);
const phrases_list = ["Yes - definitely.",
"It is decidedly so.",
"Without a doubt.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."];

const user_question = "Will I become a millionaire?";

console.log(question + "       " + user_question);
console.log("Magic 8 Ball:    " + phrases_list[random_number]);