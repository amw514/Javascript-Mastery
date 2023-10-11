function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("Here is your cheese: " + cheese);
    callback(cheese);
  }, 2000);
}

getCheese((cheese) => {
  console.log("got is your cheese: " + cheese);
});
