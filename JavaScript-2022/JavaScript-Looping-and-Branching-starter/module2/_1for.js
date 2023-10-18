console.log("Classic loop");
for (let step = 0; step <= 4; step++) {
  console.log("Walking east one step: " + step);
}

console.log("Getting every second element");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = 0; i < array.length / 2; i += 2) {
  console.log("Every second element: " + i);
}
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = 0; i <= array2.length; i += 2) {
  console.log("Every second element: " + i);
}
