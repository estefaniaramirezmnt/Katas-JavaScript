// A hero needs 2 bullets to kill each dragon. Will he survive?

function hero(bullets, dragons){
  return (dragons * 2) <= bullets;
}


console.log(hero(10, 5)) // true
console.log(hero(7, 4)) // false