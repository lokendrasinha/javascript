/*const user = {
    username: "Rajat",
    price: 999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`)   //this is used to refer to the current context.
        // console.log(this)
    }   
}*/

/*user.welcomeMessage()
user.username = "Lokendra"
user.welcomeMessage()*/

// console.log(this)
// global object inside browser is window object

/*function chai(){
    let username = "Rajat"
    console.log(this.username);
}

chai()
*/    //this cannot be used in functions its only for object
/*
const chai = function(){
    let username = "Rajat"
    console.log(this.username);
}
chai()*/

// array function
// 


// ****** Arrow functions ************
// basic arrow function
/*const addTwo = (num1,num2) =>{
    return num1+num2
}*/

// implicit return
// in implicit return no need of return keyword and parenthesis
// const addTwo = (num1,num2) =>  (num1+num2)

const addTwo = (num1,num2) => ({username:"rajat"})

console.log(addTwo(3,4))

const myArray = [2,5,6,4,8]

