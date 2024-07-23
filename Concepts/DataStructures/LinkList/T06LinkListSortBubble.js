class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(1);
const c = new Node(3);
const d = new Node(2);
a.next = b;
b.next = c;
c.next = d;

const sortList = (head) => {
  if (!head || !head.next) return head;
  let swapped;
  do {
    swapped = false;
    let current = head;
    while (current.next !== null) {
      if (current.value > current.next.value) {
        let temp = current.value;
        current.value = current.next.value;
        current.next.value = temp;
        swapped = true;
      }
      current = current.next;
    }
  } while (swapped);
  // console.log(head);
  return head;
};
console.log(sortList(a));
