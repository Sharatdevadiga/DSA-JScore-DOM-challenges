class MathUtil {
  static PI = 3.142;

  static calculateCircleArea(radius) {
    return MathUtil.PI * Math.pow(radius, 2);
  }
}

const instance1 = new MathUtil();
// instance1.calculateCircleArea(4);

const area1 = MathUtil.calculateCircleArea(4);
console.log(area1);
