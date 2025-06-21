const accountId = 144553;
let accountEmail = "lokendrasinha2003@gmail.com";
var accountPassword = "123";
let accountCity = "Jaipur";
let accountState;

accountEmail = "rajat@gmail.com";
accountPassword = "456";

console.log(accountId);

/*
preferred not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

