namespace factory {
  export interface Shape {
    draw(): void;
  }
  export class Circle implements Shape {
    // Override
    draw(): void {
      console.log("Inside Circle::draw() method");
    }
  }
  export class Rectangle implements Shape {
    draw(): void {
      console.log("Inside Rectangle::draw() method");
    }
  }
  export class ShapeFactory {
    public static getShape(shapeType: string): Shape | null {
      if (!shapeType) {
        return null;
      }
      if (shapeType.toLocaleLowerCase() === "circle") {
        return new Circle();
      } else if (shapeType.toLocaleLowerCase() === "rectangle") {
        return new Rectangle();
      }
      return null;
    }
  }
}

const shape1: factory.Shape | null = factory.ShapeFactory.getShape("Circle");
if (shape1) {
  shape1.draw();
}

const shape2: factory.Shape | null = factory.ShapeFactory.getShape("Rectangle");
if (shape2) {
  shape2.draw();
}

namespace factory2 {
  abstract class User {
    abstract login(): boolean;
  }
  export class Student extends User {
    private user: string;
    private password: string;
    constructor(user: string, password: string) {
      super();
      this.user = user;
      this.password = password;
    }
    public login(): boolean {
      if (this.user === "ag" && this.password === "123") {
        console.log(`User Type Student loged in successfully`);
        return true;
      } else {
        console.log(`User Type Student loged in failed`);
        return false;
      }
    }
  }
  export class Teacher extends User {
    private user: string;
    private password: string;
    constructor(user: string, password: string) {
      super();
      this.user = user;
      this.password = password;
    }
    public login(): boolean {
      if (this.user === "ad" && this.password === "22") {
        console.log(`User Type Teacher loged in successfully`);
        return true;
      } else {
        console.log(`User Type Teacher loged in failed`);
        return false;
      }
    }
  }
  export class UserFactory {
    private user: string;
    private password: string;
    constructor(user: string, password: string) {
      this.user = user;
      this.password = password;
    }
    public getUserType(userType: string) {
      if (userType === null) {
        return null;
      }
      if (userType.toLocaleLowerCase() === "student") {
        return new Student(this.user, this.password);
      } else if (userType.toLocaleLowerCase() === "teacher") {
        return new Teacher(this.user, this.password);
      }
    }
  }
}

const studentType = new factory2.UserFactory("ag", "123").getUserType(
  "student"
);
studentType?.login();

const teacherType = new factory2.UserFactory("ag", "123").getUserType(
  "teacher"
);
teacherType?.login();
