namespace WithOCP1 {
  abstract class Shaper {
    public abstract calculateArea(): string;
  }
  export class Circle extends Shaper {
    private radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    public calculateArea() {
      return `Area of Circle: ${Math.PI * this.radius * this.radius}`;
    }
  }
  export class Rectangle extends Shaper {
    private length: number;
    private breath: number;
    constructor(length: number, breath: number) {
      super();
      this.length = length;
      this.breath = breath;
    }
    public calculateArea() {
      return `Area of Rectangle: ${this.length * this.breath}`;
    }
  }
}
namespace WithotOCP1 {
  export class Shape {
    public type: string;
    public radius: number | null;
    public length: number | null;
    public breath: number | null;
    constructor(
      type: string = "",
      radius: number | null = null,
      length: number | null = null,
      breath: number | null = null
    ) {
      this.type = type;
      this.radius = radius;
      this.length = length;
      this.breath = breath;
    }
  }
  export class calculateArea {
    private shape: Shape;
    constructor(shape: Shape) {
      this.shape = shape;
    }
    public area() {
      let area = 0;
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
    }
  }
}
console.log(
  "------------------Without OpenClosedPrincipla------------------------"
);

const circle = new WithOCP1.Circle(5);
console.log(circle.calculateArea());

const rectangle = new WithOCP1.Rectangle(5, 5);
console.log(rectangle.calculateArea());

console.log("------------------------------------------");

console.log(
  "------------------With OpenClosedPrincipla------------------------"
);

const shapeCircle = new WithotOCP1.Shape("circle", 5);
const areaCircle = new WithotOCP1.calculateArea(shapeCircle);
console.log(areaCircle.area());

const rectangleArea = new WithotOCP1.Shape("rectangle", null, 5, 5);
const areaRectangle = new WithotOCP1.calculateArea(rectangleArea);
console.log(areaRectangle.area());
