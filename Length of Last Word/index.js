// const s = "Hello World"
// const s2 = "   fly me   to   the moon  "
// const s3 = "luffy is still joyboy"

const lengthOfLastWord = function(s) {
    const lastWord = s.split(/[\s\t]+/)

    if (lastWord[lastWord.length - 1] === '') {
        return lastWord[lastWord.length - 2].length
    }

    return lastWord[lastWord.length - 1].length
};

// console.log(lengthOfLastWord(s))
// console.log(lengthOfLastWord(s2))
// console.log(lengthOfLastWord(s3))