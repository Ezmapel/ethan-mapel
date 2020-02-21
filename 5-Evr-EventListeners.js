// add an event listener to the dog picture that listens for a "click" and gives an alert
document
  .querySelector("#dog-picture")
  .addEventListener("click", () => alert("BORK!"));

// add an event listener to the list items in the class schedule that listens for a "focus" event and changes its background color

const weeks = document.querySelectorAll(".class-week");

for (let i = 0; i < weeks.length; i++) {
  weeks[i].addEventListener("mouseover", event => {
    let eventTarget = event.target;
    eventTarget.style.backgroundColor = "yellow";
  });
}

for (let i = 0; i < weeks.length; i++) {
  weeks[i].addEventListener("mouseout", event => {
    let eventTarget = event.target;
    eventTarget.style.backgroundColor = "";
  });
}
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document
  .querySelector("body")
  .addEventListener("keydown", event => console.log(event.key));

function myFunction() {
  let expand = document.querySelectorAll(".x");
  console.log("expand", expand);
  for (let i = 0; i <= expand.length; i++) {
    // console.log(expand[i].classList);
    expand[i].classList.toggle("x");
  }
}

document
  .querySelector("#class-schedule-list > ol > li:nth-child(2)")
  .addEventListener("click", () => myFunction());
