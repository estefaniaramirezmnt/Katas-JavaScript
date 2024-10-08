// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present). -->
// [true, true true] = 3
function countSheeps(arrayofSheeps) {
    var result = 0;
    for (var i = 0; i < arrayofSheeps.length; i++) {
        if (arrayofSheeps[i]) {
            result++;
        }
    }
    return result;
}
console.log(countSheeps([true, true, true]))

// with filter

const ovejitas = (arreyOfOvejitas) => {
    return arreyOfOvejitas.filter(ovejita => ovejita === true).length;
}

console.log(ovejitas([true, true, true, false, false, true]))