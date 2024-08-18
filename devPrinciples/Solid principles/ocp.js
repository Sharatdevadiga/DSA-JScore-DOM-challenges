// Open closed principle -> a software entities should be open for extension
// but it should be closed for modification

//  bad practice
class Area {
  claculate(shape) {
    if (shape instanceof Square) {
      return shape.width * shape.width;
    } else if (shape instanceof Circle) {
      // return
    } else if (shape instanceof rectangle) {
      // return
    }
  }
}

// good practice
class Shape {
  area() {
    throw new Error("Area function must be implemented in the class");
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const square1 = new Square(4);
console.log(square1.area());

const rectangle1 = new Rectangle(4, 5);
console.log(rectangle1.area());
