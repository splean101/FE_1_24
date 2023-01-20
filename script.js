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
      console.log('Permission denied');
    } else if (!this.#name) {
      console.log('login ', this.login);
    } else {
      console.log('name ', this.#name);
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

//2.
user1.getName(true);
user2.getName(true);
user2.getName(false);

//3.
user1.changeName('Bill', '123');

//4.
