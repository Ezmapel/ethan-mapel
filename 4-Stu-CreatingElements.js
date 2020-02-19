// create a new unordered list (ul) element
const ul = document.createElement("ul");
console.log("ul", ul);

// remove the paragraph element in the nav-bar
document
  .querySelector(".nav-bar")
  .removeChild(document.querySelector(".nav-bar > p"));
// other way to do it
// document.querySelector(".nav-bar > p").remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(ul);

// create two new list item (li) elements, and add some text to them
const listItemOne = document.createElement("li");
const listItemTwo = document.createElement("li");
listItemOne.textContent = "Home";
listItemTwo.textContent = "Contact";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItemOne);
document.querySelector(".nav-bar > ul").appendChild(listItemTwo);
