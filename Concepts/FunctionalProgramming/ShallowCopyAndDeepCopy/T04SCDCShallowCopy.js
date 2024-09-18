// shallow copy vs. Deep copy (clones)
// that is making clones of structural data types
// there are different types of clones

// Shallow Copy
// with the spread operator
const xArray = [1, 2, 3];
const yArray = xArray;
const zArray = [...yArray, 10];

console.log("zArray");
console.log(zArray); // [ 1, 2, 3, 10 ]
// note the zArray does not share the same reference as the
console.log("yArray");
console.log(yArray); // [ 1, 2, 3 ]

console.log(xArray === yArray); // true
console.log(yArray === zArray); // false

// so we have made a shallow copy using the spread operator

// we can also use the Object.assign

const tArray = Object.assign([], zArray);

console.log("tArray");
console.log(tArray);
console.log(tArray === zArray); // false
// the result is false because they do not use the same references in memory so we made a clone that is independent
// if we push an element to tArray, it will not change the zArray

tArray.push(11);
console.log("tArray");
console.log(tArray);

console.log("zArray");
console.log(zArray);

// But if there are nested arrays or objects

yArray.push([99, 88, 77]);
const vArray = [...yArray];
console.log("vArray");
console.log(vArray); // [ 1, 2, 3, [ 99, 88, 77 ] ]
vArray[3].push(5);
console.log("vArray after push new value");
console.log(vArray); //[ 1, 2, 3, [ 99, 88, 77, 5 ] ]

console.log("yArray");
console.log(yArray); // [ 1, 2, 3, [ 99, 88, 77, 5 ] ]

// Here is the problem
// shallow copy do not share the same reference
// but the problem is
// is the shallow copy nested structural data types still share a reference
// whether you use spread operator or Object.assign
// when we make shallow copy, they do not share the references untill there is a nested structural data type

// What it comes to objects, what about...
//  ...Object.freez() ??

// we can freez to prevent to mutating

const scoreObject = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 }, // so we have a nested objec
};
console.log("scoreObject");
console.log(scoreObject); // { first: 44, second: 12, third: { a: 1, b: 2 } }

Object.freeze(scoreObject);

scoreObject.third.a = 8;
scoreObject.first = 88;

console.log("scoreObject");
console.log(scoreObject); //  first: 44, second: 12, third: { a: 8, b: 2 } }
// The value is changed even thow we froozed the object we still able to mutate the value
// It is a shallow freeze
// means the nested object are not freez, other keys are  freezed
// so we still facing the same problem

// So how we avoid these mutations

// instead of shallow copy deep copy is needed to avoid this

console.log(
  "-------------------------------------------------------------------------------------------"
);

console.log({} == {});

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    console.log("Here 1");
    return true; // Same reference or both are null/undefined
  }

  console.log("typeof obj1 ===> ", typeof obj1);
  console.log("obj1 ===> ", obj1);

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    console.log("Here 2");
    return false; // Different types or one is null
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; // Different number of keys

  console.log("keys2 ===> ", keys2);

  for (let key of keys1) {
    console.log("key ===> ", key);
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      console.log("Here Others");
      return false; // Key not in obj2 or values are not equal
    }
  }

  console.log("Here 3");

  return true; // Objects are deeply equal
};

console.log(deepEqual({}, {})); // Logs: true
