// Code a function that count all the vowels

//1
function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (var char of str) { // for each
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

//2 
function getCount(str) {
    const count = str.match(/[aeiou]/g || []).length;
    return count;
}


// 3
const getCount2 = str => str.replace(/[^aeiou]/g, '').length;


// 4
function getCount2(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

// 5
function getVowels(str) {
    var vowelsCount = 0;
    for (var i = 0; i <= str.length - 1; i++) {
      if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
}