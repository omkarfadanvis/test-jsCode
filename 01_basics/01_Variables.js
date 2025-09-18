const accountId = 1253;
let accounEmail = "omkar@gmail.com";
var accountPassword = "12352";
accountCity = "Nagpur"; // can be used but not prefered 
let AccountState ;

// accountId = 2 not allowed 

accounEmail = "dilip@ndjn.com";
accountPassword = "3648726";
accountCity ="Bengaluru";

console.log(accountId);
/* prefer not to use var 
because of issue in block scope and functional scope */
console.table([accounEmail,accountId,accountPassword,accountCity]);