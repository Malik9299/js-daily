const chackAnagram = (str1, str2) => {
  if (str1.length != str2.length || str1.length == 0 || str2.length == 0) {
    return false;
  }
  const sorter = (input) => {
    let arr = typeof input == "string" ? input.split("") : arr;
    let swapped;
    do {
      swapped = false;
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr.join("");
  };
  if (sorter(str1) == sorter(str2)) return true;
  else return false;
};

console.log(chackAnagram("SILENT", "LISTEN"));
console.log(chackAnagram("HEART", "EARTH"));
