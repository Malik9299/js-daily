class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.topping = [];
  }
  //   getter
  get pizzaCrust() {
    return this.crust;
  }
  //   setter
  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  //   you can also get and set this way
  getSize() {
    return this.size;
  }
  setSize(size) {
    this.size = size;
  }
  get pizzaTopping() {
    return this.topping;
  }
  set pizzaTopping(pizzaTopping) {
    this.topping.push(pizzaTopping);
  }

  bake() {
    return `Baking a ${this.size}, ${this.type} ${this.crust} crust pizza ${
      this.topping.length > 0
        ? `with extra toppings of ${this.topping.join(" and ")}`
        : `without extra topping`
    }`;
  }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.pizzaCrust = "thin";
myPizza.setSize("large");
myPizza.pizzaTopping = "sausage";
myPizza.pizzaTopping = "olives";
console.log(myPizza.bake());

const myPizzaT = new Pizza("pepperoni", "small");
myPizzaT.pizzaCrust = "thick";
myPizzaT.setSize("small");
console.log(myPizzaT.bake());
