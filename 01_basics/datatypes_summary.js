// primitive


// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

// const score=100

const id = Symbol('123')
const anotherid = Symbol('123')
// id amd anotherid is not same as we used Symbol

// const bigInt = 4665545665536656n     


// javascript is dynamically typed language

// Reference type (Non primitive datatype)

// arrays, Objects, Functions

// arrays
const heros = ["shaktiman", "naagraj", "doga"];
// objects
let myObj = {
    name:"rajat",
    age:22,
}

// function 

const myFunction = function(){
    console.log("hello world")
}

/* type of val                   result
     undefined                     "undefined"
     Null                          "object"
     Boolean                        "boolean"
     Number                         "number"
     String                            "string"
     Object                             "object"
     function                            "function" also known as object function
     
*/

// console.log(typeof myFunction)

// stack memory and heap memory
// stack memory in primitive datatype used
// heap for non primitive

let myYoutubename = "rajatsinha"

let anothername = myYoutubename

console.log(anothername)

let userOne = {
    email: "userat@google.com",
    upi: "upi@ybl"
}

let userTwo= userOne

userTwo.email = "Rajat@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

