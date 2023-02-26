// Create a function that convert this string of numbers to an array
function extractNumbers(nums) {
    return nums.split(' ').map(Number);
}
console.log(extractNumbers("4 56 2 5")) // [4, 56, 2, 5]


function extractNumbersManually(stringOfNumbers) {
    var arrayOfNumbers = [];
    var currentWord = "";
    for (var character of stringOfNumbers) {
        if (character !== " ") {
            currentWord += character;
        } else {
            arrayOfNumbers.push(parseInt(currentWord));
            currentWord = "";
        }
    }
    if (currentWord !== "") {
        arrayOfNumbers.push(parseInt(currentWord));
    }
    return arrayOfNumbers;
}
console.log(extractNumbersManually("4 56 2 5"))