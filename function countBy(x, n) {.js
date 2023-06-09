function countBy(x, n) {
    let arrOfMultiples = [];
    for (let i = 1; i<= n; i++) {
        arrOfMultiples.push(x * i);
    }
    return arrOfMultiples;
}

// function countBy2 (x, n) {
//     let arrOfMultiples = [];
//     while (arrOfMultiples.length < n) {
//         arrOfMultiples.push(x * (arrOfMultiples.length + 1))
//     }
//     return arrOfMultiples;
// }

countBy(2, 5)