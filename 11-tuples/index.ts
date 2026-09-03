// With union types you can put the value and type in any position
// const user: (string | number)[] = ["delon", 1];

// With tuple it has to be following the order of array type ( in order basically )

let user: [string, number, boolean];

user = ["Delon", 123, true];

let rgb: [number, number, number];

rgb = [255, 122, 112];
// rgb = [255, 122, 112, 0.5];

// You can also put it in a type
type User = [number, string];

const newUser: User = [112, "delon@gmail.com"];

// You can also override it using array methods
newUser[1] = "d@gmail.com";
// newUser.push(true);

console.log(newUser);

export {};
