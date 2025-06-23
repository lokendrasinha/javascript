//arrays

/* while copying array it makes shallow 
copies means it make its copy with same 
reference point means change copy lead to 
change in original array*/

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman", "naagraj"]
const Array2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   //it is time consuming operation
// myArr.shift()  //removes 9 added by unshift front start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   //converts myArr element to string 0,1,2,3,4,5 

// console.log(myArr);
// console.log(newArr);

// slice , splice
/*In slice it makes subarray from start to end-1 but dont change any reference array 
on which slice is performed*/
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr);

/* In splice it gives a subarray from start to end 
 including end also and also remove that subarray 
 from original array on which
 splice is performed */
const myn2 = myArr.splice(1,3);
console.log(myn2)
console.log("B ",myArr);    


