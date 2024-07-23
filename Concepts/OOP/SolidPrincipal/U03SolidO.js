// O => open closed principal
// Our Module must be open for extension  but closed for modification
// means
// Here we have a class Coder
// Lot off properties inside its constructor
// We have an additional class CoderFilter
// We implemented different methods to filter our data
// We filtered by full name, by language and by hobby
// This is breaking the principal
// Because every single time when we add a new property we must add a new filter function
// Which means we must modify our existing code inside our codrFilter, every single time when we making change inside data of our Coder
// instead we can add a single filter method
class Coder {
  constructor(fullName, language, hobby, education, workplace, position) {
    this.fullName = fullName;
    this.language = language;
    this.hobby = hobby;
    this.education = education;
    this.workplace = workplace;
    this.position = position;
  }
}

class CoderFilter {
  //   filterByName(coders, fullName) {
  //     return coders.filter((coder) => coder.fullName == fullName);
  //   }
  //   filterByLanguage(coders, language) {
  //     return coders.filter((coder) => coder.language == language);
  //   }
  //   filterByHobby(coders, hobby) {
  //     return coders.filter((coder) => coder.hobby == hobby);
  //   }
  filterByProp(array, proprtyName, value) {
    return array.filter((element) => element[proprtyName] === value);
  }
}

const coder1 = new Coder(
  "Malik",
  "English",
  "Problem Solving",
  "BSC CSE",
  "Lahore",
  "SSE"
);
const coder2 = new Coder(
  "Ali",
  "JavaScript",
  "Reading",
  "BS IT",
  "Karachi",
  "ASE"
);
const coder3 = new Coder(
  "Sara",
  "Python",
  "Gaming",
  "BSC CSE",
  "Islamabad",
  "SE"
);

const coders = [coder1, coder2, coder3];

const filter = new CoderFilter();
// console.log(filter.filterByName(coders, "Sara"));
console.log(filter.filterByProp(coders, "fullName", "Sara"));
