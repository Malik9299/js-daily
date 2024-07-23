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

const sumListRec = (head, total = 0) => {
  if (head === null) {
    return total;
  }
  total = total + head.value;
  return sumListRec(head.next, total);
};

// console.log(sumListRec(a));

const sumListRecApproch2 = (head) => {
  if (head === null) {
    return 0;
  }
  return (head.value += sumListRecApproch2(head.next));
};

console.log(sumListRecApproch2(a));

const sumList = (head) => {
  let total = 0;
  while (head !== null) {
    total = total + head.value;
    head = head.next;
  }
  return total;
};

// console.log(sumList(a));
