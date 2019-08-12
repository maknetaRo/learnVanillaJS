/*
Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
*/

function divisibleByHundred (num) {
    if (num % 100 === 0) {
        return true
    } 
    return false
}

let divisible = divisibleByHundred(500)
console.log(divisible)