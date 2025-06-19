const countCharacters = (str) => {
    const charCount = {}

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1
    }
    return charCount
};

const input = "hello world";
console.log(countCharacters(input));

