// Revert an array of numbers

// 1
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

console.log(digitize(123456)); // [6, 5, 4, 3, 2, 1]
console.log(typeof(digitize(123456))); // object

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
console.log(typeof(digitizeManually(123456))) // object

// 3. Most efficient
function digitizeEfficiently(n) {
    var digitsArray = [];
    while (n > 0) {
        digitsArray.push(n % 10);
        n = Math.floor(n / 10);
    }
    return Number(digitsArray.join(''));
}
console.log(digitizeEfficiently(123456));
console.log(typeof(digitizeEfficiently(123456))); // number

// 4. If we want the result to be 654321 instead of [6, 5, 4, 3, 2, 1]
function reverseNumber(n) {
    return Number(String(n).split('').reverse().join(''));
}
console.log(reverseNumber(123456)); // 654321
console.log(typeof(reverseNumber(123456))); // number
