const delon = {
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
    getCoupon: (name, off) => {
        return 10;
    },
};
export {};
