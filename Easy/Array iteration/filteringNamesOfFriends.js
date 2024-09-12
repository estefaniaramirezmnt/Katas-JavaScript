// Make a list of your friends whose names have exatly 4 letters.

const choosingFriends = (friendsList) => {
  const newFriendList = [];
  for (let friend of friendsList) {
    if (friend.length === 4) {
      newFriendList.push(friend);
    }
  }
  return newFriendList;
};

const choosingFriends2 = (friendsList) => {
  return friendsList.filter((friend) => friend.length === 4);
};

var test = ["Hornet", "Álvaro", "Luis", "Fire", "Dome", "Luisa", "Mel", "Marta", "Jess"];
console.log(choosingFriends(test)); 
console.log(choosingFriends2(test));