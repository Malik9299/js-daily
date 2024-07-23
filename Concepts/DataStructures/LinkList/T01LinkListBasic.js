// Tutorial: https://www.youtube.com/watch?v=Hj_rA0dhr2I

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
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// Node { value: 'A', next: null }
// Node { value: 'B', next: null }
// Node { value: 'C', next: null }
// Node { value: 'D', next: null }
a.next = b;
// console.log(a);
// Node { value: 'A', next: Node { value: 'B', next: null } }
b.next = c;
c.next = d;

// A -> B -> C -> D -> null
// current
const printLinkList = (head) => {
  let current = head;
  while (current !== null) {
    // if we check the current.next in while like this
    //  while (current.next !== null)
    // the output will be // A B C
    // because when pointer reach to D and D.next is null so it condition will false and loop break and will not print D
    console.log(current.value);
    current = current.next;
  }
};

// printLinkList(a);
// A
// B
// C
// D

const printLinkListRec = (head) => {
  if (head == null) {
    return;
  }
  console.log(head.value);
  printLinkListRec(head.next);
};
printLinkListRec(a);
