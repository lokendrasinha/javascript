// Immediately invoked function expression (IIFE)

(function chai(){
    // named iife beacause here function has name
    console.log(`DB CONNECTED`);
})();
// use semicolon after iife
// because in iife we have to explicitly use ; for stopping it

//(function defination)()   // syntax for IIFE
// chai()      //it causes global pollution

// global scope ke pollution hoti hai function call se toh usko hatane ke liye iife ka use karte hai
// simple iife
( (name) => {
    console.log(`DB CONNECTED two ${name}`);
}) ("Rajat");