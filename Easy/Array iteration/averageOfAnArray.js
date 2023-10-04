function findAverage(array) {
  let totalSum = 0;
  if (array.length === 0) {
    return 0;
  }
  for (num of array) {
    totalSum = totalSum + num;
  }
  return totalSum / array.length;
}

var test = [2, 2, 2, 2, 2]
console.log(findAverage(test));