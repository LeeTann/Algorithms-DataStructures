function flattenArr(arr) {
  // return arr.reduce((flat, toFlatten) => {
  //   return flat.concat(
  //     Array.isArray(toFlatten) ? flattenArr(toFlatten) : toFlatten
  //   )
  // }, [])

  return arr.flat(Infinity)
}

console.log(flattenArr([[1], [2, 3], [4]]))
