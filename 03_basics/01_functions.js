function sayMyName() {
    console.log("R")
    console.log("A")
    console.log("J")
    console.log("A")
    console.log("T")    
}
// sayMyName()

// adding two numbers
// while defining fuction num1 and num2 are called parameters
// and while calling num1 and num2 are called arguments
/*function addTwoNumbers(num1,num2){   
    console.log(num1+num2);
    
}*/

function addTwoNumbers(num1,num2){
    let result = num1+num2
    return result
}

// statement in a function after return statement is unreachable code


const result = addTwoNumbers(3,5)
// console.log("Sum is : ",result);

function loginUserMessage(username = "sam"){
    if(!username){ 
        return `Please enter the username`
    }
    return `${username}, just logged in`
}
// console.log(loginUserMessage("Rajat"))
// console.log(loginUserMessage())  //if we do not pass any argument it takes value of parameter as undefined

function calculateCartPrice(val1,val2,...num1){  //... is called as rest operator or spread operator
    return num1
}
// rest or spread is used to take multiple argument for one paramenter in form of array
// console.log(calculateCartPrice(200,400,500,600))


const user = {
    username:"Rajat",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

const mynewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(mynewArray))
