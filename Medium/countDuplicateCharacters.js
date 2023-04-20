/*
Count the number of duplicates characters (case insensitive). Examples:
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
*/

function duplicateCount(text) {
    text = text.toLowerCase();
    let charCount = new Map();
    for (let char of text) {
        if (!charCount.has(char)) {
            charCount.set(char, 1);
        } else {
            let oldValue = charCount.get(char);
            charCount.set(char, oldValue + 1);
        }
    }
    let result = 0;
    for (let value of charCount.values()) {
        if (value > 1) {
            result += 1;
        }
    }
    return result;
}