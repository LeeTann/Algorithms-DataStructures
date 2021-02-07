// # 1 //
// x = { foo: 'bar' }
// y = { bax: x }
// z = y['bax']['foo']
// console.log(z) // bar

// # 2 //
// function f(x) {
//   x *= 2
//   return function (y) {
//     y *= x
//     return function (z) {
//       return z * y
//     }
//   }
// }
// let g = f(3)(4)(5)
// console.log(g) //120

// # 3 //
// const f = (n) => (n <= 1 ? 1 : n * f(n - 1))
// let g = f(4)
// console.log(g) //24

// # 4 //
// let event = {
//   name: 'hot dog and burger sunday',
//   financials: {
//     baseCost: '$19.99',
//     discount: false,
//     maxCost: '$29.99',
//   },
//   subscribers: [
//     // lots of subs
//   ],
// }
// let eventPrice
// const assignEvent = ({ financials: { baseCost: price } }) =>
//   (eventPrice = price)
// assignEvent(event)
// console.log(eventPrice) // $19.99

// # 5 //
// function foo() {
//   function bar() {
//     setTimeout(() => console.log('Curly'), 1000)
//   }
//   console.log('Larry')
//   return bar
// }
// let x = foo()
// x()
// console.log('Moe')
// Larry => Moe => Curly

// # 6//
// function makeAddder(x) {
//   return function (y) {
//     return x + y
//   }
// }
// var add5 = makeAddder(5)
// var add8 = makeAddder(8)
// var add20 = makeAddder(20)
// assert(add5(10) === 15)
// assert(add8(6) === 14)
// assert(add20(6) === 26)

// # 7//
// function add(num1, num2, num3) {
//   return num1 + num2 + num3
// }

// console.log(add(4)) // NAN undefined

// #8 //
// function strToFloat(str) {
//   return parseFloat(str)
// }
// console.log(strToFloat('40'))
