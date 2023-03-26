// If one flower has an even amount of petals and the other one odd, they are in love. Otherwise, they're not.
// 1
function lovefunc1(flower1, flower2) {
    const condition1 = flower1 % 2 === 0 && flower2 % 2 !== 0;
    const condition2 = flower1 % 2 !== 0 && flower2 % 2 === 0;
    return condition1 || condition2;
}
console.log(lovefunc1(9, 4))


// 2
function lovefunc2(flower1, flower2) {
    if (flower1%2 === 0 && flower2 % 2 !== 0 || flower1%2 !== 0 && flower2%2 === 0) {
      return true;
    } else {
      return false;
    }
}

//3
function lovefunc3(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}