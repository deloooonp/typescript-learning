// Its better to put the types in a seperate file and import them to the function
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// Type aliases can be used on function input and output
function createUser(user: User): User {
  return user;
}

createUser({ name: "delon", email: "delon@gmail.com", isActive: true });
