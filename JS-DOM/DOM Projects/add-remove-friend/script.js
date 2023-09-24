let status = document.querySelector("h1");

let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    btn.innerHTML = "Remove Friend";
    status.innerHTML = "Friend Added";
    flag = 1;
  } else {
    btn.innerHTML = "Add Friend";
    status.innerHTML = "Strangers";
    flag = 0;
  }
});
