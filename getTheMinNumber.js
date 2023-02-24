// Create a function that returns the min num
function min(nums) {
    var currentMinNumber = nums[0];
    for (var i = 1; i <= nums.length; i++) {
        if(nums[i] < currentMinNumber) {
            currentMinNumber = nums[i];
        }
    }
    return currentMinNumber;
}
var minNumber = min([-4, -54, 5, 0]);
console.log(minNumber)