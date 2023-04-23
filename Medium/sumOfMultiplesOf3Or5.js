/*
Given a number, code a function that returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number) {
    if (number < 0) {
        return 0
    } else {
        let result = 0;
        for (var i = number - 1; i > 0; i--) {
            if (i % 3 === 0 || i % 5 === 0) {
                result += i
            }
        }
        return result
    }
}

console.log(solution(10)) // 23