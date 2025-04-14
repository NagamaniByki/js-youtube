const marvel_heros = ["thor", "ironman" , "spiderman"]
const dc_heros = ["superman" ,"flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros) 

/*
conact: 
creates a new array by including all the eles of both arrays
disadvantage:
can combine only 2 arrays
 */

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

/*spread:
same as concat but in spread we can combine more than 2 arrays
*/

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

/*
flat:
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/

console.log(Array.from("naga"))
/*
from:
returns an array from the string
*/
console.log(Array.from({name:"naga"})) // interesting returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
/*
of:
combines all the elments and forms an array
*/
