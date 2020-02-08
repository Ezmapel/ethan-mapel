// 'const' is not about IMMUTABILITY (ability to change) - it's about NO REASSIGNMENT.
// OBJECTS can change. PRIMITIVES cannot.
const me = {};

// me = "23";
// I CANNOT REASSIGN 'me'

me.name = "Ethan";
// I CAN reassign the VALUE of key inside of 'me'

console.log(me);

me.lastname = "Mapel";
me.car = "";

console.log(me);

const someone = {
  name: "Kat",
  lastname: "Smith",
  pets: {
    cat: "Charlie",
    dog: "Twix"
  }
};

console.log(someone);

someone.lastname = "Smithy";

console.log(someone);

console.log(`Her favorite animal in the world is ${someone.pets.dog}.`);

console.log(someone["name"]);

let keyINeed = "pets";

console.log(someone.keyINeed);

// I MUST use BRACKET NOTATION if I need to use a VARIABLE for my key
console.log(someone[keyINeed]);
console.log(someone["keyINeed"]);
