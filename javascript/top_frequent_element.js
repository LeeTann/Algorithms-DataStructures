var topKFrequent = function (nums, k) {
  // create an object to store the number and the frequency
  let obj = {}

  // loop thru the array and see if the number is already in hash
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i]

    // if not then add number to hash and set equal to 1
    if (!obj[currNum]) {
      obj[currNum] = 1
    } else {
      // else it means that the number exist and we increment it by 1
      obj[currNum] += 1
    }
  }

  // get the keys from object which returns an array of keys.
  let arr = Object.keys(obj)

  // sort the array of keys by most frequency
  arr.sort((a, b) => obj[b] - obj[a])

  // slice off the array starting at index 0 to k
  return arr.slice(0, k)
}
