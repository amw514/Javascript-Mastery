let card = document.querySelector(".card");

let heart = document.querySelector(".heart");

card.addEventListener("dblclick", function () {
  heart.style.transform = "scale(1)";
  heart.style.opacity = "1";

  setTimeout(function () {
    heart.style.opacity = "0";
  }, 1000);
  setTimeout(function () {
    heart.style.transform = "scale(0)";
  }, 1500);
});
