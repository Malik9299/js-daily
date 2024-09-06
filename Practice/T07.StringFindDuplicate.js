const findDuplicateInStr = (str) => {
  const countChar = {};
  const duplicate = {};
  for (let j = 0; j < str.length; j++) {
    let ch = str[j];
    if (countChar[ch]) {
      countChar[ch]++;
    } else {
      countChar[ch] = 1;
    }
  }
  for (const char in countChar) {
    if (countChar[char] > 1) {
      duplicate[char] = countChar[char];
    }
  }
  return duplicate;
};

console.log("Duplicate ===> ", findDuplicateInStr("abcdabrrdd"));
