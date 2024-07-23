// Example: Managing Users
// Imagine you have a system that needs to manage users, including their authentication and profile management. According to SRP, you should separate these concerns into different classes or modules.

class todoList {
  // This is a class with a single responsibility which works on entitty of list
  constructor() {
    this.items = [];
  }
  addItem(text) {
    this.items.push(text);
  }
  removeitem(index) {
    this.items = this.items.slice(index, 1);
  }
  toiString() {
    return this.items.toString();
  }
  //   When we add 2 new methods
  //   saveToFile(data, fileName) {
  //     fstat.writeFileSync(fileName, data.toString());
  //   }
  //   loadFromFile() {
  //     // some implementation
  //   }
  //   So these 2 methods are completly unrelate to todoList at all
  //   they are relatting with the File or Database
  //   We should brought here a single responbility principal
  //   What is the good solution here
}
// we can create another class
// and move these 2 methods to the new calss

class databaseManager {
  saveToFile(data, fileName) {
    fstat.writeFileSync(fileName, data.toString());
  }
  loadFromFile() {
    // some implementation
  }
}
// In this case we corectly implemented the single resposibilty principal with
//  while working with todoList entity with todoList class
//  and while working with database inside our databasemanager class
