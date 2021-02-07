/*
  n = 5. num of companies. can ony have 1 event at a time. 
  arrival = [1,3,3,5,7]
  duration = [2,2,1,2,1]
  so a total of 4 events can take place.

  [1,2], [7,3] // 1 event
  [1,3,4,6], [4,3,3,2] // 2 events
*/

const maxEvent = (arrival, duration) => {
  let maxEvents = 1
  let maxTime = arrival[0] + duration[0]

  for (let i = 1; i < arrival.length; i++) {
    if (arrival[i] >= maxTime) {
      maxTime = arrival[i] + duration[i]
      maxEvents++
    }
  }

  return maxEvents
}

console.log(maxEvent([1, 3, 3, 5, 7], [2, 2, 1, 2, 1])) //4
console.log(maxEvent([1, 2], [7, 3])) //1
console.log(maxEvent([1, 3, 4, 6], [4, 3, 3, 2])) //2
