console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 == 1)
console.log(2 != 1)


console.log("2" > 1) //js automatically converts string into num and then compares
console.log("02" > 1)

console.log(null < 0)  //false
console.log(null == 0)  //false
console.log(null >= 0) //true

/*
The reason is that an equality check == and comaprisions > >= < <= work differently
comparisions convert null to a num , treating it as 0
*/ 

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)

//===

console.log("2" === 2)