/* Code a function that  returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
    if (number < 0) {
        return 0;
    }

    let sumOfDivisibleNumbers = 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumOfDivisibleNumbers = sumOfDivisibleNumbers + i;
        }
    }
    return sumOfDivisibleNumbers
}

console.log(solution(9))


