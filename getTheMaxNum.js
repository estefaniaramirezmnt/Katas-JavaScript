// Create a function that returns the max num
function max(nums) {
    var currentMaxNumber = nums[0];
    for (var i = 1; i <= nums.length; i++) {
        if(nums[i] > currentMaxNumber) {
            currentMaxNumber = nums[i];
        }
    }
    return currentMaxNumber;
}
var maxNumber = max([24, 4, 1, -54]);
console.log(maxNumber)