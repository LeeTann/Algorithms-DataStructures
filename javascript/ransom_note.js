function checkMagazine(magazine, note) {
    
    // loop thru magazine. insert each word in hashtable. if word already exist in hash just increment it.
    let hash = {}

    for (let word of magazine) {
        if (word in hash) {
            hash[word]++
        } else {
            hash[word] = 1
        }
    }
    // console.log(hash)

    // loop thru note. check if word not in hash or word is equal to 0. print No and return.
    for (let word of note) {
        if (!hash[word] || hash[word] === 0) {
            console.log("No")
            return
        } else {
            // else we want to decrement the word in hash
            hash[word]--
        }
    }
    
    // if we make it all the way thru, that means we can make the note out of magazine. print Yes.
    console.log("Yes")
}

checkMagazine(["give", "me", "me", "me", "give", "night"], ["give", "me", "me", "me", "give"])