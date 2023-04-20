// Remove the vowels of a string
function disemVowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// replace() does not modify the original string, it returns a new one.

// const disemvowel = (str) => {
function disemvowel2(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
		return newStr;
		
	
};
console.log(disemVowel("How are you today?"))