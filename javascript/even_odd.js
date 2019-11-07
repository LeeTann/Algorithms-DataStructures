// Take in an array and return an array of the sums of even and odd numbers
// ex. evenOddSums([2, 6, 4, 5, 9]) == [12, 14]

function evenOddSums(array) {
    evenSum = 0
    oddSum = 0

    array.forEach(num => {
        if (num % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num
        }
    });

    return [evenSum, oddSum]
}

console.log(evenOddSums([2, 6, 4, 5, 9]))

// To find even number, take the num % 2 === 0.
// To find odd number, take the num % 2 === 1.
// forEach() is a higher order function that takes a function