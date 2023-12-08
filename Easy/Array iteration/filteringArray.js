// 1
function filter_list(l) {
    let newArr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof (l[i]) === "number") {
            newArr.push(l[i]);
        }
    }
    return newArr;
}

// 2
function filter_list2(arr) {
    let newArr = arr.filter(function(currentElement) {
        return typeof(currentElement) === "number";
    })
    return newArr;
}
// filter is a method that creates a new array with all elements that pass the test implemented by the provided function.

// 3
function filter_list3(arr) {
    return arr.filter(onlyNumbers)
}

function onlyNumbers(currentElement) {
    return typeof(currentElement) === "number";
}

// 4
function filter_list4(l) {
    return l.filter(Number.isInteger);
}

var test = [1, 2, 3, "a", "b", 4];
console.log(filter_list3(test)); // [1, 2, 3, 4]