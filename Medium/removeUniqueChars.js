/*
Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"
*/
function onlyDuplicates(str) {
    let letterCount = new Map();
    
    for (let letter of str) {
        if (!letterCount.has(letter)) {
            letterCount.set(letter, 1);
        } else {
            let oldValue = letterCount.get(letter);
            letterCount.set(letter, oldValue + 1);
        }
    }

    let finalResult = '';
    for (let char of str) {
        if (letterCount.get(char) > 1 ) {
            finalResult = finalResult.concat(char);
        }
    }
    return finalResult;
}

console.log(onlyDuplicates('abccdefee')); //cceee
console.log(onlyDuplicates('colloquial')); // ollol