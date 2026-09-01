type User = {
  // Now the data is read only (Cant be manipulated)
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  // By putting ? the data is optional to pass on
  credCardDetails?: number;
};

let myUser: User = {
  _id: "1222",
  name: "delon",
  email: "delon@gmail.com",
  isActive: false,
};

// This is allowed
// myUser.email = "d@m.com";
// This is not allowed because it has readonly type
// myUser._id = "9393";

function createUser(u: User) {}

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  cardDate: string;
};

// You can declare a type using existing types and combine them using &
type cardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

export {};
