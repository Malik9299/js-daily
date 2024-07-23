// Calling a function in another function is called callback

// function one() {
//   console.log("Step 1");
// }

// function two() {
//   console.log("Step 2");
// }

// one();
// two();

// Note the output will
// "Step 1"
// "Step 2"

// If I call two first and one after then the out put will be as

// two();
// one();

// "Step 2"
// "Step 1"

//  These are regular functions, now create a relationship between these using a callback

function one(callOne) {
  console.log("Step 1 complete, please call step 2");
  callOne();
}

function two() {
  console.log("Step 2");
}

one(two);
