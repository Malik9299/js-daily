function isPalindromWithSplit(str) {
  console.log(`STR: :==> ${str}`);
  const strArray = str.split("");
  const reverseArray = [];
  for (let j = strArray.length; j >= 0; j--) {
    reverseArray.push(strArray[j]);
  }
  if (reverseArray.join("") === str) {
    return "string is Palindrom";
  } else {
    return "Not a Palindrom string";
  }
}
// console.log(`Reverse: => ${isPalindromWithSplit("abcba")}`);

const isPalindromWithString = () => {
  const str = "abcdefghgfedcba";
  console.log(str);
  let reverseStr = "";
  for (let j = str.length - 1; j >= 0; j--) {
    reverseStr += str[j];
  }
  console.log(reverseStr);
  if (str == reverseStr) {
    console.log("string is palindrom");
  }
};
isPalindromWithString();

const isPalindromWithStringMatchEachChar = () => {
  const str = "abcdefghgfedcba";
  const loopEnd = str.length - 1;
  const mid = Math.floor(str.length / 2);
  console.log(`mid => ${mid}`);
  let rC = loopEnd;
  for (let j = 0; j < mid; j++) {
    console.log(str[j], "=>", str[rC]);

    if (str[j] != str[rC]) {
      console.log("Not a Palindrom");
      return false;
    }
    rC--;
  }
  console.log("Is Palindrom");
  return true;
};
// isPalindromWithStringMatchEachChar();
