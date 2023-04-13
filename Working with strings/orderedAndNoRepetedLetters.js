// Unify two strings. The letters can not be repeted, and they must be writed in order.

function longest(a, b) {
    const uniqueLetters = new Set(a + b)
    const arrOfLetters = Array.from(uniqueLetters);
    return arrOfLetters.sort().join('');
}

function longest2(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere")) // aehrsty