//singleton object  - object created by constructor is called singleton object
// Object.create 
// object literals

// adding symbol to object as a key

const mySym = Symbol("key1")   //declaring symbol
// using symbol as a key in object
const Jsuser = {
    name:"Rajat",
    "full Name":"Rajat Sinha",
    [mySym]:"mykey1",    //for using symbol in object enclose it in square bracket
    age:18,
    location:"Jaipur",
    email:"rajat@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// by default keyword is considered string

// console.log(Jsuser.email)   //while using dot write key as it is
// console.log(Jsuser["email"]) //while using [] use keyword in ""

// console.log(Jsuser.full Name) //cannot access full name using dot bcz it is in ""
// console.log(Jsuser["full Name"])
// console.log(typeof Jsuser[mySym])


// Object.freeze(Jsuser)  //no changes will be affected on object
Jsuser.email = "lokendra@gmail.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());