// which is the smallest num
function findSmallestInt (args) {
    var smallestOneSoFar = args[0];
    for (var i = 1; i < args.length; i++) {
        if (args[i] < smallestOneSoFar) {
            smallestOneSoFar = args[i];
        }
    }
    return smallestOneSoFar;
}