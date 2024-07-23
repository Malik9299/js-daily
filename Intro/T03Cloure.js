let x = 1;

const parentFunction = () => {
  // local scope
  let myValue = 2;
  console.log("x => ", x);
  console.log("myValue => ", myValue);

  const childFunction = () => {
    console.log("x += 5:==>", (x += 5));
    console.log("myValue += 1:==>", (myValue += 1));
  };

  return childFunction;
};

// const t = parentFunction();
// t();

// Output
// x =>  1
// myValue =>  2
// x += 5:==> 6
// myValue += 1:==> 3

// same as

// parentFunction()();

// Same as

const parentFunction1 = (() => {
  let myValue = 2;
  console.log("x => ", x);
  console.log("myValue => ", myValue);

  const childFunction1 = () => {
    console.log("x += 5:==>", (x += 5));
    console.log("myValue += 1:==>", (myValue += 1));
  };

  return childFunction1;
})();
// parentFunction1();
// parentFunction1();
// parentFunction1();

// Same as

const parentFunction2 = (() => {
  let myValue = 2;
  console.log("x => ", x);
  console.log("myValue => ", myValue);

  return () => {
    console.log("x += 5:==>", (x += 5));
    console.log("myValue += 1:==>", (myValue += 1));
  };
})();
parentFunction2();
parentFunction2();
parentFunction2();
