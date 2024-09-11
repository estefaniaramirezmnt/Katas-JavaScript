/* Given an array and a value, write a function that checks if the array contains the value (both can be numbers or strings)
Return true if the array contains the value*/
function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return true;
        }
    } return false
}

console.log(check([101, 45, 75, 105, 99, 107], 107))
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))

function check2(a,x){
    return a.includes(x);
};

console.log(check2([101, 45, 75, 105, 99, 107], 107))
console.log(check2(['what', 'a', 'great', 'kata'], 'kat'))


const checkTheValue = (array, value) => {
    for (let valueOfArray of array) {
        if (valueOfArray === value) {
            return `${true}, ${valueOfArray} is in the array`;
        } else {
            return `${false}, ${value} is not in the array`;
        }
    }
}

console.log(checkTheValue([101, 45, 75, 105, 99, 107], 107))