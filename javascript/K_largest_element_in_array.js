var findKthLargest = function(nums, k) {
  let sortedArray = nums.sort((a, b) => b - a)
  
  console.log(sortedArray)
  return (sortedArray[k-1])
};