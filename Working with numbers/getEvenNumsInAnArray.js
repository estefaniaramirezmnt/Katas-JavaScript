// Create a function that returns the even numbers in an array
function getEven(nums) {
    var result = [];
    for (var num of nums) {
        if(num % 2 == 0) {
            result.push(num);
        } 
    } 
    return result;
}
var totalResult = getEven([6, 5, 4, 3, 2]); // [6, 4, 2]
console.log(totalResult)