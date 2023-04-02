// Given an array, build a new one with two integers: the sum and the rest of all the numbers
function countPositivesSumNegatives(input) {
    var positiveSum = 0;
    var negativeSum = 0;

    for (let i = 0; i < input.length; i++) {
        positiveSum += input[i];
        negativeSum -= input[i];

    }
    return [positiveSum, negativeSum];

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))