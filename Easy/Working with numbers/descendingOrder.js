/*
make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Example: Input: 145263 Output: 654321
*/
function descendingOrder(n) {
    let arrOfNumbers = n.toString().split('').map(Number);
    arrOfNumbers.sort().reverse();
    return parseInt(arrOfNumbers.join(''));
}

const firstTest = descendingOrder(145263)
console.log(firstTest)
console.log(descendingOrder(0))
console.log(typeof(firstTest))