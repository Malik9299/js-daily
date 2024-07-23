// A queue is a collection of elements that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed.
// Key Operations:

// 1) enqueue: Add an element to the end of the queue.
// 2) dequeue: Remove the front element from the queue.
// 3) front: Return the front element without removing it.
// 4) isEmpty: Check if the queue is empty.

class Queu {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) {
      return false;
    } else {
      return this.items[0];
    }
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const queueOne = new Queu();
queueOne.enqueue(10);
queueOne.enqueue(20);
queueOne.enqueue(30);
console.log("items:==>", queueOne.items);
console.log("front:==>", queueOne.front());
console.log("dequeue:==>", queueOne.dequeue());
console.log("items:==>", queueOne.items);
console.log("isEmpty:==>", queueOne.isEmpty());
console.log("dequeue:==>", queueOne.dequeue());
console.log("dequeue:==>", queueOne.dequeue());
console.log("isEmpty:==>", queueOne.isEmpty());
