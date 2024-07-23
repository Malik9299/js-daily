class NodeA {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedListA {
  constructor() {
    this.head = null;
  }
  insertAtStart(value) {
    const newNode = new NodeA(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtLast(value) {
    const newNode = new NodeA(value);
    if (this.head == null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let head = this.head;
      while (head != null) {
        if (head.next == null) {
          head.next = newNode;
          return;
        }
        head = head.next;
      }
    }
  }
  insertAfterNode(value, nodeValue) {
    const newNode = new NodeA(value);
    let head = this.head;
    while (head != null) {
      if (head.value === nodeValue) {
        newNode.next = head.next;
        head.next = newNode;
      }
      //   console.log(head.value);

      head = head.next;
    }
  }
  findLength() {
    let length = 0;
    let head = this.head;
    while (head != null) {
      length++;
      head = head.next;
    }
    return length;
  }
  findMid() {
    let head = this.head;
    const midIndex = Math.floor(this.findLength() / 2);

    for (let i = 0; i < midIndex; i++) {
      head = head.next;
    }
    console.log(`Mid: ${head.value}`);
    // return head;
  }
  printList() {
    let head = this.head;
    while (head !== null) {
      console.log(head.value);
      head = head.next;
    }
  }
}

const list = new linkedListA();

list.insertAtStart("A");
list.insertAtLast("B");
list.insertAtLast("D");
list.insertAfterNode("C", "B");
list.printList();
list.findMid();
