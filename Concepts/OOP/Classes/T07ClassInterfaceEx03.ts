interface User {
  readonly dbId?: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string; // Method that always returns a string
  displayInfo?(): string; // Another way to define a method type that's return type is string
  geCoupon(couponName: string, couponNumber: number): number;
}

// Merging the User interface to include githubToken
interface User {
  githubToken: string;
}

// Inheritance of Interface
interface Role extends User {
  role: "Engineer" | "Senior Engineer" | "Manager";
}

// Inherit from more than one parent interface
interface UserInfo extends User, Role {
  address: string;
}

const UserOne: User = {
  email: "ag@gmail.com",
  userId: 145,
  githubToken: "AAA44898798nnn",
  startTrail: () => {
    return "Trail started";
  },
  geCoupon: (couponName: string, couponNumber: number) => {
    return couponNumber;
  },
  displayInfo: function () {
    return `User id ${this.userId} with email: ${this.email}`;
  },
};

const UserTwo: Role = {
  email: "ag@gmail.com",
  userId: 145,
  githubToken: "AAA44898798nnn",
  startTrail: () => {
    return "Trail started";
  },
  geCoupon: (name: "aaa", off: 10) => {
    return 10;
  },
  role: "Engineer",
};

const UserThree: UserInfo = {
  email: "UserThree@gmail.com",
  userId: 145,
  githubToken: "AAA44898798nnn",
  startTrail: () => {
    return "Trail started";
  },
  geCoupon: (name: "aaa", off: 10) => {
    return 10;
  },
  role: "Engineer",
  address: "Gulberg 3",
};

// console.log(UserOne);

// Read More
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interface

// module.exports = {
//   UserOne,
//   UserTwo,
//   UserThree,
// };
export default UserOne;
