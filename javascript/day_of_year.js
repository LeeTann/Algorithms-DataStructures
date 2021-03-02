var dayOfYear = function (date) {
  let year = new Date(date).getFullYear()
  let start = new Date(`1/1/${year}`).getTime()
  let end = new Date(date).getTime()

  let diff = Math.abs(end - start)
  return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1
}
