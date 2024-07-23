// ================= how to get keys of Object ==========================
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

const luxuryCar = {};

Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
// getting key of object
console.log(Object.keys(luxuryCar)); // [ 'seats' ]

// loop throught each object key
Object.keys(luxuryCar).forEach((key) => {
  console.log("key:==>", key); // key:==> seats
});

// Bu a for..in loop includes inherited props
for (key in luxuryCar) {
  console.log(key);
  //   seats
  //   doors
  //   seatMaterial
}

// const arr = [7, 8, 6, 4, 9, 99];
// for (ss in arr) {
//   console.log("arr ss:==>", ss);
// }
