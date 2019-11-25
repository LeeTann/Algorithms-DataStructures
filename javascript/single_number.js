// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

let singleNumber = function(nums) {
   let set = new Set()

   for (num of nums) {
       if (set.has(num)) {
           set.delete(num)
       } else {
           set.add(num)
       }
   }
   console.log(Array.from(set)[0])
};

singleNumber([4,1,2,1,2])

let hashSingleNumber = function(nums) {
    let hash = {}

    nums.forEach(num => {
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    })

    console.log(hash)
    for (let i = 0; i < nums.length; i ++) {
        if (hash[nums[i]] === 1) {
            console.log(nums[i])
        }
    } 
}

hashSingleNumber([4,1,2,1,2,5,5,5])