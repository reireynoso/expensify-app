//Object Destructuring

// const person = {
//     name: "Rei",
//     age: "2",
//     location: {
//         city: "Jersey City",
//         temp: 45
//     }
// }

// const {name,age} = person;
// console.log(`${name} is ${age}`)

// const {city, temp: temperature} = person.location;

// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: "The innos",
//     author: "Walter Isaacson",
//     publisher: {
//         name: "Penguin"
//     }
// }

// const {name: publisherName = "Self-Published"} = book.publisher

// console.log(publisherName)

//Array Destructuring

const address = ['69 Fake Street', "Jersey City", "NJ", "073012"];

const [, city, state="NY", ] = address
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '2.00', '2.50', '2.75']
const [coffee, ,medium] = item
console.log(`A medium coffee hot costs ${medium}`)