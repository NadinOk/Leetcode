// const digits = [1,2,3]
// const digits2 = [9,9,9]
// const digits3 = [9]

const plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
               digits[i]++
                return digits
            }
            digits[i] = 0
        }
        digits.unshift(1)
        return digits;
};

// console.log(plusOne(digits))
// console.log(plusOne(digits2))
// console.log(plusOne(digits3))