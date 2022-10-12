const counterFactory = require("../counterFactory")

const {increment, decrement} = counterFactory()

const decrementCounter = counterFactory()

for (let i=0; i<5; i++){
    console.log(increment())
}

for (let i=0; i<5; i++){
    console.log(decrement())
}