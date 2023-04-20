// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). -->
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