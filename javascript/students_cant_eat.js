var countStudents = function(students, sandwiches) {
    
  while (students.length > 0) {
      let topSandwich = sandwiches[0]
      
      if (!students.includes(topSandwich)) {
          return students.length
      }
      
      if (students[0] === topSandwich) {
          students.shift()
          sandwiches.shift()
      } else {
          let popped = students.shift()
          students.push(popped)
      }
  }
  
  return 0
};