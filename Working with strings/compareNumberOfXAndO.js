/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.
*/
function XO(str) {
    str = str.toLowerCase();
    let numberOfX = 0;
    let numberOfO = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            numberOfX += 1;
        } else if (str[i] === "o") {
            numberOfO += 1;
        }
    }
    return numberOfX === numberOfO;
}

console.log(XO("xoxxo"))

function XO2(str) {
    return str=str.toLowerCase(), str.split("o").length == str.split("x").length
}