const pizza = {
  toppings: ["bacon", "sausage"],
  size: 16
};

console.log(pizza);

function changeToppings(...top) {
  pizza.toppings.push(...top);
}
console.log("");
console.log("Add those toppings on");

changeToppings("pepperoni", "mushrooms");

console.log(pizza);
