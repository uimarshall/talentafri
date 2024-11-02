const user = {
  name: 'John Doe',
  email: 'john@email.com',
  password: 'password',
  isAdmin: false,
  login() {
    console.log(`${this.name} has logged in`); // this refers to the object itself.
  },

  checkUserType() {
    if (this.isAdmin) {
      console.log(`${this.name} is an admin`);
    } else {
      console.log(`${this.name} is a regular user`);
    }
  },
};

console.log(user.name);
console.log(user.login());
console.log('====================================');
console.log(user.checkUserType());
console.log('====================================');
