class Pizza {
  crust = "original"; // Public field
  #sauce = "tradnitional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getCrust() {
    return this.crust;
  }
  getSauce() {
    return this.#sauce;
  }
  hereYouGo() {
    console.log(
      `Here your's ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
    );
  }
}

const myPizza = new Pizza("small");
myPizza.hereYouGo();

console.log(myPizza.getCrust()); // original
console.log(myPizza.crust); // original => crust is a public variable and can be access outside of class
console.log(myPizza.sauce); // undefined => sauce is a private variable and cannot be access from out side th calss

// Let try with #
console.log(myPizza.#sauce);
// SyntaxError: Private field '#sauce' must be declared in an enclosing class

console.log(myPizza.getSauce()); // tradnitional => but can be access with a mathod here the method name is getSauce()

// So privare and public fields can be in js class and must be declare outside of constructor

// Read More
// https://www.youtube.com/watch?v=5fmifZZeJJ4
// https://caniuse.com/
// https://caniuse.com/?search=public%20fields%20class
