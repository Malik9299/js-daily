const a = true;
const b = false;
const c = false;
const arr = [a, b, c];
const condition = (a, b) || c;
[condition].includes(false) ? console.log("No") : console.log("render");
console.log(condition);

// console.log((a && b) || c);
