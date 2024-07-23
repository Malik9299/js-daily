class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
a.next = b;
b.next = c;
c.next = d;

const fetchLinkListRec = (head, arr = []) => {
  if (head === null) {
    return arr;
  }
  arr.push(head.value);
  return fetchLinkListRec(head.next, arr);
};

// console.log(fetchLinkListRec(a));

const fetchLinkList = (head) => {
  const arr = [];
  while (head !== null) {
    arr.push(head.value);
    head = head.next;
  }
  return arr;
};

console.log(fetchLinkList(a));
