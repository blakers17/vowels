function hasMoreVowels(word) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let vowelCount = 0;
    let nonVowelCount = 0;

    for(let i = 0; i < word.length; i++) {
        const letters = word[i];
        if (vowels.includes(letters)) {
            vowelCount++;
        } else {
            nonVowelCount++;
        }
    } 
    if (vowelCount > nonVowelCount) {
        return true
    }
    return false
}
console.log(hasMoreVowels('awesome'));
console.log(hasMoreVowels('fun'))