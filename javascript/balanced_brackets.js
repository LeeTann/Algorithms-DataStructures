/*
 * Complete the 'balancedBrackets' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING string as parameter.
 */
 // "[], (), {}, ||"
 // stack problem
 // loop thru string
 // if char at i == 'the brackets'
 // push it to the stack


function balancedBrackets(string) {
    let stack = []

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "[" || string[i] === "(" || string[i] === "{" || string[i] === "|") {
            stack.push(string[i])
            console.log(stack)
        } else {
            if (stack = []) {
                return false
            } else {
                let popped_item = stack.pop()
                console.log(popped_item)
    
                if (string[i] === "]" && popped_item !== "[") {
                    return false
                } else if (string[i] === ")" && popped_item !== "(") {
                    return false
                } else if (string[i] === "}" && popped_item !== "{") {
                    return false
                } else if (string[i] === "|" && popped_item !== "|") {
                    return false
                }
            }
        }
    }

    if (stack = []) {
        return true
    } else {
        return false
    }
}

console.log(balancedBrackets("foo(bar)baz"))