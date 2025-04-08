const score = 400
console.log(score)


const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(1))  // returns the number of elements after the decimal

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(2)) // fixes the data upto that num of digits

const hundreds = 1000000
console.log(hundreds.toLocaleString())
 //as it is difficult to read the num of zeroes this method adds commas for readability


// +++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))//return positive value
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(3,4,5))
console.log(Math.max(3,5,6))


console.log(Math.random()) //always returns the values between 0 and 1
console.log(Math.random()*10)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min+1)) + min)