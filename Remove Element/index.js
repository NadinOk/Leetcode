// const nums = [3,2,2,3];
// const val = 3
// const nums2 = [0,1,2,2,3,0,4,2];
// const val2 = 2



const removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length
};

// console.log(removeElement(nums, val))
// console.log(removeElement(nums2, val2))
