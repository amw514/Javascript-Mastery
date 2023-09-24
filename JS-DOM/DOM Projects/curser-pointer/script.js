let main = document.querySelector("#main");

let curser = document.querySelector(".curser");

main.addEventListener("mousemove", function (e) {
  curser.style.left = e.x + "px";
  curser.style.top = e.y + "px";
});
