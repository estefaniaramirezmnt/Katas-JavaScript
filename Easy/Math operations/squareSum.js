/*Complete the square sum function so that it squares each number passed into it
and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

function squareSum(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result = result + numbers[i] ** 2;
    }
    return result;
}

console.log(squareSum([2, 2, 2]))

const isSquare = n => Math.sqrt(n) % 1 === 0