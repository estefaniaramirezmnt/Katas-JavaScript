/* 
Convert a dash/underscore delimited words into camel casing. Let the first word in its original case. Examples:
"the-stealth-warrior" -> "theStealthWarrior"
"The_Stealth_Warrior" -> "TheStealthWarrior"
"The_Stealth-Warrior" -> "TheStealthWarrior"
*/
function toCamelCase(str) {
    let listOfWords = str.split(/[-_]+/);
    for (let i = 1; i < listOfWords.length; i ++) {
        listOfWords[i] = listOfWords[i][0].toUpperCase() + listOfWords[i].substring(1)
    }
    return listOfWords.join('')
}