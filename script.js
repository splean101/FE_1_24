//1.

class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  //2.
  getName(isAdmin) {
    if (!isAdmin) {
      return 'Permission denied';
    } else if (!this.#name) {
      return this.login;
    } else {
      return this.#name;
    }
  }

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
}

//1.
const user1 = new User('Mike', 'MK_18', 18);
const user2 = new User('', 'NRG', 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

2.
console.log(user1.getName(true)); 
console.log(user2.getName(true)); 
console.log(user2.getName(false)); 

//3.
user1.changeName('Bill', '123');

//4.

class Admin extends User {
  #isAdmin;
  constructor(name, login, age, isAdmin) {
    super(name, login, age);
    this.#isAdmin = true;
  }
  getUserName(user) {
    return user.getName(this.#isAdmin);
  }
}

const user = new User('Mike', 'mike101', 33);
const admin = new Admin('Bob', 'lad', 56);
console.log(admin.getUserName(user));
console.log(admin.getUserName(admin));

//5.

class Userr {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }
  getPhone(isAdmin) {
    if (isAdmin) {
      return this.#phone;
    }
    let hiddenPhone = this.#phone.split('');
    for (let i = 4; i < hiddenPhone.length - 3; i++) {
      hiddenPhone[i] = '*';
    }
    return hiddenPhone.join('');
  }
}

const user11 = new Userr('Mike', '067-888-88-99');
const user22 = new Userr('Tom', '099-888-88-99');
console.log(user11.getPhone(false));
console.log(user22.getPhone(false));
console.log(user11.getPhone(true));
console.log(user22.getPhone(true));
