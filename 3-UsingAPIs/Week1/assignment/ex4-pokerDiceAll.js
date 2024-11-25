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

// When using Promise.all() all dice rolls are initiated simultaneously.
// If one die rejects, Promise.all() immediately rejects with that error,
// but other promises will still continue executing.
// This happens because promises, once created, run independently
// and can't be stopped before it will bi finished.
