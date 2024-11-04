const rollDie = require('../../helpers/pokerDiceRoller').rollDie;

export function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promisesArrays = dice.map((diceIndex) => rollDie(diceIndex));
  return Promise.all(promisesArrays);
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
