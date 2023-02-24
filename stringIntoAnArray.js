// Change a string into an array
function getWords (sentence) {
    return sentence.split(" ");
}

function manuallyGetWords(sentence) {
    var arr = [];
    var currentWord = "";
    for (var letter of sentence) {
        if (letter !== " ") {
            currentWord += letter;
        } else {
            arr.push(currentWord);
            currentWord = "";
        }
    } 
    if (currentWord !== "") {
        arr.push(currentWord);
    }
    return arr
}

var newSentence = getWords("How are you today?");
console.log(newSentence);
var newSentence2 = manuallyGetWords("I'm fine, thank you");
console.log(newSentence2)
