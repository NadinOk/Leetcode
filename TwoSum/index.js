/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const nums = [2,7,11,15];
// const target = 9;
// const nums2 = [3,2,4];
// const target2 = 6;
// const nums3 = [3,3]
// const target3 = 6;

const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
//
// console.log(twoSum(nums, target))
// console.log(twoSum(nums2, target2))
// console.log(twoSum(nums3, target3))