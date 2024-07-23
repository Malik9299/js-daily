const prepare = () => {
  return {
    prepare: () => console.log("Preparing..."),
  };
};

const bake = () => {
  return {
    bake: () => console.log("Baking..."),
  };
};

const toss = () => {
  return {
    toss: () => console.log("Tossing..."),
  };
};

const ready = () => {
  return {
    ready: () => console.log("Ready..."),
  };
};

const stuff = () => {
  return {
    stuff: () => console.log("Stuffing the crust..."),
  };
};

const butter = () => {
  return {
    butter: () => console.log("Buttering the crust..."),
  };
};

const createPizza = (size, crust, sause) => {
  const pizza = {
    size: size,
    crust: crust,
    sause: sause,
    toppings: [],
  };
  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready(),
  };
};

const createSalad = (size, dressing) => {
  return {
    size: size,
    dressing: dressing,
    ...prepare(),
    ...toss(),
    ...ready(),
  };
};

// Compare to ES6 class syntax with extends and super
const createStuffedButteredCrustPizza = (pizza) => {
  return {
    ...pizza,
    ...stuff(),
    ...butter(),
  };
};

const addTopping = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
};

const anotherPizza = createPizza("medium", "thin", "original");
const somebodyPizza = createStuffedButteredCrustPizza(anotherPizza);

const abdulsPizza = createStuffedButteredCrustPizza(
  createPizza("medium", "thin", "original")
);

const abdulsSalad = createSalad("side", "ranch");

// abdulsPizza.bake();
// abdulsPizza.stuff();

// abdulsSalad.prepare();

// console.log(abdulsPizza);
// console.log(abdulsSalad);

// const maliksPizza = createPizza("large", "thick", "barbecue");
// console.log(maliksPizza);
// console.log(addTopping(maliksPizza, "pepperoni"));
// // If we again log the maliksPizza
// // There is an array of toppings containing one element of pepperoni
// // That is called mutation
// // the push method mutate the original array
// console.log(maliksPizza);

// We need to clone the pizza object to avoid mutation
// Function composition:
const shallowPizzaClone = (fn) => {
  return (object, array) => {
    const newObject = { ...object };
    return fn(newObject, array);
  };
};
// Refactor above function with function currying
// const shallowPizzaClone = (fn) => (obj, array) => fn({ ...obj }, array);

// Function decurators
let addToppings = (pizza, toppings) => {
  pizza.toppings = [...pizza.toppings, ...toppings];
  return pizza;
};

// Decurate the addToppings function with shallowPizzaClone

addToppings = shallowPizzaClone(addToppings);

const agsPizza = createPizza("small", "thick", "barbecue");

const agsPizzaTopping = addToppings(agsPizza, [
  "olives",
  "cheese",
  "papperoni",
]);

console.log(agsPizzaTopping);
console.log(agsPizza);
// console.log(agsPizzaTopping === agsPizza);
