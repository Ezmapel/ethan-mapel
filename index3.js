const pizza = {
  toppings: ["bacon", "sausage"],
  size: 16
};

console.log(pizza);

function changeToppings(...top) {
  pizza.toppings = top;
}
console.log("");
console.log("Now for some pizza with new toppings");

changeToppings("pepperoni", "pineapple");

console.log(pizza);
