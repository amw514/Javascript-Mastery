let items = document.querySelectorAll("li");

let ul = document.querySelectorAll("ul");

ul.addEventListener("click", () => {
  ul.style.border = "5px solid black";
});

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
});
