// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
    var result = "";
    for (var i = 0; i < x.length; i++) {
        if (x[i] != " ") {
            result = result + x[i];
        }
    }
    return result;
}

function noSpace2(x) {
    return x.replaceAll(' ', '');
}

