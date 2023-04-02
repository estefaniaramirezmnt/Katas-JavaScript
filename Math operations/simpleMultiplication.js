// Multiply by 8 if it's a even number and by 9 if it's odd
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}

console.log(simpleMultiplication(2))

function simpleMultiplication2(n) {
    return n * (n % 2 ? 9 : 8);
}