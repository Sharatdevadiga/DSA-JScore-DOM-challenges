class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log(`${this.name} is making sound`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} is barking`);
  }
}

const shero = new Dog("shero", 4, "huskey");
shero.makeSound();
