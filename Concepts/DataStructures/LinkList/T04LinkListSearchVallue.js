class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node(2);
const b = new Node(3);
const c = new Node(4);
const d = new Node(5);
a.next = b;
b.next = c;
c.next = d;

const searchList = (num, head = a) => {
  while (head !== null) {
    if (head.value === num) {
      return `Number is ${head.value}`;
    }
    head = head.next;
  }
  return "Number not found";
};

// console.log(searchList(15));

const searchListRFec = (num, head = a) => {
  if (head === null) {
    return "Number not found";
  }
  if (num === head.value) {
    return `Number is ${head.value}`;
  }
  return searchListRFec(num, head.next);
};

console.log(searchListRFec(5));
