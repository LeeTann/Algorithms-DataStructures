// BRUTE FORCE
function twoStrings(s1, s2) {
    for (let s in s1) {
        for (let t in s2) {
            if (s1[s] === s2[t]) {
                return "YES"
            }
        }
    }
    return "NO"
}

// OPTIMIZE WAY

// function twoStrings(s1, s2) {
//     let hash = {}

//     for (let s of s1) {
//         hash[s] = true
//     }
    
//     for (let t of s2) {
//         if (t in hash) {
//             return "YES"
//         }
//     }
//     return "NO"
// }

console.log(twoStrings("hello", "doggy"))
console.log(twoStrings("hello", "diggy"))
console.log(twoStrings("hello", "doll"))