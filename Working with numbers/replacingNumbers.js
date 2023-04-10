/* Replace the numbers below to 5 with a 0 and above with 1.

*/
function fakeBin(x) {
    let newStr = ''
    for (var char of x) {
        if (char < 5) {
            newStr += 0;

        } else {
            newStr += 1;
        }
    }
    return newStr;
}

console.log(fakeBin('472'))

function fakeBin2(x) {
    return x.split('').map(n => (n < 5) ? 0 : 1).join('');
}

console.log(fakeBin2('472'))

function replaceDigits(str) {
    return str.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
  }