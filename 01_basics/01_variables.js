const accountId = 12345
let accountEmail = "nagamani@gmail.com"
var accountPassword = "123456"
accountCity = "Haryana"
let accountState //Default undefined

//If we try to change the variables which are declared as const it gives error
// accountId = 6785 //not allowed

console.log(accountId)
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//To print all the variables at a time without using many console lines

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])