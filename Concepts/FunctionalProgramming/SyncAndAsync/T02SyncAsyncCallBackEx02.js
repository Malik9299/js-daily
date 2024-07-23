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
let order = (fruitName, callProduction) => {
  // console.log("Order Placed, please call Production");
  if (isShopOpen) {
    setTimeout(() => {
      console.log(
        `${
          fruitName
            ? stock.Fruits.fruitName
            : stock.Fruits[Math.floor(Math.random() * stock.Fruits.length)]
        } was selected`
      );
      callProduction();
    }, 2000);
  } else {
    console.log("Our shop is closed");
  }
};

let production = () => {
  setTimeout(() => {
    // console.log("Production has started");
    setTimeout(() => {
      console.log("The fruit has bee chopped");
      setTimeout(() => {
        console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} added`);
        setTimeout(() => {
          console.log("Machine started");
          setTimeout(() => {
            console.log("Container selected");
            setTimeout(() => {
              console.log(
                `selected toping is ${
                  stock.Toping[Math.floor(Math.random() * stock.Toping.length)]
                }`
              );
              setTimeout(() => {
                console.log("Here is your ice creame");
              }, 2000);
            }, 2000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
  // console.log("Order received, start Production");
};

order("", production);

// Here we have completed our task cuccessfully but it is a callback hell

// Th solution is promises
