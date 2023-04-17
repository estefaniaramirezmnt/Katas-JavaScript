// Return masked string, only the last 4 digits are visible

function maskify(cc) {
    let strOfNums = cc.toString();
    let beginingOfStr = strOfNums.slice(0, -4);
    let endOfStr = strOfNums.slice(-4);
    let newBeginingOfStr = "";
    for (let i = 0; i < beginingOfStr.length; i++) {
        newBeginingOfStr = newBeginingOfStr + '#';
    }
    return newBeginingOfStr.concat(endOfStr)
}

function maskify2(cc) {
    cc = cc.toString();
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

