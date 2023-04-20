/* Given an integer, convert it based in the binary sistem, and then return the sum of all the 1 numbers*/

function countBits(n) {
    n = n.toString(2)
    let finalSum = 0;
    for (let num of n) {
        if (num === "1") {
            finalSum = finalSum + 1;
        }
    }
    return parseInt(finalSum)
}

console.log(countBits(1234)) // 10011010010 = 5