var minStepsGarden = function (A) {
  // get sum of array
  // find target value all garden should have, round up.
  // keep track of steps
  // if current val < target val, steps = steps + difference
  let sum = A.reduce((a, b) => a + b, 0)
  let target = Math.ceil(sum / A.length)

  let steps = 0

  for (let i = 0; i < A.length; i++) {
    if (A[i] < target) {
      steps = steps + (target - A[i])
    }
  }
  console.log(30 % 60)
  console.log(steps)
}

// console.log(minStepsGarden([1, 2, 2, 4])) //4
// console.log(minStepsGarden([4, 2, 4, 6])) //2
// console.log(minStepsGarden([1, 1, 2, 1])) //3
console.log(minStepsGarden([1, 2, 2, 7]))
