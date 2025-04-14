//singleton

//object literals

const JsUser = {
    name:"naga",
    full_name:"nagamani",
    age:19,
    location:"india",
    email:"nagamani22446@gmail.com",
    lastLoginDays:["monday" , "tuesday"]
} 

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.full_name)
console.log(JsUser["lastLoginDays"])

JsUser.email = "bykinagamani@gmail.com"
Object.freeze(JsUser)
JsUser.email = "bykinaga.com"
console.log(JsUser)

/*
freeze:
it does not allow to change
*/

JsUser.greeting = function(){
    return console.log("Hello JS user");
}
JsUser.greeting()