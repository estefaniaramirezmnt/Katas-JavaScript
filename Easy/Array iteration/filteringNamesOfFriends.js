// Make a list of your friends whose names have exatly 4 letters.

function friend (friends) {
    let listOfFriends = [];
    for (let person of friends) {
        if (person.length === 4) {
            listOfFriends.push(person)
        }
    }
    return listOfFriends
}


function friend2(friends){
    return friends.filter(n => n.length === 4)
}
