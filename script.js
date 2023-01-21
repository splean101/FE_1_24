//1.

/*class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  //2.

  //3.
  changeName(newName, pass) {
    if (pass === '123') {
      let oldName = this.#name;
      this.#name = newName;
      console.log(`Name Changed from ${oldName} to ${this.#name}`);
      return;
    }
    console.log('Permission denied');
  }
  getName(isAdmin) {
    if (!isAdmin) {
      console.log('Permission denied');
    } else if (!this.#name) {
      console.log('login ', this.login);
    } else {
      console.log('name ', this.#name);
    }
  }
}

//1.
const user1 = new User('Mike', 'MK_18', 18);
const user2 = new User('', 'NRG', 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

//2.
user1.getName(true);
user2.getName(true);
user2.getName(false);

//3.
user1.changeName('Bill', '123');*/

//4.
/*class User {
  constructor(name, login, age) {
    this.name = name;
    this.login = login;
    this.age = age;
  }
}

class Admin extends User {
  #isAdmin;
  constructor(name, login, age, isAdmin) {
    super(name, login, age);
    this.#isAdmin = true;
  }
  getUserName(user) {
    console.log(user.name);
  }
}

const user = new User('Mike', 'mike101', 33);
const admin = new Admin('Bob', 'lad', 56);
admin.getUserName(user);*/

//5.

class User {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }
  getPhone(isAdmin) {
    if (isAdmin) {
      console.log(this.#phone);
      return;
    }
    let hiddenPhone = this.#phone.split('');
    for (let i = 4; i < hiddenPhone.length - 3; i++) {
      hiddenPhone[i] = '*';
    }
    console.log(hiddenPhone.join(''));
  }
}

const user1 = new User('Mike', '067-888-88-99');
const user2 = new User('Tom', '099-888-88-99');
user1.getPhone(false);
user2.getPhone(false);
user1.getPhone(true);
user2.getPhone(true);
