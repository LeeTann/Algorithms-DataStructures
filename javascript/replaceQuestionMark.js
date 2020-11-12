// Mark is fan of logic based games. However he is bored of the basic ones, like Sudoku and Mastermind,
// since he has solved so many of them. Recently he found a new game in which one is given a string with some question marks in it.
// The objective is to replace all of the question marks with letters(one letter per question mark) in such a way that
// no letters appears next to another letter of the same kind.

// # Write a function:
// # def replaceQuestionMark(puzzle):
// #   pass
// #   “”" Your code goes here “”"
// # that given a string puzzle, returns a copy of the string with all the question marks
// replaced by lowercase letters(a-z) in such a way that the same letters do not occur next to each other.
// The result can be any of the possible answers as long as it fulfils the above requirements.

// # Examples:
// # Given puzzle = ‘xy?xz?’, your function might return ‘xycxza’. Some other possible results are ‘xyzxzd’, ‘xyfxzf’.
// # Given puzzle = ‘ab?e?mr??’. Your function might return ‘abveamrab’
// # Given puzzle = ‘??????’. Your function might return ‘league’
// # Write an efficient algorithm for the following assumptions:
// # String puzzle contains only of lowercase letters(a-z) or ‘?’
// # It is always possible to turn string ‘puzzle’ into a string without two identical consecutive letters

// loop thru the string
// check if the char is an alphabet, if not then we know its a '?'
// if it's a '?', check if prev and next and remove it from possible choices.
// choose a random letter
// return the output

var replaceQuestionMark = (puzzle) => {
  // let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let puzzleArray = puzzle.split('')

  for (var i = 0; i < puzzleArray.length; ++i) {
    if (puzzleArray[i] === '?') {
      if (puzzleArray[i - 1] !== 'a' && puzzleArray[i + 1] !== 'a') {
        puzzleArray[i] = 'a'
      } else if (puzzleArray[i - 1] !== 'b' && puzzleArray[i + 1] !== 'c') {
        puzzleArray[i] = 'b'
      } else {
        puzzleArray[i] = 'c'
      }
    }
  }

  console.log(puzzleArray.join(''))
}

replaceQuestionMark('xy?xz?')
