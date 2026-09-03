interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // 2 Ways to define a function
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const delon: User = {
  dbId: 22,
  email: "d@gmail.com",
  userId: 111,
  startTrail: () => {
    return "trail started";
    // return 2;
  },
  // The parameter name doesnt have to be the same as the one in the interface
  getCoupon: (name: "delon", off: 10) => {
    return 10;
  },
};

delon.email = "delon@gmail.com";
// delon.dbId = 12;
