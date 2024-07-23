// A stack is a collection of elements that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed.

// Key Operations:

// 1) Push: Add an element to the top of the stack.
// 2) Pop: Remove the top element from the stack.
// 3) Peek (or Top): Return the top element without removing it.
// 4) IsEmpty: Check if the stack is empty.

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.size() - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const stackOne = new Stack();
stackOne.push(10);
stackOne.push(20);
stackOne.push(30);

console.log("items:==>", stackOne.items);
console.log("pop:==>", stackOne.pop());
console.log("items:==>", stackOne.items);
console.log("isEmpty:==>", stackOne.isEmpty());
console.log("pop:==>", stackOne.pop());
console.log("pop:==>", stackOne.pop());
console.log("isEmpty:==>", stackOne.isEmpty());
