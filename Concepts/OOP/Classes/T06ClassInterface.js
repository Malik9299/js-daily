"use strict";
const malik = {
    email: "ag@gmail.com",
    userId: 145,
    githubToken: "AAA44898798nnn",
    startTrail: () => {
        return "Trail started";
    },
    geCoupon: (couponName, couponNumber) => {
        return couponNumber;
    },
    displayInfo: function () {
        return `User id ${this.userId} with email: ${this.email}`;
    },
};
const Aga = {
    email: "ag@gmail.com",
    userId: 145,
    githubToken: "AAA44898798nnn",
    startTrail: () => {
        return "Trail started";
    },
    geCoupon: (name, off) => {
        return 10;
    },
    role: "Engineer",
};
const UserOne = {
    email: "ag@gmail.com",
    userId: 145,
    githubToken: "AAA44898798nnn",
    startTrail: () => {
        return "Trail started";
    },
    geCoupon: (name, off) => {
        return 10;
    },
    role: "Engineer",
    address: "Gulberg 3",
};
// console.log(UserOne);
// Read More
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interface
