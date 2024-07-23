class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtStart(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtEnd(value) {
    if (this.head === null) {
      this.insertAtStart(value);
    } else {
      const newNode = new Node(value);
      let head = this.head;
      while (head !== null) {
        if (head.next == null) {
          head.next = newNode;
          return;
        }
        head = head.next;
      }
    }
  }
  deleteFromStart(value) {
    // const newNode = new Node(value);
    // newNode.next = this.head;
    // this.head = newNode;
  }
  printLinkList() {
    if (this.head == null) {
      console.log("List is empty");
      return false;
    }
    let head = this.head;
    while (head !== null) {
      console.log(head);
      head = head.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertAtStart("A");
linkedList.insertAtEnd("B");
linkedList.printLinkList();
