// Polymorphism
// poly means many
// morph means form

// is the ability to create a varisble , a function or an object that has more than one form
// polymorphism is the oop facility  which provids the facility to perform one task in many ways

// example
class Animal {
  constructor(animalName) {
    this.animalName = animalName;
  }

  // this method/function is polymorphic because it also exists in the child class alligator
  eats() {
    console.log(this.animalName + " eats meat.");
  }
}

class Alligator extends Animal {
  eats() {
    super.eats();
    console.log(this.animalName + " eats fish.");
  }
}
let tyla = new Alligator("Kamiat");
tyla.eats();
