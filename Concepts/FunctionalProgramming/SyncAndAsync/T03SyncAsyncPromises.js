// Time in seconds
// Place order in 2
// cut fruit in 2
// add water and ice in 1
// start the machine in 1
// select the container in 2
// select topping in 3
// serve the ice cream in 2
let stock = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holders: ["cone", "cup", "stick"],
  Toping: ["chocolate", "Peanuts"],
};
let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(
    `${
      stock.Fruits[Math.floor(Math.random() * stock.Fruits.length)]
    } was selected`
  );
})
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit has bee chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} added`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("Machine started"));
  })
  .then(() => {
    return order(2000, () => console.log("Container selected"));
  })
  .then(() => {
    return order(3000, () =>
      console.log(
        `selected toping is ${
          stock.Toping[Math.floor(Math.random() * stock.Toping.length)]
        }`
      )
    );
  })
  .then(() => {
    return order(3000, () => console.log("Here is your ice creame"));
  })
  .catch(() => {
    console.log("Some Error");
  })
  .finally(() => {
    console.log("Day Ended, shop is closed");
  });
