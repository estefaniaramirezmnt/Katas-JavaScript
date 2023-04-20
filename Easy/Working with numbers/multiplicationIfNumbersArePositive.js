// Given two numbers, if one of them is less than 0 return 0, else return the multiplication of both
function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : n * m; /* this expression means:
    if (n < 0 || m < 0) {return 0} else {return n * m} */
}


console.log(paperwork(-2, -4))
console.log(paperwork(2, 4))