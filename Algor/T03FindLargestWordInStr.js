function largestInStr(str) {
  console.log("STR: :==>", str);
  const strArray = str.split(" ");
  let largest = strArray[0];
  for (let j = 0; j < strArray.length; j++) {
    if (
      largest.length < strArray[j].length ||
      largest.length == strArray[j].length
    ) {
      largest = strArray[j];
    }
  }
  return largest;
}
console.log(largestInStr("a brown fox jumps over the lazy dog"));
