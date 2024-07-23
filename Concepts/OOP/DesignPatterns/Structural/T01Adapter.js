"use strict";
var Adapter;
(function (Adapter) {
    class User {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        getFirstName() {
            return this.firstName;
        }
        getLastName() {
            return this.lastName;
        }
        getAge() {
            return this.age;
        }
    }
    Adapter.User = User;
    class userAdaptor {
        constructor(user) {
            this.user = user;
        }
        getFullName() {
            return `${this.user.getFirstName()}-${this.user.getLastName()}`;
        }
        getAge() {
            return this.user.getAge();
        }
    }
    Adapter.userAdaptor = userAdaptor;
})(Adapter || (Adapter = {}));
const user1 = new Adapter.User("Abdul", "Ghafoor", 38);
const userDTO = new Adapter.userAdaptor(user1);
console.log(`Existing Functionality`);
console.log(`First Name: ${user1.getFirstName()}`);
console.log(`Last Name: ${user1.getLastName()}`);
console.log(`New Functionality`);
console.log(`Full Name: ${userDTO.getFullName()}`);
// The Adapter Design Pattern is a structural pattern that allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of a class into another interface that a client expects. This pattern is often used to make existing classes work with others without modifying their source code.
