const _ = require("lodash")

const input = "EbAAdbBEaBaaBBdAccbeebaec" //declaring input variable
const splitInput = input.split('') //converting a string into an array

//scoring
function scoring(character){ //function syntax
    //return 1 for lower cases
    if(character === character.toLowerCase()) { //"if" statement to get seperate scores depending on upper case or lower case
        return 1
    }
    //return -1 for upper cases
    else if (character === character.toUpperCase())
        return -1
    //return an error message if they dont enter a valid input
    else {
        return console.log("Scoring Error")
    }
}

//seperating upper and lower cases
const seperatedA = splitInput.filter((character) => {
    return character === 'a' || character === 'A'
})

const seperatedB = splitInput.filter((character) => {
    return character === 'b' || character === 'B'
})

const seperatedC = splitInput.filter((character) => {
    return character === 'c' || character === 'C'
})

const seperatedD = splitInput.filter((character) => {
    return character === 'd' || character === 'D'
})

const seperatedE = splitInput.filter((character) => {
    return character === 'e' || character === 'E'
})

//Tallying scores
const scoreA = seperatedA.map(scoring)
//a is the value that is getting added to. b is the value that is being added into a. doesn't matter what they are called.
const totalA = scoreA.reduce((a,b) => a + b, 0) //0 is default value or else it'll show an error.

const scoreB = seperatedB.map(scoring)
const totalB = scoreB.reduce((a,b) => a + b, 0)

const scoreC = seperatedC.map(scoring)
const totalC = scoreC.reduce((a,b) => a + b, 0)

const scoreD = seperatedD.map(scoring)
const totalD = scoreD.reduce((a,b) => a + b, 0)

const scoreE = seperatedE.map(scoring)
const totalE = scoreE.reduce((a,b) => a + b, 0)

const results = "a:" + totalA + ", " + "b:" + totalB + ", " + "c:" + totalC + ", " + "d:" + totalD + ", " + "e:" + totalE
console.log(results)

//creating an array, pairing the score and players
const resultPairs = [
    { name: "a", score: totalA }, 
    { name: "b", score: totalB }, 
    { name: "c", score: totalC }, 
    { name: "d", score: totalD }, 
    { name: "e", score: totalE }
]

//sorting the results
const sortedResultPairs = _.sortBy(resultPairs, (resultPair) => {
    return -resultPair.score
})

const stringSortedResults = sortedResultPairs.reduce((acc, resultPair,) => {
    return acc + resultPair.name + ":" + resultPair.score + ", "
}, "")

//how to remove the comma at the end of the sorted results
//1. use map to turn sortedresultpairs into an array of strings, where each string = "a: 2", (no comma)
//2. use join() on array and give it comma
console.log(stringSortedResults)