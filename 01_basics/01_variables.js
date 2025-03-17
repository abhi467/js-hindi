const accountId = 144553
let accountEmail = "abhishek@google.com"
var accountPassword = "1223"
accountCity = "Noida"
let accountState; // if we do not declare value in let , then its output will be undefined.

// accountId = 2 // not allowed , because value can not be re declared in const, value can  not be changed in const after it is declared once.

accountEmail = "a@bc.com"
accountPassword = "2345"
accountCity = "Birauli"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
prefer not to use var
because of issue in block scope and functional scope

*/