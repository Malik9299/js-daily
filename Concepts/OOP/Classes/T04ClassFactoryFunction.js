// Factory Function

const { type } = require("express/lib/response");

// Is another way to create an object in javascript
function pizzaFacory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => {
      console.log(`Baking a ${size} size ${crust} crust pizza`);
    },
  };
}

// Now you could not access the crust & size variable outside of pizzaFacory function as these are private variables
const myPizza = pizzaFacory("small");
myPizza.bake();

// What is factory function
// Is a function that create an object and returns it
// It can produce object instance without new key word or class
// But you can create an object without factory function then way we used factory function
// We have complex logic and create the objects again and again

function mobile(mobileModel) {
  const mobileType = ["iPhone", "smasung"];

  return {
    models: [5, 6, 7],
    price: () => {
      console.log("mobileType:==>", mobileType);
      const modelPrice = { 5: 40000, 6: 60000, 7: 80000 };
      return `Price of ${mobileType[0]} ${mobileModel} is: ${modelPrice[mobileModel]}`;
    },
  };
}

var samsung = mobile(5);
console.log(samsung.price());
