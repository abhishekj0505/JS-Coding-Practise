
const str = 'abccbac'


let isPalindrome = true

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false
    }
}

if (isPalindrome) {
    console.log('It is a palindorme')
} else {
    console.log('It isnt a palindrome')
}


