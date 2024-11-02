/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class Animal {
  constructor(name, family) {
    this.name = name;
    this.family = family;
  }

  speak() {
    console.log('The animal makes a sound');
  }
}

// the Dog class inherits from the Animal class and overrides the speak method to provide its specific implementation.
class Dog extends Animal {
  speak() {
    console.log('The dog barks');
  }
}

class SuperAnimal extends Animal {
  // delete an animal from the database
  deleteAnimal(animal) {
    console.log('The animal has been deleted');
    animals = animals.filter((anim) => anim.name !== animal.name);
  }
}

const dog = new Dog();
dog.speak(); // Output: The dog barks

const animalOne = new Animal('Dog', 'Domestic');
const animalTwo = new Animal('Hyena', ' Wild');
const superAnimal = new SuperAnimal('Lion', 'Wild');

let animals = [animalOne, animalTwo, superAnimal];
// console.log(animals);
superAnimal.deleteAnimal(animalOne);
console.log('deleted:', animals);
