// select the root node
const root = document.querySelector("html");
console.log(root);
console.log(document.querySelector("head").parentElement);

// select the last child of the root node
const lastChild = root.lastChild;
console.log("last child", lastChild);

// select all the children of the body element
const bodyChildren = lastChild.children;
console.log("body children", bodyChildren);
console.log(bodyChildren[4]);

// select the next sibling of the h2 node
const h2sibling = document.querySelector("h2").nextElementSibling;
console.log("h2", document.querySelector("h2"));
console.log("h2 sibling", h2sibling);

// select the parent element of the h1 node
console.log("parent", document.querySelector("h1").parentElement);
