class Pizza {
  constructor(size, crust, sauce) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = [];
  }
  prepare() {
    console.log("Preparing");
  }
  bake() {
    console.log("Baking");
  }
  ready() {
    console.log("Ready");
  }
}
// Here is senerio 1, that repeate the methods
// Problem repeating methods  -Not D.R.Y (Don't Repeat Yourself)
class Salad {
  constructor(size, dressing) {
    this.size = size;
    this.dressing = dressing;
  }
  prepare() {
    console.log("Preparing");
  }
  toss() {
    console.log("Tossing");
  }
  ready() {
    console.log("Ready");
  }
}

// Let try to resolve this with inheritance

class stuffedCrustPizza extends Pizza {
  stuff() {
    console.log("stuffing the crust...");
  }
}

class butteredCrustPizza extends Pizza {
  butter() {
    console.log("Buttering the crust...");
  }
}

class stuffedButteredCrustPizza extends Pizza {
  stuff() {
    console.log("stuffing the crust...");
  }
  butter() {
    console.log("Buttering the crust...");
  }
}

// Here the problem again that repeat the methods

const myPizza = new stuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();
