// In functional programing the state mutation, or object mutation or data mutation is not allowed that way these the the pure functions
// Therefor you need to clone or copy of objects or arrays and not mutate those objects
// So to solve this problem we need a clone function or a copy function
// and that could be in pipe or compose functions

// We will do that with 3 different approches

// 1) Clone the object before an impure function mutate it
const scoreObj = { home: 0, away: 0 };

const shallowClone = (obj) => (Array.isArray(obj) ? [...obj] : { ...obj });

const incrementHome = (obj) => {
  obj.home += 1;
  return obj;
  //   If we test this function, this is not a pure function because it does mutate the object
};
// console.log(incrementHome(scoreObj)); // { home: 1, away: 0 }
// console.log(shallowClone(scoreObj)); // { home: 1, away: 0 }
// Note that the original object is mutated

// Now put the series of functions into pipe

const pipe =
  (...funs) =>
  (val) => {
    return funs.reduce((prev, fun) => fun(prev), val);
  };

const homeScore = pipe(shallowClone, incrementHome);

// console.log(homeScore(scoreObj)); // { home: 1, away: 0 }
// console.log(scoreObj); // { home: 0, away: 0 }
// console.log(homeScore(scoreObj) === scoreObj); // false
// But this time the original object is not mutated

// Psotive of this technique is that there are fewer functions call
// Negative: create impure functions and testing dificulties
// So move to second approch

// Curry the function to create a partial that is unary for your pipe or compose functions

let incrementHomeB = (cloneFn) => (obj) => {
  const newObj = cloneFn(obj);
  newObj.home += 1;
  return newObj;
};

incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(incrementHomeB);

// console.log(homeScoreB(scoreObj)); // { home: 1, away: 0 }
// console.log(scoreObj); // { home: 0, away: 0 }
// console.log(homeScore(scoreObj) === scoreObj); // false

// Positive: Pure function with clear dependencies
// More calls to the cloning functios

// 3) insert the cloneFunction as a dependency

const incrementHomeC = (obj, cloneFn) => {
  const newObj = cloneFn(obj);
  newObj.home += 1;
  return newObj;
};

const homeScoreC = pipe((x) => incrementHomeB(x, shallowClone));

console.log(homeScoreC(scoreObj)); // { home: 1, away: 0 }
console.log(scoreObj); // { home: 0, away: 0 }
console.log(homeScore(scoreObj) === scoreObj); // false

// Positive: Pure function with clear dependencies
// Negative: non unary functions in your pipe / compose chain
