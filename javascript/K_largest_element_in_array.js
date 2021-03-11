// var findKthLargest = function(nums, k) {
//   let sortedArray = nums.sort((a, b) => b - a)

//   console.log(sortedArray)
//   return (sortedArray[k-1])
// };

var findKthLargest = function (nums, k) {
  let sortedArr = mergeSort(nums)
  return sortedArr[k - 1]
}

function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr

  const mid = Math.floor(arr.length / 2)
  const leftArr = mergeSort(arr.slice(0, mid))
  const rightArr = mergeSort(arr.slice(mid))

  let result = []
  let i = 0
  let j = 0

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] > rightArr[j]) {
      result.push(leftArr[i])
      i++
    } else {
      result.push(rightArr[j])
      j++
    }
  }

  result = result.concat(leftArr.slice(i))
  result = result.concat(rightArr.slice(j))
  return result
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
