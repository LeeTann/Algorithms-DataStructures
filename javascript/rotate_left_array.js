// function rotLeft(a, d) {
//     let size = a.length
//     let rotatedArr = [size]
//     let i = 0
//     let rotateIndex = d

//     while (rotateIndex < size) {
//         rotatedArr[i] = a[rotateIndex]
//         i++
//         rotateIndex++
//     }

//     rotateIndex = 0
//     while (rotateIndex < d) {
//         rotatedArr[i] = a[rotateIndex]
//         i++
//         rotateIndex++
//     }
//     console.log(rotatedArr)
//     return rotatedArr
// }

// rotLeft([1, 2, 3, 4, 5], 2)

function rotLeft(a, d) {
    // slice of first part of the array
    let firstSliced = a.slice(0, d)
    // slice of second part of the arry
    let secondSliced = a.slice(d, a.length)
    // create a new array
    let newArray = []

    // loop thru second array and add it to the new array.
    for (let i of secondSliced) {
        newArray.push(i)
    }
    // loop thru first array and add it to the new array.
    for (let i of firstSliced) {
        newArray.push(i)
    }

    console.log(newArray)
    return newArray
}

rotLeft([1, 2, 3, 4, 5], 2)