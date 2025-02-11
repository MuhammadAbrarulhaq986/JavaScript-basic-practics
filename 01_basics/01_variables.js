var accountPassword = "12345"; //* WHEN DECLARAING IN var REMEMBER THIS THAT IT'S A GLOBLE SCOPE CAN BE ACCESSABLE FROM EVERY WHERE

let accountEmail = "abrar@gmail.com"; //* IN let YOU CAN REASSIGNE IT. THIS IS ONLY ACCESSABLE WITH IN THE BLOCK SCOPE

const accountId = 112233; //* IN const YOU CAN'T REDECLARA OR REASSGINE IT AGAIN. THIS IS ONLY ACCESSABLE WITH IN THE BLOCK SCOPE

let accountState; //* YOU DECLAERED IT BUT DID'N ASSGIN IT,  IT WILL GIVE UNDEFINED


accountCity = "Johur";

//accountId = 2; //* THIS WILL THROW AN ERROR BECAUSE WE CAN'T REASSIGNE IT AGAIN

accountEmail = "ab@gmail.com";

accountPassword = "1212121212";

accountCity = "Karachi";

console.log(accountId);

/*
* PERFER NOT TO USE VAR 
* BECAUSE IS ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
