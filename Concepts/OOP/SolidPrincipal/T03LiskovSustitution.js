"use strict";
var ViskoveSubstitution;
(function (ViskoveSubstitution) {
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle {
        constructor(length, breath) {
            this.length = length;
            this.breath = breath;
        }
        area() {
            return this.length * this.breath;
        }
    }
    console.log("With Parent Object type");
    const circle = new Circle(5);
    console.log(`Area of Circle: ${circle.area()}`);
    const rectangle = new Rectangle(3, 4);
    console.log(`Rectangle of Circle: ${rectangle.area()}`);
    console.log("With Child Object type");
    const circle1 = new Circle(5);
    console.log(`Area of Circle: ${circle1.area()}`);
    const rectangle1 = new Rectangle(3, 4);
    console.log(`Rectangle of Circle: ${rectangle1.area()}`);
})(ViskoveSubstitution || (ViskoveSubstitution = {}));
