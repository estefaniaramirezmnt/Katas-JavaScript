// Code a function that square each number of an integer

// 1
function squareDigits(num) {
    let numberToIterate = num.toString();
    let result = "";
    for (let digit of numberToIterate) {
        const squareNum = digit * digit
        result += squareNum
    }
    return parseInt(result)
}

console.log(squareDigits(9119))

// 2
function squareDigits2(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};