// Return the highest and the lowest number
// 1
function highAndLow(numbers) {
    let numberList = numbers.split(" ").map(Number);
    let highest = numberList[0];
    let lowest = numberList[0];
    for (var i = 1; i < numberList.length; i++) {
        if (numberList[i] > highest) {
            highest = numberList[i];
        }
        else if (numberList[i] < lowest) {
            lowest = numberList[i];
        }
    }
    return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"))


// 2
function highAndLow2(numbers) {
    numbers = numbers.split(' ');
    console.log(numbers)
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
    
}
console.log(highAndLow2("1 2 3 4 5"))

// 3
function highAndLow3(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
console.log(highAndLow3("1 2 3 4 5"))

// 4
function highAndLow4(numbers) {
    var arr = numbers.split(" ");
    return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
  }