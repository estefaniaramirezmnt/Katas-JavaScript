// 1
const listOfNumbers = (list) => {
    let filteredList = [];
    for (let object of list) {
        if (typeof object === "number") {
            filteredList.push(object);
        }
    }
    return filteredList;
}

var test = [1, 2, 3, "a", "b", 4];
console.log(listOfNumbers(test)); // [1, 2, 3, 4]

// 2
function filteredList(arr) {
    let newArr = arr.filter((element) => {
        return typeof element === "number";
    });
    return newArr;
}

console.log(filteredList([1, 4, 12, 4, "a", "b", 5])); // [1, 4, 12, 4, 5]

// filter is a method that creates a new array with all elements that pass the test implemented by the provided function.

// 3
function filterList2(arr) {
    return arr.filter(onlyNumbers)
}

function onlyNumbers(currentElement) {
    return typeof(currentElement) === "number";
}

// 4
function filter_list4(l) {
    return l.filter(Number.isInteger);
}
