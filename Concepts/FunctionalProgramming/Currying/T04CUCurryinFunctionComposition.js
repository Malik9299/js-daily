// Another common use of curring is function composition
// Allow calling small functions in aspecific order

// const addCustomor =
//   (fn) =>
//   (...args) => {
//     console.log("saving customer info...");
//     return fn(...args);
//   };

// const processOrder =
//   (fn) =>
//   (...args) => {
//     console.log(`Process order #${args[0]}`);
//     return fn(...args);
//   };

// let completeOrder = (...args) => {
//   console.log(`Order #${[...args].toString()} completed`);
//   return fn(...args);
// };

// completeOrder = processOrder(completeOrder);

// console.log("completeOrder");
// console.log(completeOrder);

// completeOrder = addCustomor(completeOrder);

// completeOrder("1000");

function addCustomor(...args) {
  console.log("saving customer info...");
  return function processOrder(...args) {
    console.log(`Process order #${args[0]}`);
    return function completeOrder(...args) {
      console.log(`Order #${[...args].toString()} completed`);
    };
  };
}

const customerInfo = addCustomor("1000");
customerInfo();
