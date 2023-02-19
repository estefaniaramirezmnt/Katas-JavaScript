// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// The number can be negative already, in which case no change is required.
function makeNegative(num) {
    if (num > 0) {
        return num * -1;
    }
    return num;
}
console.log(makeNegative(8));
