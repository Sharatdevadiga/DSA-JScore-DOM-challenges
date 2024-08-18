function MenuItem(name, desc, price) {
  this.name = name;
  (this.desc = desc), (this.price = price);
}

MenuItem.prototype.displayItem = function () {
  console.log(`${this.desc}-${this.name} @ ${this.price}$`);
};

const burger = new MenuItem("burger", "large", 10);
burger;
burger.displayItem();

//
