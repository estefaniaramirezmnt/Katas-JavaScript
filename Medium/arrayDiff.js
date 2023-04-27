/*
Implement a function which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
[1, 2, 2, 2, 3], [2]) == [1,3]
[1, 2, 3, 4], [1, 2])) == [3, 4]
*/

function arrayDiff(a, b) {
    return a.filter((element) => !b.includes(element));
}

function arrayDiff2(a, b) {
    let listOfNumbers = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            listOfNumbers.push(a[i]);
        }
    }
    return listOfNumbers;
}


