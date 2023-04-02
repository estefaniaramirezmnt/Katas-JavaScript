// 1
function sum(numbers) {
    let totalSum = 0;
    if (numbers === []) {
        return 0;
    }
    for (let num of numbers) {
        totalSum = totalSum + num;
    }
    return totalSum
}

console.log(sum([1, 2, 3]));

// 2
function sum2(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}