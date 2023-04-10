function filter_list(l) {
    let newArr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof (l[i]) === "number") {
            newArr.push(l[i]);
        }
    }
    return newArr;
}


function filter_list2(arr) {
    let newArr = arr.filter(function(currentElement) {
        return typeof(currentElement) === "number";
    })
    return newArr;
}

function filter_list3(arr) {
    return arr.filter(onlyNumbers)
}

function onlyNumbers(currentElement) {
    return typeof(currentElement) === "number";
}

function filter_list4(l) {
    return l.filter(Number.isInteger);
}

console.log(filter_list3([1, 2, 'a', 'b']))
