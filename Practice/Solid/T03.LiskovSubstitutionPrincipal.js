var LSP;
(function (LSP) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.calculateArea = function () {
            return Math.PI * this.radius * this.radius;
        };
        return Circle;
    }());
    LSP.Circle = Circle;
    var Rectangle = /** @class */ (function () {
        function Rectangle(length, breath) {
            this.length = length;
            this.breath = breath;
        }
        Rectangle.prototype.calculateArea = function () {
            return this.length * this.breath;
        };
        return Rectangle;
    }());
    LSP.Rectangle = Rectangle;
})(LSP || (LSP = {}));
var circle2 = new LSP.Circle(5);
console.log(circle2.calculateArea());
var rectangle2 = new LSP.Rectangle(5, 5);
console.log(rectangle2.calculateArea());
var circle3 = new LSP.Circle(4);
console.log(circle3.calculateArea());
var rectangle3 = new LSP.Rectangle(5, 5);
console.log(rectangle3.calculateArea());
