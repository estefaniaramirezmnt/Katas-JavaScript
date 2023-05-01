/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

pigIt('Pig latin is cool') => igPay atinlay siay oolcay
pigIt('Hello world !') => elloHay orldway !
*/
function pigIt(str) {
    let listOfWords = str.split(' ')
    for (i = 0; i < listOfWords.length; i++) {
        if (listOfWords[i].match(/[a-z]/i)) {
            listOfWords[i] = listOfWords[i].substring(1).concat(listOfWords[i][0]).concat('ay')
        }
    }
    return listOfWords.join(' ')
}


console.log(pigIt('Pig latin is cool !'))

function pigIt2(str) { // this function doesn't check if there is puntuation marks.
    return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")
}

