/* 
You have to drive for 50 kilometres and you car consumes 1L per 25 km. 
You have only 2 L of fuel left. Will you make it?
*/
function zeroFuel(distanceToPump, kilometresPerL, fuel) {
  return kilometresPerL * fuel >= distanceToPump;
}

console.log(zeroFuel(50, 25, 2))