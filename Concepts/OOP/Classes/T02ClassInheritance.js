class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
    this.pieces = { small: 4, medium: 8, large: 12, extraLarge: 16 };
  }
  get pizzaCrust() {
    return this.crust;
  }
  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}
class Specialtypizza extends Pizza {
  constructor(size) {
    super(size);
    this.type = "pizza type";
  }
  slice() {
    console.log(
      `Our ${this.type} ${this.size} pizza as ${this.pieces[this.size]} slices`
    );
  }
}

const myPizza = new Specialtypizza("extraLarge");
myPizza.slice();
