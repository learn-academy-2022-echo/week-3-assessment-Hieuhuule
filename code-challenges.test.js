// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it } = require("node:test")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// PSUEDO CODE
// create a function that takes a number greater than 2
// will need a conditional to make sure it's a number greater than two
// create an array to hold the numbers
// create a for loop with the counter going up to the value of the number
// create 3 variables, n1, n2, nextNum
// value of nextNum = the values of n1 + n2
// push the value of nextNum to array
// reassign the value of n2 to n1
// reassign the value of nextNum to n2

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Name the function
describe("fibonacci", () => {
    // What it does
    it("takes a number and returns a fibonacci sequence of that length", () => {
        // What do you expect the return to be given these tests
        expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// yarn run v1.22.19
// warning package.json: No license field
// $ /home/gizmo/Development/personal-projects/practice/week-3-assessment-Hieuhuule/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   fibonacci
//     ✕ takes a number and returns a fibonacci sequence of that length (1 ms)

//   ● fibonacci › takes a number and returns a fibonacci sequence of that length

//     ReferenceError: fibonacci is not defined

//       39 |     it("takes a number and returns a fibonacci sequence of that length", () => {
//       40 |         // What do you expect the return to be given these tests
//     > 41 |         expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//          |         ^
//       42 |         expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//       43 |     })
//       44 | }) 

//       at Object.expect (code-challenges.test.js:41:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.894 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


// b) Create the function that makes the test pass.


const fibonacci = (num) => {
    let n1 = 0;
    let n2 = 1;
    let nextNum = 0;
    let newArr = [1] // starts at 1 so the program works

    // covers edge case
    if (num > 2) {
        for (let i = 1; i < num; i++) {
            // at start nextNum = 0
            nextNum = n1 + n2
            // adds the value of nextNum to newArr
            newArr.push(nextNum)
            // reassigns the value n1 to the value of n2
            n1 = n2 // n1 = 1
            // reassigns n2 the value of nextNum
            n2 = nextNum
        }
        return newArr
    }
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

//PSEUDO CODE
// create a function that takes an array
// iterate through array to get all the numbers
// iterate through the numbers to get only the odd numbers
// sort the odd numbers least to greatest
// return the sorted array

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


describe("sortOddLeastToGreatest", () => {
    it("takes an array of different datatypes and returns an array of only odd numbers sorted least to greatest", () => {
        expect(sortOddLeastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortOddLeastToGreatest(fullArr2)).toEqual([-823, 7, 23])
    })
})

// yarn run v1.22.19
// warning package.json: No license field
// $ /home/gizmo/Development/personal-projects/practice/week-3-assessment-Hieuhuule/node_modules/.bin/jest
// FAIL  ./code-challenges.test.js
// fibonacci
//     ✓ takes a number and returns a fibonacci sequence of that length (4 ms)
// sortOddLeastToGreatest
//     ✕ takes an array of different datatypes and returns an array of only odd numbers sorted least to greatest

// ● sortOddLeastToGreatest › takes an array of different datatypes and returns an array of only odd numbers sorted least to greatest

//     ReferenceError: sortOddLeastToGreatest is not defined

//     120 | describe("sortOddLeastToGreatest", () => {
//     121 |     it("takes an array of different datatypes and returns an array of only odd numbers sorted least to greatest", () => {
//     > 122 |         expect(sortOddLeastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
//         |         ^
//     123 |         expect(sortOddLeastToGreatest(fullAr2)).toEqual([-823, 7, 23])
//     124 |     })
//     125 | })

//     at Object.expect (code-challenges.test.js:122:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.934 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


// b) Create the function that makes the test pass.

const sortOddLeastToGreatest = (array) => {
    let numArr = []
    let oddNums = []
    let leastToGreatest = []
    array.map(value => {
        if (typeof value === "number") {
            numArr.push(value) // iterates to get all the numbers
        }
    })
    numArr.map(value => {
        if (value % 2 !== 0) {
            oddNums.push(value); // iterates to get all the odd numbers
        }
    })
    leastToGreatest = oddNums.sort((a, b) => a - b) // sorts the numbers least to greatest
    return leastToGreatest
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// PSEUDO CODE
// create a function that takes an arry of numbers
// returns an array of accumulating sum
// edge case for empty array
// code similiar to fibonacci


// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("accumulatingSum", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})

        //     yarn run v1.22.19
        // warning package.json: No license field
        // $ / home / gizmo / Development / personal - projects / practice / week - 3 - assessment - Hieuhuule / node_modules /.bin / jest
        // FAIL./ code - challenges.test.js
        // fibonacci
        //     ✓ takes a number and returns a fibonacci sequence of that length(3 ms)
        // sortOddLeastToGreatest
        //     ✓ takes an array of different datatypes and returns an array of only odd numbers sorted least to greatest(1 ms)
        // accumulatingSum
        //     ✕ takes in an array and returns an array of the accumulating sum(1 ms)

        // ● accumulatingSum › takes in an array and returns an array of the accumulating sum

        // ReferenceError: accumulatingSum is not defined

        // 204 | describe("accumulatingSum", () => {
        //     205 | it("takes in an array and returns an array of the accumulating sum", () => {
        //     > 206 | expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        //             |             ^
        //             207 | expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        //         208 | expect(accumulatingSum(numbersToAdd3)).toEqual([])
        //         209 |         })

        //     at Object.expect(code - challenges.test.js: 206: 13)

        // Test Suites: 1 failed, 1 total
        //     Tests: 1 failed, 2 passed, 3 total
        //     Snapshots: 0 total
        //     Time: 0.91 s
        // Ran all test suites.
        // error Command failed with exit code 1.
        // info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


// b) Create the function that makes the test pass.

const accumulatingSum = (arr) => {
    let sum = []
    let toAdd = []
    let arrAndToAddSum = []

    if (arr === []) { // edge case
        return arr
    } else {
        sum.push(arr[0]) // captures first num in array outside of loop and assigns to "sum array"
        for (let i = 1; i < arr.length; i++) { 
            toAdd.push(arr[i]) // adds the arr[i] to an empty array called "toAdd"
            lastItemInSum = sum[sum.length - 1] // assigns the last element in the "sum array" to lastItemInSum
            toAdd.push(lastItemInSum) // puts arr[i] and "lastItemInSum" in the same array, "toAdd"
            arrAndToAddSum = toAdd.reduce((a, b) => a + b) // adds all elements in "toAdd" and assigns the sum to "arrAndToAddSum", also clears the previous value of "arrAndToAddSum" from the previous loop
            sum.push(arrAndToAddSum) // adds the value of "arrAndToAddSum" to end of "sum array"
            toAdd = [] // empties toAdd array
            // console.log("lastitem", lastItemInSum)
        }
        return sum
    }
}

// This one was definitely very difficult for me to figure out, so much that I ended up creating this inelegant solution to it since I couldn't figure out how to accomplish it otherwise. What I don't like about it is that I couldn't figure out how to refactor it using HOF and that I was explicitly clearing out variables.