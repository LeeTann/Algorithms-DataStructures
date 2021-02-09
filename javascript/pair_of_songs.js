// var numPairsDivisibleBy60 = function (time) {
//   let output = 0

//   for (let i = 0; i < time.length; i++) {
//     for (let j = i + 1; j < time.length; j++) {
//       if ((time[i] + time[j]) % 60 === 0) {
//         output++
//       }
//     }
//   }

//   return output
// }

var numPairsDivisibleBy60 = function (time) {
  let count = 0
  let hash = {}

  for (let val of time) {
    let remainder = val % 60
    let pair = 0

    if (remainder === 0) {
      pair = 0
    } else {
      pair = 60 - remainder
    }

    if (hash[pair]) {
      count += hash[pair]
    }

    if (!hash[remainder]) {
      hash[remainder] = 1
    } else {
      hash[remainder] += 1
    }
  }

  return count
}
