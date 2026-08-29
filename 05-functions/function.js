// If you dont assign the type of the function input it will be any automatically
function addTwo(num) {
  return num + 2;
}
function getUpper(val) {
  return val.toUpperCase();
}
addTwo(5);
getUpper("Delon");
function signUpUser(name, email, isPaid) {}
let loginUser = (name, email, isPaid = false) => {};
// No warning if its not assigned a type in the function input
// signUpUser(1, 2, 3);
signUpUser("Delon", "delon1@mail.com", false);
// If the function has 3 inputs you will need to provide with 3 arguments, if not errors will show. Unless it has a default value
// loginUser("Delon", "de12@.com");
loginUser("Delon", "de12@.com");
export {};
