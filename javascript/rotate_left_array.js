function rotLeft(a, d) {
    let size = a.length
    let rotatedArr = [size]
    let i = 0
    let rotateIndex = d

    while (rotateIndex < size) {
        rotatedArr[i] = a[rotateIndex]
        i++
        rotateIndex++
    }

    rotateIndex = 0
    while (rotateIndex < d) {
        rotatedArr[i] = a[rotateIndex]
        i++
        rotateIndex++
    }
    console.log(rotatedArr)
    return rotatedArr
}

rotLeft([1, 2, 3, 4, 5], 2)