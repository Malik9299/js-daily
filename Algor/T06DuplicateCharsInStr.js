function sortArrayOfChars(arr) {
  //   console.log("Org:==>", arr);
  let smallest;
  for (let j = 0; j < arr.length; j++) {
    smallest = arr[j];
    for (let k = j + 1; k < arr.length; k++) {
      if (smallest > arr[k]) {
        smallest = arr[k];
      }
    }
    let index = arr.indexOf(smallest);
    arr[index] = arr[j];
    arr[j] = smallest;
  }
  //   console.log("Sort:==>", arr);
  return arr;
}
// sortArrayOfChars([7, 1, 8, 2, 9, 3, 5, 4]);
// sortArrayOfChars(["e", "a", "c", "b", "d", "n", "o", "f"]);

function removeDuplicateCharsInStr(str) {
  const strArr = str.split("");
  console.log("Original String:==>", str);
  //   console.log("strArr:==>", strArr);
  const newArr = [];
  for (let k = 0; k < strArr.length; k++) {
    let findChar = strArr[k];
    let duplicate = false;
    for (let n = k + 1; n <= strArr.length; n++) {
      if (findChar == strArr[n]) {
        duplicate = true;
        //   array.splice(2, 1); // Removes the element at index 2
        //   delete array[2]; // Remove element at index 2
        // strArr.splice(n, 1);
      }
    }
    if (!duplicate) {
      newArr.push(findChar); // I used newArr instead of delete from existing array, because we are itrating the loop with array length so if we remove an element then iteration will disturb
    }
  }

  //   console.log("newArr:==>", newArr);

  return sortArrayOfChars(newArr).join("");
}

// console.log(
//   `Required String:==> ${removeDuplicateCharsInStr(
//     "abfffffffdddsssaaaaaaabbbbb"
//   )}`
// );

const removeDuplicate = (str) => {
  let newStr = "";
  for (j = 0; j < str.length; j++) {
    console.log("var:==>", newStr.indexOf(str[j]));
    if (newStr.indexOf(str[j]) === -1) {
      newStr += str[j];
    }
  }
  return newStr;
};
const str = "abfffffffdddsssaaaaaaabbbbb";
// console.log(removeDuplicate(str));

const countDupli = () => {
  const str = "abcdeaaabbbsssgggee";
  let countStr = {};
  let dup = {};
  for (let index in str) {
    if (countStr[str[index]]) {
      countStr[str[index]]++;
    } else {
      countStr[str[index]] = 1;
    }
  }
  for (index in countStr) {
    if (countStr[index] > 1) {
      dup[index] = countStr[index];
    }
  }
  return dup;
};
console.log(countDupli());
