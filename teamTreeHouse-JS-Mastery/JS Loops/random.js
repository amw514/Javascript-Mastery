let html = "";

const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
  const color = `rgb(${value()},${value()},${value()})`;
  return color;
}

for (let i = 0; i <= 1000; i++) {
  html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector("main").innerHTML = html;
