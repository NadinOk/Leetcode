
// const s = "()"
// const s2= "()[]{}"
// const s3 = "(]"


const isValid = function(s) {
    let sObj = {
        '(' : ')',
        '[': ']',
        '{': '}'
    }
    let res = []
    for (let i of s){

        if(sObj[i]) {
            res.push(sObj[i])
        } else {
            if(res.pop() !== i) return false
        }
    }
    return (!res.length)
};

// console.log(isValid(s))
// console.log(isValid(s2))
// console.log(isValid(s3))