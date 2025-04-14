//array

const myArr = [0,1,2,3,4,5]

console.log(myArr[0])


/*
shallow copy:
 it is a copy where properties share the same reference 
*/

/*
deep copy:
 it is a copy where properties do not share the same reference 
*/

//different ways of declaring an array
const myHeroes = ["ntr" , "akhil"]

const myArr2 = new Array(1,2,3,4,5)

//Array methods

myArr.push(6)
myArr.pop()   // removes last ele

myArr.unshift(9) // adds elements at the start of an array
myArr.shift() // removes ele at start of an array

console.log(myArr.includes(9)) // return T OR F
console.log(myArr.indexOf(9)) // return -1 if not there else return index

const newArr = myArr.join()
/*
join():
this function convert the given array into string
*/

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


//slice,splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)


const myn2 = myArr.splice(1,3)

console.log("C ",myArr )
console.log(myn2)

/*
slice:
does not include the end range

splice:
includes the end range
and deletes the elements that are in splice from original array
*/