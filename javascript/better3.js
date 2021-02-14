// Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").
// Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500),
// returns the day of the week that is K days later.

// For example, given S = "Wed" and K = 2, the function should return "Fri". Given S = "Sat" and K = 23, the function should return "Mon".

function getDay(s, k) {
  let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  let index = weekDays.findIndex((weekday) => weekday == s)
  console.log(index)

  console.log(weekDays[(index + k) % 7])
}

getDay('Wed', 8)
// getDay('Sat', 23)
