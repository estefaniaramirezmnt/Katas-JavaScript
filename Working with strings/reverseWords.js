// Complete the solution so that it reverses the string passed into it: 'world'  =>  'dlrow'; 'word'   =>  'drow'
function solution(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}

console.log(solution("computer"));