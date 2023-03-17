// Revert an array of numbers

function digitize(n) {
    return Array.from(String(n), Number).reverse();
};


function digitizeManually(n) {
    var str = String(n)
    var arrayOfNumbers = [];
    for (var i = str.length-1; i >= 0; i--) {  
        arrayOfNumbers.push(Number(str[i]));
    }
    return arrayOfNumbers
};


function digitizeEfficiently(n) {
    var digitsArray = [];
    while (n > 0) {
        digitsArray.push(n % 10);
        n = Math.floor(n / 10);
    }
    return digitsArray;
};