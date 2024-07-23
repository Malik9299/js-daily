const ArraySearch = (arr, num) => {
  for (let j = 0; j < arr.length; j++) {
    // console.log("var:==>", arr[j]);
    if (num == arr[j]) {
      return arr.indexOf(arr[j]);
    }
  }
  return false;
};

console.log(ArraySearch([1, 2, 3, 4, 5, 6], 6));
