// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result = result + s;
    }
    return result;
}
console.log(repeatStr(8, "culo "))

// VS
function repeatStr2 (n, s) {
    return s.repeat(n);
}