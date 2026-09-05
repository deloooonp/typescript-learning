"use strict";
// Union types are used for when you are not sure what type of data is gonna come out
// This is for avoiding using the type "any"
let score = 33;
// This both works
score = 44;
score = "59";
let Delon = {
    // Both or one of them works
    name: "Delon",
    username: "Delon",
    id: 192928,
};
Delon = {
    username: "de",
    id: 19292,
};
// function getDbId(id: number | string) {
//   // Making api calls
//   console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // Typescript knows that this method desnt work on number even if its union types
    // id.toLowerCase();
    // Warning goes away because its in if block
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
const data1 = [1, 2, 3];
const data2 = ["1", "2", "3"];
// This doesnt work
// const data3: string[] | number[] = ["1", "2", 3];
// You need to wrap the types in parantheses
const data3 = ["1", "2", 3];
// You can assign a fixed value to a variable
// let pi: 3.14 = 3.14;
// pi = 3.145;
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";
