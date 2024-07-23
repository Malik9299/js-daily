"use strict";
var withoutOC;
(function (withoutOC) {
    class Shape {
        constructor(type = "", radius = null, length = null, breath = null) {
            this.type = type;
            this.radius = radius;
            this.length = length;
            this.breath = breath;
        }
    }
    withoutOC.Shape = Shape;
    class CalculateArea {
        constructor(shape) {
            this.shape = shape;
        }
        area() {
            var _a, _b;
            let area = 0;
            if (((_a = this.shape.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == "circle") {
                area = this.shape.radius
                    ? Math.PI * this.shape.radius * this.shape.radius
                    : 0;
            }
            if (((_b = this.shape.type) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == "rectangle") {
                area =
                    this.shape.length && this.shape.breath
                        ? this.shape.length * this.shape.breath
                        : 0;
            }
            return area;
        }
    }
    withoutOC.CalculateArea = CalculateArea;
    console.log("=========Without Open Closed Principal============");
    const circleShape = new withoutOC.Shape("circle", 5);
    const circleArea = new withoutOC.CalculateArea(circleShape).area();
    console.log(`Circle Area: ${circleArea}`);
    const rectangleShape = new withoutOC.Shape("Rectangle", null, 3, 4);
    const rectangleArea = new withoutOC.CalculateArea(rectangleShape).area();
    console.log(`Rectangle Area: ${rectangleArea}`);
})(withoutOC || (withoutOC = {}));
var withOC;
(function (withOC) {
    class Shape {
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius * this.radius;
        }
    }
    withOC.Circle = Circle;
    class Rectangle extends Shape {
        constructor(length, breath) {
            super();
            this.lenght = length;
            this.breath = breath;
        }
        area() {
            return this.lenght * this.breath;
        }
    }
    withOC.Rectangle = Rectangle;
    console.log("=========With Open Closed Principal============");
    console.log(`Areac of Circle: ${new Circle(5).area()}`);
    console.log(`Areac of Rectangle: ${new Rectangle(3, 4).area()}`);
})(withOC || (withOC = {}));
