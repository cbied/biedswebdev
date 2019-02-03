const left = document.getElementsByClassName("left")[0];
const right = document.getElementsByClassName("right")[0];
const container = document.getElementsByClassName("container")[0];


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


// Init tooltips
  $('[data-toggle="tooltip"]').tooltip();
