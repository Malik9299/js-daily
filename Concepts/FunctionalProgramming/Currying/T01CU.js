// currying takes a function that recieves more than one parameter and breakes it into series of unry (one parameter) function therefore, a curried function only takes one parameter at a time

// Currying in JavaScript is a technique used to transform a function that takes multiple arguments into a sequence of functions, each taking a single argument. This can make functions more modular and reusable.

function add(x, y, z) {
  return x + y + z;
}

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Using the curried function
const add5 = add(5);
const add5and3 = add5(3);
const final = add5and3(10); // result is 18

const allowencesTypes = ["houseRent", "fuleAdjustment"];

function basicPay(basic) {
  return function (...allowences) {
    allowences.forEach((items) => console.log(items[0] ? "aaa" : "nnn"));
  };
}

const salary = basicPay(300000)([]);
// console.log();
// salary();

const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");

// console.log("mySandwich");
// console.log(mySandwich);

// It works but thats getting ugly and nested the further we go

// let's refactor

const buildSammy = (ingred1) => (ingred2) => (ingred3) =>
  `${ingredient1}, ${ingredient2}, ${ingredient3}`;

const mySammy = buildSandwich("Turkey")("Cheese")("Bread");

// console.log("mySammy");
// console.log(mySammy);

const curried = (x) => {
  return (y) => {
    return (z) => {
      return (x + y) * z;
    };
  };
};

const result = curried(2)(2)(3);

// console.log("result:==>", result);
