export function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
        const rolledOff = new Error('Oops... Die rolled off the table.');
        reject(rolledOff);
        return;
      }

      if (roll === randomRollsToDo) {
        const success = `Die settled on ${roll}.`;
        resolve(success);
        return;
      }

      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    rollOnce(1);
  });
}

function main() {
  rollDie((error, value) => {
    if (error !== null) {
      console.log(error.message);
    } else {
      console.log(`Success! Die settled on ${value}.`);
    }
  });
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

// The problem no longer occurs because the updated code uses promises
// instead of callbacks, ensuring clear behavior.
