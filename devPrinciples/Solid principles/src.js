// this does not follows the SOLID principl, because, user and db functions are happening in the same class

class User1 {
  constructor(name) {
    this.name = name;
  }

  getname() {
    return this.name;
  }

  printname() {
    console.log(this.name);
  }

  saveData() {
    // db.user.save
  }

  sendEmail() {
    // sending email
  }
}

// THIS HAS THE SOLID PRICIPLE

class User {
  constructor(name) {
    this.name = name;
  }

  getname() {
    return this.name;
  }

  printname() {
    console.log(this.name);
  }
}

class UserRepo {
  constructor(user) {
    this.user = user;
  }

  saveData() {
    // db.user.save
  }
}

class Email {
  sendEmail(user) {
    console.log(`Email sent to ${user.name}`);
  }
}
