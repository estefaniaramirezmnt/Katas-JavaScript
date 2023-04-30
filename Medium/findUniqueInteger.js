/*
There is an array with some numbers.
All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/

function findUniq1(arr) { 
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
            return arr[i]
        }
    }
}

function findUniq2(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


function findUniqManually(arr) {
    let pairs = new Map();
    for (let num of arr) {
        if (!pairs.has(num)) {
            pairs.set(num, 1);
        } else {
            let oldValue = pairs.get(num);
            pairs.set(num, oldValue + 1);
        }
    }
    for (let [key, value] of pairs) {
        if (value === 1) {
            return key;
        }
    }
}

