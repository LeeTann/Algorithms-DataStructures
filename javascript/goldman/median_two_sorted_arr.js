var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0
  let j = 0
  const arr = []
  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] < nums2[j] || nums2[j] === undefined) {
      arr.push(nums1[i])
      i++
    } else {
      arr.push(nums2[j])
      j++
    }
  }
  let median
  if (arr.length % 2 === 0) {
    median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  } else {
    median = arr[Math.floor(arr.length / 2)]
  }
  return median
}

// var findMedianSortedArrays = function (nums1, nums2) {
//   const sortedArr = [...nums1, ...nums2].sort((a, b) => a - b)

//   for (let i = 0; i < sortedArr.length; i++) {
//     let mid = Math.floor(sortedArr.length / 2)
//     if (sortedArr.length % 2 !== 0) {
//       return sortedArr[mid]
//     } else {
//       return (sortedArr[mid] + sortedArr[mid - 1]) / 2
//     }
//   }
// }
