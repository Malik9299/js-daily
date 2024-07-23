var commonChars = function (words) {
  const wordsFinder = [];
  const arrWordsFinder = words[0].split("");
  console.log("arrWordsFinder:==>", arrWordsFinder);
  for (let j = 0; j < arrWordsFinder.length; j++) {
    if (
      words[1].includes(arrWordsFinder[j]) &&
      words[2].includes(arrWordsFinder[j])
    ) {
      wordsFinder.push(arrWordsFinder[j]);
      console.log(
        `${arrWordsFinder[j]} found in :==>, ${words[1]} and ${words[2]}`
      );
    }
  }
  return wordsFinder;
};

const words = ["bella", "label", "roller"];
// const words = ["cool", "lock", "cook"];
console.log(commonChars(words));
