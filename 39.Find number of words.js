

const string = '    we  have    a    string   '

// find the count of words in the string 
const count = string.split(' ').filter((item) => {
    return item !== ''
}).length

console.log(count)