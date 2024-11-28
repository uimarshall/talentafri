class User {
  // The constructor function runs whenever we want to create a new user object.

  // Whenever we create a new user object, we expect the user to have a unique email and password.

  // The constructor function is a special function that runs whenever we create a new user object to help us construct the the new user
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  login() {
    console.log(`${this.email} has logged in`);

    return this; // return the new user object
  }
}

const newUser = new User('email@email.com', 'password@password.com');

console.log('====================================');
console.log(newUser.email);
console.log('====================================');

const login = newUser.login();
console.log('====================================');
console.log(login);
console.log('====================================');
