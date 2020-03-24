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

const book = {
    title: "The innos",
    author: "Walter Isaacson",
    publisher: {
        name: "Penguin"
    }
}

const {name: publisherName = "Self-Published"} = book.publisher

console.log(publisherName)