function reverseStr(str) {
  console.log(`STR: :==> ${str}`);
  const strArray = str.split("");
  const reverseArray = [];
  for (let j = strArray.length; j >= 0; j--) {
    reverseArray.push(strArray[j]);
  }
  return reverseArray.join("");
}
// console.log(`Reverse: => ${reverseStr("QuickCat")}`);

// Reverse without converting to array

(() => {
  const str = "ABC";
  let reverse = "";
  for (let j = str.length - 1; j >= 0; j--) {
    reverse += str[j];
  }
  return reverse;
})();
