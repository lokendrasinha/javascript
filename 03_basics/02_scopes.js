

// {}    //is called scope
// var c=300
/*let a = 300
if (true){
    let a = 10
    const b = 20
    console.log("Winner",a)
    
}*/

// var has global scope
// let and const have block scope

/*interview note scope checked through inspection 
 window of website is different and scope
 checked in node environment is different*/


// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)   scope of website is only inside two()

    two()    //number of times function called then that no of time call stack is created

}

// one()
/*
if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website);   //scope of website is in inner if
}
    */

//  +++++++++++++++++++++++++++++++++interesting +++++++++++++++++++++

function addone(value){
    return num+1
}

console.log(addone(5))

addTwo(5)    //error
const addTwo = function(nums){
    return num+2
}