//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString()) // specify only day mon date year
console.log(myDate.toLocaleString())
console.log( typeof myDate) //object

// entering user date
//let myCreatedDate = new Date(2023 , 0 , 2)
/*
let myCreatedDate = new Date(2023 , 0 , 23 , 5,3)
let myCreatedDate = new Date(2023 , 0 , 23 , 5,3)*/
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
     weekday : "long"
})