"use strict";
var factory;
(function (factory) {
    class Circle {
        // Override
        draw() {
            console.log("Inside Circle::draw() method");
        }
    }
    factory.Circle = Circle;
    class Rectangle {
        draw() {
            console.log("Inside Rectangle::draw() method");
        }
    }
    factory.Rectangle = Rectangle;
    class ShapeFactory {
        static getShape(shapeType) {
            if (!shapeType) {
                return null;
            }
            if (shapeType.toLocaleLowerCase() === "circle") {
                return new Circle();
            }
            else if (shapeType.toLocaleLowerCase() === "rectangle") {
                return new Rectangle();
            }
            return null;
        }
    }
    factory.ShapeFactory = ShapeFactory;
})(factory || (factory = {}));
const shape1 = factory.ShapeFactory.getShape("Circle");
if (shape1) {
    shape1.draw();
}
const shape2 = factory.ShapeFactory.getShape("Rectangle");
if (shape2) {
    shape2.draw();
}
var factory2;
(function (factory2) {
    class User {
    }
    class Student extends User {
        constructor(user, password) {
            super();
            this.user = user;
            this.password = password;
        }
        login() {
            if (this.user === "ag" && this.password === "123") {
                console.log(`User Type Student loged in successfully`);
                return true;
            }
            else {
                console.log(`User Type Student loged in failed`);
                return false;
            }
        }
    }
    factory2.Student = Student;
    class Teacher extends User {
        constructor(user, password) {
            super();
            this.user = user;
            this.password = password;
        }
        login() {
            if (this.user === "ad" && this.password === "22") {
                console.log(`User Type Teacher loged in successfully`);
                return true;
            }
            else {
                console.log(`User Type Teacher loged in failed`);
                return false;
            }
        }
    }
    factory2.Teacher = Teacher;
    class UserFactory {
        constructor(user, password) {
            this.user = user;
            this.password = password;
        }
        getUserType(userType) {
            if (userType === null) {
                return null;
            }
            if (userType.toLocaleLowerCase() === "student") {
                return new Student(this.user, this.password);
            }
            else if (userType.toLocaleLowerCase() === "teacher") {
                return new Teacher(this.user, this.password);
            }
        }
    }
    factory2.UserFactory = UserFactory;
})(factory2 || (factory2 = {}));
const studentType = new factory2.UserFactory("ag", "123").getUserType("student");
studentType === null || studentType === void 0 ? void 0 : studentType.login();
const teacherType = new factory2.UserFactory("ag", "123").getUserType("teacher");
teacherType === null || teacherType === void 0 ? void 0 : teacherType.login();
