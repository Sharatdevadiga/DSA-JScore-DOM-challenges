class Client {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

const client1 = new Client("xavier", 34);
console.log(client1.name);

client1.name = "rakesh";
console.log(client1.name);
