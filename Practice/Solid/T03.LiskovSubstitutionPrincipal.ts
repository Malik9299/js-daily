namespace LSP {
  export interface Shape {
    calculateArea(): number;
  }
  export class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    public calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  export class Rectangle implements Shape {
    private length: number;
    private breath: number;
    constructor(length: number, breath: number) {
      this.length = length;
      this.breath = breath;
    }
    public calculateArea(): number {
      return this.length * this.breath;
    }
  }
}

const circle2: LSP.Shape = new LSP.Circle(5);
console.log(circle2.calculateArea());

const rectangle2: LSP.Shape = new LSP.Rectangle(5, 5);
console.log(rectangle2.calculateArea());

const circle3: LSP.Circle = new LSP.Circle(4);
console.log(circle3.calculateArea());

const rectangle3: LSP.Rectangle = new LSP.Rectangle(5, 5);
console.log(rectangle3.calculateArea());
