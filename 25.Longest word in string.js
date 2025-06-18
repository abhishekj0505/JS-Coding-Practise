
const str = 'Hi i am abhishek'

const strArray = str.split(' ')

const longestWord = (strArray)=>{
    return strArray.reduce((longest, current)=>{
        return longest.length>current.length? longest : current
    })
}

console.log(longestWord(strArray))