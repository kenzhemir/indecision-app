// Arguments object - no long bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(1, 2))

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name + " has lived in " + city
        })
    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1, 2],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num)
    }
}

console.log(multiplier.multiply())