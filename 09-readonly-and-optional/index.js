let myUser = {
    _id: "1222",
    name: "delon",
    email: "delon@gmail.com",
    isActive: false,
};
// This is allowed
// myUser.email = "d@m.com";
// This is not allowed because it has readonly type
// myUser._id = "9393";
function createUser(u) { }
export {};
