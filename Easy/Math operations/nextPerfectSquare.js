/* Return the next perfect square after the one paassed as parameter.
If the parameter is itself not a perfect square return -1 */
function findNextSquare(sq) {
    let newSquare = Math.sqrt(sq) + 1
    if (Math.sqrt(sq) % 1 === 0) {
        return Math.pow(newSquare, 2)  
    }
    else {
        return -1
    }
}

function findNextSquare2(sq) {
    return !(Math.sqrt(sq) % 1) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
console.log(findNextSquare(121)) // 144
console.log(findNextSquare(625)) // 676