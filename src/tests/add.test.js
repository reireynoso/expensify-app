const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}`

test("should add two numbers", () => {
    const result = add(3,4);

    // if(result !== 7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7.`)
    // }
    expect(result).toBe(7)
})

test("should greeted with actual name", () => {
    const name = "Rei"
    const result = generateGreeting(name)
    expect(result).toBe(`Hello ${name}`)
})