const AnagramDetection = (str1, str2) => {
  const checkLength = (str1, str2) => {
    if (str1.length != str2.length) {
      console.log("Not Anagram due to length");
      return false;
    }
    return true;
  };
  const frequencyChecker = (str) => {
    const checkChar = {};
    for (let j = 0; j < str.length; j++) {
      let counter = 0;
      for (let k = 0; k < str.length; k++) {
        if (str[j] === str[k]) {
          counter++;
        }
      }
      checkChar[str[j]] = counter;
    }
    return checkChar;
  };

  if (!checkLength(str1, str2)) {
    return false;
  }

  const freqStr1 = frequencyChecker(str1);
  const freqStr2 = frequencyChecker(str2);
  console.log("freqStr1:==>", freqStr1);
  console.log("freqStr2:==>", freqStr2);

  for (let char in freqStr1) {
    console.log(`${char}:==>${freqStr1[char]}`);
    console.log(`${char}:==>${freqStr2[char]}`);
    if (freqStr1[char] != freqStr2[char]) {
      console.log("Not Anagram due Char match");
      return false;
    }
  }
  return true;
};
console.log(AnagramDetection("abcde", "bdcad"));
