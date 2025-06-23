const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman","flashman","batman"]

// marvel_heroes.push(dc_heroes)  
/*In this above it doesnt add elements of dc_heroes 
to marvel_heroes it add dc_heroes array as one 
element to marvel heroes like this
  ['thor', 'Ironman','spiderman', [ 'superman', 'flashman', 'batman' ]]*/
// console.log(marvel_heroes)

// const allheroes =  marvel_heroes.concat(dc_heroes) //it add dc_heroes element to marvel heroes and return new array
// console.log(allheroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes];  //this also work as above concat()
// console.log(all_new_heroes)
/* ...marvel_heroes spread element of arrays into individual
  elements it is also known as spread operator*/

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
/* flat(depth) flattens the nested array to a single 
array by spreading inner arrays*/
console.log(realAnotherArray)


console.log(Array.isArray("Hitesh"))   // check if value passed is a array or not
console.log(Array.from("Rajat")) //convert given string to array of characters
console.log(Array.from({name:"Rajat"}))  //interesting case for interview it gives empty array []

let socre1=100
let score2=200
let score3=300

console.log(Array.of(socre1,score2,score3)) //returns a new array from set of elements [ 100, 200, 300 ]







