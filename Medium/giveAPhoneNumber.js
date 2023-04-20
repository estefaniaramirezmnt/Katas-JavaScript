/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a EEUU phone number.
This [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) has to returns (123) 456-7890 */
function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`

}

function createPhoneNumber2(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

function createPhoneNumber3(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }

 function createPhoneNumber4(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }