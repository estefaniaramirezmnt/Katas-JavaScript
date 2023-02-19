// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
    var result = "";
    for (var i = 1; i < str.length - 1; i++) {
        result = result + str[i];
    }
    return result;
}
   
removeChar("culo")
var finaleResult = removeChar("culo")
console.log(finaleResult)
   
   