// # Cookie Monster can eat either 0, 1, 2, or 3 cookies at a time. 
// # If he were given a jar of cookies with `n` cookies inside of it, how many ways could he eat all `n` cookies in the cookie jar? 
// # Implement a function `eating_cookies` that counts the number of possible ways Cookie Monster can eat all of the cookies in the jar. 

// # For example, for a jar of cookies with `n = 3` (the jar has 3 cookies inside it), 
// # there are 4 possible ways for Cookie Monster to eat all the cookies inside it:

// #  1. He can eat 1 cookie at a time 3 times
// #  2. He can eat 1 cookie, then 2 cookies 
// #  3. He can eat 2 cookies, then 1 cookie
// #  4. He can eat 3 cookies all at once. 

// # Thus, `eating_cookies(3)` should return an answer of 4.
// # eating_cookies(3) should return the answer of 13

// # 0(3^n) - Exponential Time - when not using memcache since it calls recursion function 3 times
// # 0(n) - Linear - when using memcache. 

// Recursive solution w/out memcache
// eating_cookies = (n) => {
//     if (n === 0) {
//         return 1
//     }
//     if (n === 1) {
//         return 1
//     }
//     if (n === 2) {
//         return 2
//     }

//     return eating_cookies(n-1) + eating_cookies(n-2) + eating_cookies(n-3)
// }

// console.log(eating_cookies(5))

// Recurive solution with cache
let memHash = {}

function eating_cookies(n, cache) {
    if (n <= 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }

    if (n in memHash) {
        return memHash[n]
    } else {
        let output = eating_cookies(n-1, memHash) + eating_cookies(n-2, memHash) + eating_cookies(n-3, memHash)
        memHash[n] = output

        return output
    }
}

console.log(eating_cookies(5, memHash))