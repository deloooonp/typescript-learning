const User = {
  name: "Delon",
  email: "delon@mail.com",
  isActive: true,
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

// This will result in an error because field "email" doesnt exist in the function
// createUser({ name: "delon", isPaid: false, email: "d@gmail.com" });

// However if u pass a variable as an object the error will not show up
let newUser = { name: "delon", isPaid: false, email: "d@gmail.com" };

createUser(newUser);

// Function returns an object
function createCourse(): { name: string; price: number } {
  return { name: "react", price: 200 };
}

export {};
