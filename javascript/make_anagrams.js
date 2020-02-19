function makeAnagram(a, b) {
    // Create a counter for number of deletions
    let counter = 0

    // Create an empty hash
    let hash = {}

    // Iterate over the first string and add each char to hash
    for (let char of a) {
        if (hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1
        }
    }

    // Iterate over the second string
    for (let char of b) {
        // check if in hash subtract each occurance from the hash
        if (hash[char]) {
            hash[char]--
        // else set it to -1
        } else {
            hash[char] = -1
        }
    }     

    // loop over the hash
    for (let char in hash) {
        // get the absolute values and set it to counter
        counter += Math.abs(hash[char])
        
    } 
    // return count
    console.log(counter)
    return counter
}

makeAnagram('cde', 'abc')