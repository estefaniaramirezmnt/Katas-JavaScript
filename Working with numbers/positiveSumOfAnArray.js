// get an array of numbers, return the sum of all of the positive ones
function positiveSum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result = result + arr[i];
    }
  }
  return result;
}

console.log(positiveSum([1, -4, 7, 12]))
console.log(positiveSum([3, 8, -7]))