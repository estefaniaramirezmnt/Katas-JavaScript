function sumTwoSmallestNumbers(numbers) {
    let orderedNumbers = numbers.sort((a, b) => a - b)
    return orderedNumbers[0] + orderedNumbers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))