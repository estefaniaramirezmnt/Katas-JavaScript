/* Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.*/
var summation = function (num) {
    var result = 0;
    for (var i = 1; i <= num; i++) {
        result = result + i;
    }
    return result
}
console.log(summation(8))

var summation2 = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}