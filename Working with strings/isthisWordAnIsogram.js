/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines if a string is an isogram. Ignore letter case.

isIsogram "pet" = true
isIsogram "sunny" = false
*/

function isIsogram(str) {
    str = str.toLowerCase();
    let arrayOfLetters = [];
    for (let letter of str) {
        if (arrayOfLetters.includes(letter)) {
            return false;
        }
        arrayOfLetters.push(letter);
    }
    return true
}

function isIsogram2(str){
	return new Set(str.toUpperCase()).size == str.length;
}


