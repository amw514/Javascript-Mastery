const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
};

let counter = 0;

while (counter < 1000) {
  console.log(getRandomNumber());
  counter += 1;
}

for (i = 0; i < 10; i++) {
  console.log(getRandomNumber());
}
