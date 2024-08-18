// Interface segregation principle (ISP) -> clients should not be forced to depend on interfaces they donot use.

// this doesnot follows the ISP
class Animala {
  eat() {}
  sleep() {}
  swim() {}
  fly() {}
}

class Animal {
  eat() {}
  fly() {}
}

// keep the minimal common functionality
class FlyingAnimal extends Animal {
  fly() {
    console.log("I can Fly");
  }
}

class swimmingAnimal extends Animal {
  swimming() {
    console.log("I can swim");
  }
}
