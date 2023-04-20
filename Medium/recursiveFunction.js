function digitalRoot(number) {
    let numberToIterate = number.toString().split('').map(Number);
    let firstSum = 0;
    
    if (numberToIterate.length > 1) {
        for (let num of numberToIterate) {
            firstSum += num;
        }
    }

    if (firstSum < 10) return firstSum;
    return digitalRoot(firstSum);
}

console.log(digitalRoot(942))