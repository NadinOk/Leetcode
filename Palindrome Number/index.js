/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const x = 121
// const x2= -121
// const x3 = 10


const isPalindrome = function(x) {
    let reversedStr = ''
    let xStr = x.toString()

    for (let i of xStr) {
        reversedStr = i + reversedStr
    }
    return (reversedStr === xStr)
};

// console.log(isPalindrome(x))
// console.log(isPalindrome(x2))
// console.log(isPalindrome(x3))