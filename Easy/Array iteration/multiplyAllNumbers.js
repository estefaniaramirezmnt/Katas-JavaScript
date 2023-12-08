function grow(x) {
    let result = x[0]
    for (let i = 1; i < x.length; i++) {
        result = result * x[i];
    }
    return result;
}
// As result is x[0], the value of i starts at 1, not 0.
// If i = 0, we would be multiplying the first element of the array by itself.

function grow2(x) {
    return x.reduce((a,b)=>a*b);
}

var test = [1, 2, 3, 4];
console.log(grow2(test)); // 24