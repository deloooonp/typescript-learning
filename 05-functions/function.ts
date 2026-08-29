// If you dont assign the type of the function input it will be any automatically
function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addTwo(5);
getUpper("Delon");

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// No warning if its not assigned a type in the function input
// signUpUser(1, 2, 3);
signUpUser("Delon", "delon1@mail.com", false);

// If the function has 3 inputs you will need to provide with 3 arguments, if not errors will show. Unless it has a default value
// loginUser("Delon", "de12@.com");
loginUser("Delon", "de12@.com");

export {};
