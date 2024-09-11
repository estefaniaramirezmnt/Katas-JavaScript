// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. 
// The output should be two capital letters with a dot separating them. Sam harris => S.H 
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

var myName = "Estefanía Ramírez";
console.log(abbrevName(myName));

function abbrevName2(hereTheName) {
  var arrOfName = hereTheName.split(" ");
  var result = `${arrOfName[0][0]}.${arrOfName[1][0]}`
  return result;
}

console.log(abbrevName2(myName))