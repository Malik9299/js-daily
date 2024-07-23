//==========
// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [2, 4, 6, 8, 10];

const even = (element) => {
  return element % 2 == 0;
};

const odd = (element) => {
  return element % 2 == 1;
};

console.log(array.some(even));
console.log(array.some(odd));
