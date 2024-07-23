const ArraySearch = (arr, num, low, high) => {
  if (low > high) {
    return "Target not found";
  }

  let middle = Math.floor((low + high) / 2);

  if (arr[middle] == num) {
    console.log(`num: ${num} =>  middle: ${middle}`);
    return middle; // Return the middle index directly
  }
  if (arr[middle] > num) {
    return ArraySearch(arr, num, low, middle - 1);
  }
  return ArraySearch(arr, num, middle + 1, high);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let low = 0;
let high = arr.length - 1;

console.log(ArraySearch(arr, 1, low, high)); // Should output 0
console.log(ArraySearch(arr, 5, low, high)); // Should output 4
console.log(ArraySearch(arr, 8, low, high)); // Should output 7
console.log(ArraySearch(arr, 9, low, high)); // Should output "Target not found"
