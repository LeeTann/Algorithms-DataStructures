function rank(st, we, n) {
  // your code
  if (st === '') return 'No participants'

  let myArr = st.toLowerCase().split(',')

  if (n > myArr.length) return 'Not enough participants'

  let sumArr = []

  // loop thru the array and calculate val. then grab the sum of each name.
  for (let name of myArr) {
    let nameVal = []

    for (let i = 0; i < name.length; i++) {
      let val = name.charCodeAt(i) - 96
      nameVal.push(val)
    }

    let sum = nameVal.reduce((a, b) => a + b, 0)
    let newSum = sum + name.length

    sumArr.push(newSum)
  }

  // calculate total sum
  let total = []
  let index = 0
  while (index < myArr.length) {
    let finalSum = sumArr[index] * we[index]
    total.push(finalSum)
    index++
  }

  // create a hash containing name: total
  let hash = {}
  let i = 0
  while (i < total.length) {
    for (let name of myArr) {
      hash[name] = total[i]
      i++
    }
  }

  // sort
  let sorted = Object.entries(hash).sort((a, b) => {
    if (b[1] === a[1]) {
      if (a[0] > b[0]) {
        return 1
      } else {
        return -1
      }
    } else {
      return b[1] < a[1] ? -1 : 1
    }
  })
  console.log(sorted)

  let answer = sorted[n - 1][0]
  return answer[0].toUpperCase() + answer.slice(1)
}
