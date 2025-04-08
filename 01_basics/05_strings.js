const name = "naga"
const learn = "javascript"

//console.log(name + learn)

console.log(`my name is ${name} and i am learning ${learn}`)

const gameName = new String('naga_mani_byki') //creating an object

console.log(gameName[0])

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,2)
console.log(newString)

const anotherString = gameName.slice(-8,2) // the main difference btn substring and slice is slice takeup the negative values
console.log(anotherString)

const newStringOne = "   naga    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "http://naga.com/naga%20mani"

console.log(url.replace('%20' , '-'))

console.log(url.includes('sundar')) // returns boolean value

console.log(gameName.split('-')) // returns an array