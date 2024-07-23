class Vehicle {
  constructor() {
    this.wheels = 4;
    this.motorized = true;
  }
  ready() {
    return "Ready to :==> Go!";
  }
}

class Motorcyle extends Vehicle {
  constructor() {
    super();
    this.wheels = 2;
  }
  wheeling() {
    return "On 1 wheel :==> Now!";
  }
}

const MyBike = new Motorcyle();

console.log(MyBike);
console.log(MyBike.wheels);
console.log(MyBike.ready());
console.log(MyBike.wheeling());
