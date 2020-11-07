// Given a string of angle brackets, write a function that add brackets at the beginning and end of the string to make all brackets match. The angle brackets match if for every < there is a corresponding > and for every > there is a corresponding <.

// The example input string : ><<><

// The output string is <><<><>>

const process = (str) => {
  // When > is encountered, if no current <, add < to beginning of str
  // Add number of >'s to match number of current <'s

  let openingCount = 0
  let additoinalOpeningTag = 0

  for (let char of str) {
    if (char === '>') {
      if (openingCount === 0) {
        additoinalOpeningTag++
      } else {
        openingCount--
      }
    } else {
      openingCount++
    }
  }

  return '<'.repeat(additoinalOpeningTag) + str + '>'.repeat(openingCount)
}

console.log(process('><<><'))
console.log(process('><><><><<'))