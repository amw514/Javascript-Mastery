// getElementById()

const title = document.getElementById("main-heading");

// getElementByClass()

const listItem = document.getElementsByClassName("list--items");

// getElementByTagName()

const list = document.getElementsByTagName("li");

// querySelector()

const container = document.querySelector(".container");

container.addEventListener("click", function () {
  container.style.backgroundColor = "red";
  container.style.color = "white";
});
