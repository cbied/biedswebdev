const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// mouse enter move right
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});
// mouse leave move back
left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});
// mouse enter move left
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});
// mouse enter move back
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

const leftBtn = document.querySelector("#leftBtn");
const accordion = document.querySelector("#accordion");

accordion.hidden = true;

// toggle read more
leftBtn.addEventListener("click", () => {
  if (accordion.hidden === true) {
    return accordion.hidden = false;
  } else if (accordion.hidden === false) {
    return accordion.hidden = true;
  }
})


// accordion hidden when mouseleave
accordion.addEventListener("mouseleave", () => {
    accordion.hidden = true;
})
