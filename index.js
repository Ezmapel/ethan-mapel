let obj = {
  parents: [
    {
      name: "Mary",
      age: 45,
      likes: ["hiking", "running", "swimming"]
    },
    {
      name: "John",
      age: 50
    }
  ]
};

// console.log(obj);

for (const parent of obj.parents) {
  console.log(parent);
}

let key = "name";

console.log(obj.parents[0][key]);

// You cannot use . notation on an array...must use []
// You can use either on an object (. or [])

for (const stuffToDo of obj.parents[0].likes) {
  console.log(stuffToDo);
}

// MDN javascript hasOwnProperty
