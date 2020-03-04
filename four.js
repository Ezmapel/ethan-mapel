// refactor your Animal function constructor and methods to use the class keyword

class Animal {
  constructor(name, type, weight, legs) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.legs = legs;
  }

  byte(name) {
    console.log(`${this.name} the ${this.type} done bit ${name}!`);
  }
}

// extend the Animal class with a type of animal
class Cat extends Animal {
  constructor(name, weight) {
    super(name, "Cat", weight, 4);
  }
}
// add some unique methods and properties to the class extension

class Dog extends Animal {
  constructor(name, weight) {
    super(name, "Dog", weight, 6);
  }
}

// create an instance of the class extension and call one of its methods

const dog = new Dog("Biff", 1000);
const cat = new Cat("Todd", 5);
const animal = new Animal("MR. Animal", "Gonzo", 30, 6);

console.log(dog);
console.log(cat);
console.log(animal);
