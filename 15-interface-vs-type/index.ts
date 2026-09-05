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

// You cant add another field with types
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const delon: Admin = {
  dbId: 22,
  email: "d@gmail.com",
  userId: 111,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
    // return 2;
  },
  // The parameter name doesnt have to be the same as the one in the interface
  getCoupon: (name: "delon", off: 10) => {
    return 10;
  },
};

export {};
