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
d.next = null;

const getValueOfIndex = (head, index) => {
  let count = 1;
  while (head !== null) {
    if (count == index + 1) {
      return head.value;
    }
    count++;
    head = head.next;
  }
  return null;
};

console.log(getValueOfIndex(a, 2));
