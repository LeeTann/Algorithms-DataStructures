// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

let rotate = function(nums, k) {
    length = nums.length
    k = k % length
    while(k > 0) {
        nums.unshift(nums.pop()) // pop last item and unshift move to front of array
        k--
    }
    console.log(nums)
};

rotate([1,2,3,4,5,6,7,8,9], 3)

// Solution 2
var rotate2 = function(nums, k) {
    k = k % nums.length;
    helper(nums, 0, nums.length - 1); // reverse the array
    console.log(nums)
    helper(nums, 0, k - 1); // reverse first 4 array indicie
    console.log(nums)
    helper(nums, k, nums.length - 1); // reverse last 3 array indicie
    console.log(nums)
};

let helper = (nums, start, end) => {
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

rotate2([1,2,3,4,5,6,7], 4)