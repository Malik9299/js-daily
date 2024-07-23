class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a new node at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert a new node after a given node
  insertAfterNode(prevNode, data) {
    if (!prevNode) {
      console.log("The given previous node must be in the list.");
      return;
    }
    const newNode = new Node(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  // Delete a node by key
  deleteNode(key) {
    let current = this.head;
    let previous = null;
    while (current !== null && current.data !== key) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      console.log("Node with data", key, "not found.");
      return;
    }
    if (previous === null) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
  }

  // Traverse the linked list
  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:

const list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAfterNode(list.head.next, 25);
list.traverse(); // Should print 10, 20, 25, 30

list.deleteNode(25);
list.traverse(); // Should print 10, 20, 30
