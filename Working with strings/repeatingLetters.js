/*
 accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
function accum(str) {
    str = str.toLowerCase();
    let newString = "";
    for (var i = 0; i < str.length; i++) {
        newString += str[i].toUpperCase();
        newString += str[i].repeat(i) + "-"
    }
    return newString.slice(0, -1)
}

console.log(accum("ZpglnRxqenU"));

function accum2 (s) {
	return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}