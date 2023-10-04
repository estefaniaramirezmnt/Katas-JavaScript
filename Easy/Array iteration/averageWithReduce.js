// Get the avarage of an array
function getAverage(marks) {
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// reduce() method reduces the array to a single value.
console.log(getAverage([5, 4, 2])); 