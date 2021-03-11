// STACK. convert str to arr with split('')
// loop thru arr. check if '(', push index to arr.
// if it's ')', then check if stack.length > 0, then pop, else set arr[i] = ''
// after finish min loop. loop thru remaining index in stack and set the rest of arr[i] = ''
// convert arr back to str with join('') and return

function minRemove(str) {
  let arr = str.split('')
  let stack = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i)
    } else if (arr[i] === ')') {
      if (stack.length > 0) {
        stack.pop()
      } else {
        arr[i] = ''
      }
    }
  }

  for (let i of stack) {
    arr[i] = ''
  }

  return arr.join('')
}

// console.log(minRemove('lee(t(c)o)de)'))
// console.log(minRemove('a)b(c)d'))
console.log(minRemove('))(('))
// console.log(minRemove('(a(b(c)d)'))
