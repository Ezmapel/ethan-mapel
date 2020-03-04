// create a function constructor that works as a template for an Animal

function Animal(name, type, weight, size) {
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.size = size;
  this.bio = `This animal is called a ${this.name}`;
}

// include properties for name, type, weight, etc.

// create a new instance on an Animal

const tiger = new Animal("tiger", "mammal", "800 lbs?", "big");

console.log(tiger);
// add methods to the Animal prototype

// attach a method directly to the Animal instance that "overwrites" a prototype method
const elephant = new Animal("elephant", "mammal", "2,000lbs?", "very big");

console.log(elephant);

Animal.prototype.woof = function() {
  console.log(`${this.name} says woof`);
};

const dog = new Animal("dog", "mammal", "45lbs", "just right");
console.log(dog);

dog.woof();
