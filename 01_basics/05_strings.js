const name = "Rajat"
const repoCount = 50

// console.log(name+repoCount)

// String interpolation most preferred way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Rajat-Sinha')

// console.log(gameName[2])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-10,4)  //in slice we can also give negative value so it will start in reverse
console.log(anotherString)

const newStringOne = "     hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim()) //remove all starting and ending space of string

const url = "https://hitest.com/hitesh%20choudhary"

console.log(url.replace('%20','_')) // replace %20 with _

console.log(url.includes('hitesh'))   //check hitesh is present in url or not

console.log(gameName.split('-')) // split string on basis split delimiter that is dash  [ 'Rajat', 'Sinha' ]


