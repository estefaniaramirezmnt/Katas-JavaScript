// Code a function that return a number you can square and its result has no decimals
var isSquare = function (n) {
    return (n >= 0) ? Number.isInteger(Math.sqrt(n)) : false;
}