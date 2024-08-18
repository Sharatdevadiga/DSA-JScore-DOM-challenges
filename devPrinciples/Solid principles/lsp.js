class Bird {
  fly() {
    console.log("I can fly");
  }
}

// this is not correct, because, this cannot replace the object of the superclass
class Penguin extends Bird {
  fly() {
    throw new Error("I cannot fly");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const bird = new Bird();
const pengiun = new Penguin();
makeBirdFly(bird);
makeBirdFly(pengiun);

// CORRECT WAY
class Bird2 {
  move() {
    console.log("I can move");
  }
}

class FlyingBird extends Bird2 {
  move() {
    console.log("I can fly");
  }
}

class nonFlyingBird extends Bird2 {
  move() {
    console.log("I can walk but not fly");
  }
}

const parrot = new FlyingBird();
const penguin = new nonFlyingBird();
parrot.move();
penguin.move();
