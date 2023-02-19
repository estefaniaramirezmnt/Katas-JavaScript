// which is the smallest num
function findSmallestInt (args) {
    var smallestonesofar = args[0];
    for (var i = 1; i < args.length; i++) {
        if (args[i] < smallestonesofar) {
            smallestonesofar = args[i];
        }
    }
    return smallestonesofar;
}