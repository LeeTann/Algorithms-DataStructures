/*
 * Complete the 'fibonacci' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */
// n = 8: (0, 1, 1, 3, 5, 8, 13)
// n is the length of fib numbers
// n1 = 0, n2 = 1. sum n1 + n2
function fibonacci(n) {
    
    // set the first two numbers n1 and n2 into an array
    let fibArray = [0, 1]
    // for loop set i = starting index 2, as long as i < n which is 8, increment i.
    for (let i = 2; i < n; i ++) {
        // get the sum of prior two numbers by getting the (array.length -1) + (array.length -2)       
        let fibNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length -2]
        // push it to the array
        fibArray.push(fibNum)
        console.log(fibArray)
    }
    if (n === 1) {
        return [fibArray[0]]
    }
    return fibArray
}

console.log(fibonacci(1))