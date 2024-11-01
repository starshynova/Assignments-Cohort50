export function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    if (number < 10 || number > 99) {
      const incorrectAnswer = new Error(
        `Expected a double digit number but got ${number}`
      );
      reject(incorrectAnswer);
    } else {
      const correctAnswer = 'This is a double digit number!';
      resolve(correctAnswer);
    }
  });
}

function main() {
  checkDoubleDigits(9)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(10)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(99)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(100)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
