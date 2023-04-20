// Make a count down and put it in an array

function reverseSeqq(n) {
    let newArr = [];
    for (var i = n; i > 0; i--) {
        newArr.push(i);
    }
    return newArr;
}

console.log(reverseSeqq(5)) 

const reverseSeq2 = n => {
    let arr = []
    for(i = 1; n >= i; i++){
      arr.push(i)
    }
    return arr.reverse();
  };

  console.log(reverseSeq2(5)) 