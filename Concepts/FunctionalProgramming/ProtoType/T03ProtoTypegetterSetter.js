// getter and setter methods
const car = {
  doors: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  },
};

const spareParts = {
  tyres: "winter tyres",
  bumper: "Exposed bumper",
  fender: "mudguard",
};

const luxuryCar = {};

// ================= discuss inheritance ==========================

Object.setPrototypeOf(luxuryCar, car);
console.log(luxuryCar.doors); // 2

// ================= discuss multiple inheritance ==========================

Object.setPrototypeOf(luxuryCar, car);
// Object.setPrototypeOf(luxuryCar, spareParts);
console.log(luxuryCar.doors); // 2
console.log(luxuryCar.tyres); // undefined

Object.setPrototypeOf(luxuryCar, spareParts);

console.log(luxuryCar.doors); // undefined
console.log(luxuryCar.tyres); // winter tyres

// luxuryCar.seatMaterial = "leather";
// console.log(luxuryCar); // {seats: 'leather
