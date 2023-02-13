// const strs = ["flower","flow","flight"]
// const strs2 = ["dog","racecar","car"]

const longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === null) {
        return ''
    }
    let result = strs[0]

    for (let i = 0; i < strs.length; i++) {
        while(strs[i].indexOf(result) !== 0) {
            result = result.substring(0, result.length -1);

            if (result.length === null) {
                return ''
            }
        }
    }
    return result;
};

// console.log(longestCommonPrefix(strs))
// console.log(longestCommonPrefix(strs2))
