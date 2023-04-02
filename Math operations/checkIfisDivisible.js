// Create a function that checks if a number is divisible by other 2 numbers
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0);
};

function isDivisible2(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } 
    return false;
}