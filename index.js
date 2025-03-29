// Your code here

class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) return false;
      let [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) return false;
      return this.sides.every(side => side === this.sides[0]);
    }
  
    get area() {
      return this.isValid ? this.sides[0] ** 2 : undefined;
    }
  }
  
  // Example usage:
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.isValid); // true
  console.log(triangle.perimeter); // 12
  
  const square = new Square([4, 4, 4, 4]);
  console.log(square.isValid); // true
  console.log(square.area); // 16