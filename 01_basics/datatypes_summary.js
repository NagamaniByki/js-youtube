//based on how data is stored in the memory and how the data is accessed 

//based on how the data is stored in the memory the data is divided into 2 types

// primitive

// 7 types : string,number,boolean,null,undefined , symbol , bigint 

const score = 100 //datatype = number
const scoreValue = 100.3
const isLoggedIn = false //datatype = boolean
const outsideTemp = null //datatype = object
let userEmail;  //datatype = undefined

const id = Symbol('123') //datatype = symbol
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 233333333444444555555555555n 



//Reference (Non Primitive)

//ex: Array,objects,functions

const heroes = ['akhil' , 'ntr' , 'virat' , 'pk'] //typeof == object
let myObj = {
    name:"akhil",
    age:22,

}   //data type = object

const myFunction = function(){
    console.log("hello world!")
}   //data type = function or function object



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//variables are stored in the memory . 
//memories are mainly divided into 2 types : Stack(primitive) , Heap(Non-Primitive)

let myYoutubeName = "javascriptcoding"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(anothername)
console.log(myYoutubeName)

let userOne = {
    email:"userpne@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne // here both userOne and userTwo points to same data in the memory heap

userTwo.email = "user2@gmail.com" //when we cange the data in the userTwo it automatically make changes in the userOne also . sooo, In the below console statements we obtain same values and the updated values

console.log(userOne.email)
console.log(userTwo.email)