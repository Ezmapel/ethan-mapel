// James version of 3
// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.
function Animal(name, type, weight, legs) {
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.legs = legs;
  this.byte = function(name) {
    console.log(`${this.name} the ${this.type} done bit ${name}!`);
  }; /**/
}
// create a new instance on an Animal
const dog = new Animal("Doge", "Dog", 7000, 4);
// add methods to the Animal prototype
Animal.prototype.byte = function(name) {
  console.log(`${this.name} the ${this.type} done bit you!`);
};
//Animal.prototype
const dog2 = new Animal("Frank", "Dog", 7000, 4);
dog2.byte = function() {
  console.log(`WAT!?`);
};
dog.byte("billy");
dog2.byte("mike");
// attach a method directly to the Animal instance that "overwrites" a prototype method
