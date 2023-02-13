// const nums = [1,3,5,6];
// const target = 5;
// const nums2= [1,3,5,6];
// const target2 = 2;
// const nums3 = [1,3,5,6];
// const target = 7;


const searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return start;
};

// console.log(searchInsert(nums, target))
// console.log(searchInsert(nums2, target2))
// console.log(searchInsert(nums3, target3))