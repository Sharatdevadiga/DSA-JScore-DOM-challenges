function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}

Person.prototype.addSalary = function (salary) {
  this.salary = salary;
};

const jhon = new Person("Jhon", 34);
jhon.greet();
jhon.addSalary(50000);
console.log(jhon.salary);
console.log(jhon.__proto__);
console.log(Person.prototype);

// EXAMPLE 2
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype.greet = function () {
  console.log(`Welcome ${this.name}!!`);
};

const saitama = new Person2("Saitama", 23);
saitama.greet();
console.log(Person2.prototype);
console.log(saitama.__proto__);
