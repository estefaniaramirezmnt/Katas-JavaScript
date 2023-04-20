/* 
Given an array of integers, find the one that appears an odd number of times.
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
*/
function findOdd(A) {
    let pairs = new Map();
    for (let num of A) {
        if (!pairs.has(num)) {
            pairs.set(num, 1);
        } else {
            let oldValue = pairs.get(num);
            pairs.set(num, oldValue + 1);
        }
    }
    for (let [key, value] of pairs) {
        if (value % 2 !== 0) {
            return key
        }
    }
}

console.log(findOdd([1, 1, 1, 2, 2, 3, 3, 3, 3]))
