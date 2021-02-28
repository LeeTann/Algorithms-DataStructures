var daysBetweenDates = function (date1, date2) {
  let first = new Date(date1).getTime()
  let second = new Date(date2).getTime()

  let timeDiff = Math.abs(first - second)

  let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
  return diffDays
}

// daysBetweenDates('2019-06-29', '2019-06-29') //1
console.log(daysBetweenDates('2020-01-15', '2019-12-31')) //15
