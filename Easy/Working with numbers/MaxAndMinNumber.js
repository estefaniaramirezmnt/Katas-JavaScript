// Return max and min values

function max(list) {
    return Math.max(...list);
}


function min(list) {
    return Math.min(...list);
}

console.log(max([4, 6, 2, 1, 9, 63, -134, 566])) // 566
console.log(min([-52, 56, 30, 29, -54, 0, -110])) // -110


var min2 = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max2 = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}




var min3 = function(list){
    return Math.min.apply(null,list);
}

var max3 = function(list){
    return Math.max.apply(null,list);
}