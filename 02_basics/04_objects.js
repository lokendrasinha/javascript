// Singleton object

const tinderUser = new Object()
// const tinderUser = {}    non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"rajat@gmail.com",
    fullname:{
        userfullname :{
            firstname:"rajat",
            lastname:"sinha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const object3 = {obj1,obj2}   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }
   
// const obj3 = Object.assign({},obj1,obj2)   //merging object
// meged object assigned to {} , means first argument is target

const obj3 = {...obj1, ...obj2}   //using spread
// console.log(obj3)

const users = [
    {
        id:1,
        email:"h@gmail.com"

    },
    {
        id:1,
        email:"h@gmail.com"

    },
    {
        id:1,
        email:"h@gmail.com"

    },
    {
        id:1,
        email:"h@gmail.com"

    }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   //return array of keys
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  //convert object to arrays like [[key1,val1],[key2,value2]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// destructuring of object

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor
// destructuring of object
const {courseInstructor : instructor} = course
console.log(instructor);

// json 
// {
//     "name":"rajat",
//     "coursename":"js in hindi",
//     "price":"free"
// }

