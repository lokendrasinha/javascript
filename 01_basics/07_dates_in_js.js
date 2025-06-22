// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023,0,23)  // in js month starts from 0
// let myCreatedDate = new Date(2025,0,23,5,3)
// let myCreatedDate = new Date("2025-06-23")
let myCreatedDate = new Date("01-14-25")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);  //give value of time in millisecond form jan 1970
//console.log(myCreatedDate.getTime()) //give value of time in ms from jan 1970 till provided date
// console.log(Math.floor(Date.now()/1000));  //give time in seconds


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{       // for customizing date style
    weekday:"long"
})