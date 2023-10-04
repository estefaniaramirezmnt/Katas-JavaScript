// Revert an array of numbers

// 1
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

console.log(digitize(123456)); // [6, 5, 4, 3, 2, 1]

// 2
function digitizeManually(n) {
    var str = String(n)
    var arrayOfNumbers = [];
    for (var i = str.length-1; i >= 0; i--) {  
        arrayOfNumbers.push(Number(str[i]));
    }
    return arrayOfNumbers
}
console.log(digitizeManually(123456))

// 3. Most efficient
function digitizeEfficiently(n) {
    var digitsArray = [];
    while (n > 0) {
        digitsArray.push(n % 10);
        n = Math.floor(n / 10);
    }
    return digitsArray;
}
console.log(digitizeEfficiently(123456));

// 4. If we want the result to be 654321 instead of [6, 5, 4, 3, 2, 1]
function reverseNumber(n) {
    return Number(String(n).split('').reverse().join(''));
}
console.log(reverseNumber(123456)); // 654321
