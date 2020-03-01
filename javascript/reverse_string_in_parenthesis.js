function reverseString(s) {

    let stack = [[]]
    let index
    // loop thru string and push all chars into a stack up til ')'
    for (let i = 0; i < s.length; i++) {
        console.log("length ", stack.length)
        if (s[i] === '(') {
            stack.push([])
            console.log(stack)
        } else if (s[i] === ')') {
            index = stack.length - 2
            console.log(index)
            let popped = stack.pop()
            console.log("popped", popped)
            popped.reverse().forEach(char => stack[index].push(char))
            console.log(stack)
        } else {
            stack[stack.length - 1].push(s[i])
        }
    }    
    return stack[0].join("") 
}

// console.log(reverseString('(bar)'))
console.log(reverseString('lee(bar)tann'))