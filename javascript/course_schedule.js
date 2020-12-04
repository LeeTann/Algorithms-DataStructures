// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0. So it is possible.

// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

// MY INPUTS: total# = 3, prereq = [[0, 1], [1], [2, 0]]
// go thru each class and check. if no requirements, continue. if it has requirements check if that class exist and does not
// if it does have requirements check that class is in the array and if it is check if it has requirements.

const canFinish = (numCourses, prerequisites) => {
  // create an list to keep track of all the courses that have prerequisites.
  const list = new Array(numCourses).fill(0)

  for (const [course, prereq] of prerequisites) {
    list[course] += 1
  }
  console.log(list)
  // create a queue and push all the ones course in the list with that are not given into the queue
  const queue = []
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 0) {
      queue.push(i)
    }
  }
  console.log('queue', queue)
  let count = 0

  while (queue.length !== 0) {
    const poppedItem = queue.shift()
    console.log('popped', poppedItem)
    count += 1
    console.log('count', count)

    for (const [course, prereq] of prerequisites) {
      if (prereq === poppedItem) {
        list[course] -= 1
        console.log('list...', list)
        if (list[course] === 0) {
          queue.push(course)
          console.log('queue...', queue)
        }
      }
    }
  }

  // count will equal numCourses if no cycle are found.
  return count === numCourses
}
