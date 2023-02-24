// Create a function that return the total sum
function sum(nums) {
    var result = 0;
    for (var num of nums) {
        result = result + num;
    }
    return result;
}

console.log(sum([1, 2, 3, 4, 5])); // 15