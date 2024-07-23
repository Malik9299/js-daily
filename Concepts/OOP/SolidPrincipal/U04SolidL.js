// L: LISKOV Substitution Principal
// If you have a method which forks for the base type it must also work for a derived type

// CH: It states that objects of a superclass should be replaceable with objects of a subclass without affecting the functionality of the program
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  getWidth() {
    return this._width;
  }
  getHeight() {
    return this._height;
  }
  setWidth(width) {
    this._width = width;
  }
  setHeight(height) {
    this._height = height;
  }
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  //   here start
  set width(value) {
    this._width = value;
    this._height = value;
  }
  set height(value) {
    this._width = value;
    this._height = value;
  }
}
const square = new Square(2);
square.width = 3;
console.log(square.getArea());
