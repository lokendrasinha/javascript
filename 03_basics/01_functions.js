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
console.log(loginUserMessage())  //if we do not pass any argument it takes value of parameter as undefined

