/*Given an string, convert each character into '(' or ')'. 
If the character is unique replace it for '('. 
If it's repeated replace it for ')'*/

function duplicateEncode(word) {
    let wordToConvert = word.toLowerCase();
    let pairs = new Map();
    for (let char of wordToConvert) {
        if (!pairs.has(char)) {
            pairs.set(char, 1)
        } else {
            let oldValue = pairs.get(char);
            pairs.set(char, oldValue + 1)
        }
    }
    let result = '';
    for (let char of wordToConvert) {
        if (pairs.get(char) > 1) {
            result += ')';
        } else {
            result += '(';
        }
    }

    return result;
}


// Other ways to code this function, solutions extracted from CodeWars page
function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}

function duplicateEncode3(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}

function duplicateEncode4(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
