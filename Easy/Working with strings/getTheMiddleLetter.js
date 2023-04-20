// If a string is odd give the middle letter, and if it's even the two middle letters
function getMiddle(str) {
    let index = Math.floor(str.length / 2);
    if (str.length % 2 !== 0) {
        return str[index];
    } else {
        return str[index - 1] + str[index];
    }
}

console.log(getMiddle("sun"))
console.log(getMiddle("potato"))


function getMiddle2(str) {
    let index = Math.floor(str.length / 2);
    return (str.length % 2 !== 0) ? str[index] : str[index - 1] + str[index];
}

console.log(getMiddle2("sun"));
console.log(getMiddle2("potato"));

