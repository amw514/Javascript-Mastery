const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
};

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
