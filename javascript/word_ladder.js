var ladderLength = function (beginWord, endWord, wordList) {
  // Check if endWord is in the wordList
  if (!wordList.includes(endWord)) return 0
  // Initiate steps to 1 because we know that the endWord exist and needs at least 1 step.
  let steps = 1
  // create a set of unique vales for faster lookup time (O(1))
  const wordSet = new Set(wordList)
  console.log(wordSet)
  // Create a queue to and add the beginning word for BFS
  let queue = [beginWord]
  // Create alphabet of arrays
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  // Start BFS while queue length is greater than 0
  while (queue.length > 0) {
    // Loop thru the queue backwords and grab and pop off the first element
    for (let k = queue.length; k > 0; k--) {
      let word = queue.shift()
      // check if that word is equal endWord, if so return the num of steps
      if (word === endWord) return steps

      // if not we continue our BFS by looping thru each letter in that word
      for (let i = 0; i < word.length; i++) {
        // loop thru each letter in alphabet
        for (let letter of alphabet) {
          // create a potentialWord from all possible matches
          const potentialWord = word.slice(0, i) + letter + word.slice(i + 1)

          // if the potentialWord exist in the wordSet means its a valid
          if (wordSet.has(potentialWord)) {
            // Push the potentialWord into the queue to start next search
            queue.push(potentialWord)
            // then delete the potentialWord in the wordSet so we dont repeat/backtrack
            wordSet.delete(potentialWord)
          }
        }
      }
    }
    // increment the steps
    steps++
  }

  // if break from the loop with no matches found and no endword - return 0
  return 0
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
)
