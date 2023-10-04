// Find the word needle and write in which position it's

function findNeedle(haystack) {
    for (var i = 0; i < haystack.length; i ++) {
        if (haystack[i] == "needle") {
            return `found the needle at position ${i}`;
        }
    }
}

function findNeedle2(array) {
    return `found the needle at position ${array.indexOf("needle")}`
}


