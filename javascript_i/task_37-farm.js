// Write code below 💖

const pig = {
    name : "Mary",
    type : "pig",
    age : 2,
    sound : "oink",
    makeSound () {
        return `${pig.name} is a ${pig.age} year old ${pig.type} that goes ${pig.sound}!`
    }
}

const sheep = {
    name : "Sidney",
    type : "sheep",
    age : 3,
    sound : "baa",
    makeSound () {
        return `${sheep.name} is a ${sheep.age} year old ${sheep.type} that goes ${sheep.sound}!`
    }
}

const dog = {
    name : "Lara",
    type : "dog",
    age : 3,
    sound : "woof",
    makeSound () {
        return `${dog.name} is a ${dog.age} year old ${dog.type} that goes ${dog.sound}!`
    }
}

console.log(pig.makeSound())
console.log(sheep.makeSound())
console.log(dog.makeSound())