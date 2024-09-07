const reverse = (str) => {
  let strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    strReverse += str[i];
  }
  return strReverse;
};

console.log("Data ===> ", reverse("abcdef"));
