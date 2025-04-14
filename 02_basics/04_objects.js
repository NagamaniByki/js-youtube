const tinderUser = {}

tinderUser.name = "naga"
tinderUser.age= 19
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "nagamani@gmail.com",
    fullname:{
        userfullname:{
            firstname: "naga",
            lastname: "mani"
        }
    }
}

//console.log(regularUser.fullname)
//console.log(regularUser.fullname.userfullname)
//console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3:"a",
    4:"b"
}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2) //same as spread operator
const obj3 = {...obj1,...obj2}

console.log(obj3)

const users = [
    {
    id:1,
    name:"chinni"
},    {
    id:2,
    name:"naga"
}

]
console.log(users) // return an array of objects

console.log(users[1].id)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: 999,
    courseinstructor: "hitesh"
}

const {courseinstructor} = course

console.log(courseinstructor)