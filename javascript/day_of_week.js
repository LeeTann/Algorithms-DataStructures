// var dayOfWeek = function (day, month, year) {
//   let map = {
//     0: 'Sunday',
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//   }

//   let date = new Date(`${month}/${day}/${year}`)
//   return map[date.getDay()]
// }

var dayOfWeek = function (day, month, year) {
  let date = new Date(`${month}/${day}/${year}`).toLocaleString('default', {
    weekday: 'long',
  })
  return date
}

console.log(dayOfWeek(31, 8, 2019)) //Saturday
