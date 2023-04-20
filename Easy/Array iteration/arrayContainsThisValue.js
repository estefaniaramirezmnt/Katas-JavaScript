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
// another way to code it: const check = (a,x) => a.includes(x);
