export function MoneyFormat(cash) { 
  if (cash === null) return
  return cash.toString().split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}

export function Discount(cash, discount) {
  let newCash = cash - cash * discount / 100
  newCash += ''
  if (newCash === null) return
  return newCash.toString().split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}

export function Multiply(cash, quantity) {
  let value = Number(cash) * Number(quantity)
  if (value === null) return
  return value.toString().split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}