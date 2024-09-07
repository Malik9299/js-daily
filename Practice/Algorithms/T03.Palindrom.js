// Methid 1 with converting into array
const isPalindromMethod1 = (str) => {
  const arr = str.split(",");
  console.log(arr.toString());
  const reverseArray = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    reverseArray.push(arr[j]);
  }
  console.log(reverseArray.toString());

  if (arr.toString() == reverseArray.toString()) return true;
  else return false;
};

// console.log(isPalindromMethod1("a,b,c,b,a"));

// Methid 2 with string
const isPalindromMethod2 = (str) => {
  //   console.log(str);
  let reverseStr = "";
  for (let j = str.length - 1; j >= 0; j--) {
    reverseStr += str[j];
  }
  //   console.log(reverseStr);
  if (str == reverseStr) return true;
  else return false;
};

// console.log(isPalindromMethod2("abcdcba"));
// console.log(isPalindromMethod2("abcde"));

// Methid 3 with counting the mid
const isPalindromMethod3 = (str) => {
  const mid = Math.floor(str.length / 2);
  let last = str.length - 1;

  for (let j = 0; j < mid; j++) {
    console.log(str[j], "=>", str[last]);
    if (str[j] != str[last]) {
      return false;
    }
    last--;
  }
  return true;
};

console.log(isPalindromMethod3("abcdcba"));
// console.log(isPalindromMethod3("abcde"));
