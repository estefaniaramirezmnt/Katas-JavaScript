// You are a senior if you are at least 55 years old and have more than 7 points.

function openOrSenior(data) {
    let finalData = [];
    for (let [key, value] of data) {
        if (key >= 55 && value > 7) {
            finalData.push("Senior");
        } else {
            finalData.push("Open")
        }
    }
    return finalData;
}

function openOrSenior2(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))
