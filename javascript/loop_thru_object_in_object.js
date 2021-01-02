var myObj = {
  _id: '591327ea6325162512438858',
  orderCart: {
    totalPrice: 66.95,
    totalQty: 5,
    items: {
      '5900e2e1e2e75276ca68e10c': {
        item: [Object],
        qty: 2,
        price: 25.98,
      },
      '5900d8fde2e75276ca68e107': {
        item: [Object],
        qty: 2,
        price: 30.05,
      },
      '58fff1d322f00e71fdbfe422': {
        item: [Object],
        qty: 2,
        price: 20.01,
      },
    },
  },
  orderEmail: 'email@gmail.com',
  orderFullName: 'John Doe',
}

console.log('---- for...in ----')
for (var key in myObj.orderCart.items) {
  if (myObj.orderCart.items.hasOwnProperty(key)) {
    let obj = myObj.orderCart.items[key]
    console.log(obj)
    console.log(obj.price)
  }
}

console.log('----Obj.keys() ----')
Object.keys(myObj.orderCart.items).forEach((key) => {
  var obj = myObj.orderCart.items[key]
  console.log(obj.price)
})
