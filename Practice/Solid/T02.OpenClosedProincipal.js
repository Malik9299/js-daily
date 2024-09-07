var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WithOCP1;
(function (WithOCP1) {
    var Shaper = /** @class */ (function () {
        function Shaper() {
        }
        return Shaper;
    }());
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(radius) {
            var _this = _super.call(this) || this;
            _this.radius = radius;
            return _this;
        }
        Circle.prototype.calculateArea = function () {
            return "Area of Circle: ".concat(Math.PI * this.radius * this.radius);
        };
        return Circle;
    }(Shaper));
    WithOCP1.Circle = Circle;
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(length, breath) {
            var _this = _super.call(this) || this;
            _this.length = length;
            _this.breath = breath;
            return _this;
        }
        Rectangle.prototype.calculateArea = function () {
            return "Area of Rectangle: ".concat(this.length * this.breath);
        };
        return Rectangle;
    }(Shaper));
    WithOCP1.Rectangle = Rectangle;
})(WithOCP1 || (WithOCP1 = {}));
var WithotOCP1;
(function (WithotOCP1) {
    var Shape = /** @class */ (function () {
        function Shape(type, radius, length, breath) {
            if (type === void 0) { type = ""; }
            if (radius === void 0) { radius = null; }
            if (length === void 0) { length = null; }
            if (breath === void 0) { breath = null; }
            this.type = type;
            this.radius = radius;
            this.length = length;
            this.breath = breath;
        }
        return Shape;
    }());
    WithotOCP1.Shape = Shape;
    var calculateArea = /** @class */ (function () {
        function calculateArea(shape) {
            this.shape = shape;
        }
        calculateArea.prototype.area = function () {
            var area = 0;
            if (this.shape.type.toLowerCase() == "circle") {
                area = this.shape.radius
                    ? Math.PI * this.shape.radius * this.shape.radius
                    : 0;
            }
            if (this.shape.type.toLocaleLowerCase() == "rectangle") {
                area =
                    this.shape.length && this.shape.breath
                        ? this.shape.length * this.shape.breath
                        : 0;
            }
            return area;
        };
        return calculateArea;
    }());
    WithotOCP1.calculateArea = calculateArea;
})(WithotOCP1 || (WithotOCP1 = {}));
console.log("------------------Without OpenClosedPrincipla------------------------");
var circle = new WithOCP1.Circle(5);
console.log(circle.calculateArea());
var rectangle = new WithOCP1.Rectangle(5, 5);
console.log(rectangle.calculateArea());
console.log("------------------------------------------");
console.log("------------------With OpenClosedPrincipla------------------------");
var shapeCircle = new WithotOCP1.Shape("circle", 5);
var areaCircle = new WithotOCP1.calculateArea(shapeCircle);
console.log(areaCircle.area());
var rectangleArea = new WithotOCP1.Shape("rectangle", null, 5, 5);
var areaRectangle = new WithotOCP1.calculateArea(rectangleArea);
console.log(areaRectangle.area());
