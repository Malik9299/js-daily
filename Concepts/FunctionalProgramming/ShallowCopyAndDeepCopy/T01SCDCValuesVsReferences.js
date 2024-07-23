// Values vs References

// Primitives pass values
let x = 2;
let y = x;
y += 1;
console.log("x:==>", x); // x:==> 2
console.log("y:==>", y); // y:==> 3

// Structural types use references

let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);

console.log("yArray:==>", yArray); // yArray:==> [ 1, 2, 3, 4 ]
console.log("xArray:==>", xArray); // xArray:==> [ 1, 2, 3, 4 ]

// The arrays usees references in memory as pointers
