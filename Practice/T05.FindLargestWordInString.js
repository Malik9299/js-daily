const findLargestInString = (str) => {
  const arr = str.split(" ");
  let largest = arr[0];

  for (let j = 0; j < arr.length; j++) {
    if (largest.length < arr[j].length) {
      largest = arr[j];
    }
  }
  return largest;
};

console.log(
  "Largest ===> ",
  findLargestInString("My Name Is Malikag and I am a Software Engineer")
);
