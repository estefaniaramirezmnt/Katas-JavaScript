/* 
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[] -->"no one likes this"
["Peter"]-->"Peter likes this"
["Jacob", "Alex"]-->"Jacob and Alex like this"
["Max", "John", "Mark"]-->"Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]-->"Alex, Jacob and 2 others like this"
*/
function likes(name) {
    if (name.length == 0) {
        return "no one likes this";
    } 
    else if (name.length == 1) {
        return `${name[0]} likes this`;
    } 
    else if (name.length == 2) {
        return `${name[0]} and ${name[1]} like this`;
    } 
    else if (name.length == 3) {
        return `${name[0]}, ${name[1]} and ${name[2]} like this`
    }
    else {
        // let restOfThePeople = 0;
        // for (let i = 2; i < name.length; i ++) {
        //     restOfThePeople += 1
        // }
        return `${name[0]}, ${name[1]} and ${name.length - 2} others like this`
    }
}


console.log(likes(["Max", "John", "Mark", "Max"]))